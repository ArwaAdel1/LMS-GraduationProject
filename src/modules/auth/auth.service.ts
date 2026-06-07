import bcrypt from "bcryptjs";
import { Role, Status } from "../../generated/prisma/client.js";
import { prisma } from "../../config/database.js";
import { userPublicFields } from "../users/user.types.js";
import { TokenService } from "./token.service.js";
import type { RegisterInput, LoginInput } from "./auth.validation.js";
import type { ApiError } from "../../shared/types/common.types.js";

export class AuthService {
  constructor(private readonly tokenService = new TokenService()) {}

  // ─── Register ────────────────────────────────────────────────────────────────

  public async registerUser(input: RegisterInput) {
    // Check mobile uniqueness
    const existingMobile = await prisma.user.findUnique({
      where: { mobile: input.mobile },
      select: { id: true },
    });

    if (existingMobile) {
      const error = new Error("Mobile number already registered") as ApiError;
      error.status = 409;
      throw error;
    }

    // Check email uniqueness (only when provided)
    if (input.email) {
      const existingEmail = await prisma.user.findUnique({
        where: { email: input.email },
        select: { id: true },
      });

      if (existingEmail) {
        const error = new Error("Email already registered") as ApiError;
        error.status = 409;
        throw error;
      }
    }

    // Hash password with salt rounds = 12
    const hashedPassword = await bcrypt.hash(input.password, 12);

    // Create user + optional StudentProfile in a single transaction
    const user = await prisma.$transaction(async (tx) => {
      const created = await tx.user.create({
        data: {
          fullName: input.fullName,
          mobile: input.mobile,
          email: input.email ?? null,
          password: hashedPassword,
          role: input.role === "OPERATION" ? Role.OPERATION : Role.STUDENT,
          status: Status.ACTIVE,
        },
        select: userPublicFields,
      });

      if (input.role === "STUDENT") {
        await tx.studentProfile.create({
          data: { userId: created.id },
        });
      }

      return created;
    });

    const accessToken = this.tokenService.generateRegisterToken(
      user.id,
      user.role,
      user.tenantId,
    );

    return { user, accessToken };
  }

  // ─── Login ───────────────────────────────────────────────────────────────────

  public async loginUser(input: LoginInput) {
    // 1. Find user by email OR mobile
    //    نجيب الـ password من الـ DB بس هنا عشان نقارن — مش هنرجعه للـ client
    const user = await prisma.user.findFirst({
      where: {
        OR: [
          ...(input.email ? [{ email: input.email }] : []),
          ...(input.mobile ? [{ mobile: input.mobile }] : []),
        ],
      },
      select: {
        ...userPublicFields,
        password: true, // محتاجينها للمقارنة بس
      },
    });

    // 2. Generic error — مش بنقول للمهاجم إيه اللي غلط بالظبط (email ولا password)
    const invalidCredentials = () => {
      const error = new Error("Invalid credentials") as ApiError;
      error.status = 401;
      return error;
    };

    if (!user) throw invalidCredentials();

    // 3. Compare password (timing-safe via bcrypt)
    const isPasswordValid = await bcrypt.compare(input.password, user.password);
    if (!isPasswordValid) throw invalidCredentials();

    // 4. Check account status
    if (user.status === Status.BANNED) {
      const error = new Error("Your account has been banned") as ApiError;
      error.status = 403;
      throw error;
    }

    if (user.status === Status.INACTIVE) {
      const error = new Error("Your account is inactive") as ApiError;
      error.status = 403;
      throw error;
    }

    // 5. Generate tokens
    const { password: _password, ...safeUser } = user; // نشيل الـ password من الـ response
    const accessToken = this.tokenService.generateAccessToken(safeUser.id);
    const refreshToken = this.tokenService.generateRefreshToken(safeUser.id);

    // 6. Save refresh token in DB (hashed for extra security)
    const hashedRefreshToken = await bcrypt.hash(refreshToken, 10);
    await prisma.refreshToken.create({
      data: {
        token: hashedRefreshToken,
        userId: safeUser.id,
      },
    });

    return { user: safeUser, accessToken, refreshToken };
  }
}
