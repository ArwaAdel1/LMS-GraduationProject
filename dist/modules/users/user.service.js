import bcrypt from "bcryptjs";
import { prisma } from "../../config/database.js";
import { UserRepository } from "./user.repository.js";
import { userPublicFields } from "./user.types.js";
export class UserService {
    constructor(userRepository = new UserRepository()) {
        this.userRepository = userRepository;
    }
    async listUsers() {
        return this.userRepository.findAll();
    }
    async createUser(input) {
        const existingUser = await prisma.user.findFirst({
            where: {
                OR: [{ email: input.email }, { mobile: input.mobile }],
            },
        });
        if (existingUser) {
            const error = new Error("Email or mobile number already exists");
            error.status = 409;
            throw error;
        }
        const hashedPassword = await bcrypt.hash(input.password, 10);
        return prisma.user.create({
            data: {
                fullName: input.fullName,
                email: input.email,
                mobile: input.mobile,
                password: hashedPassword,
                role: input.role,
            },
            select: userPublicFields,
        });
    }
}
//# sourceMappingURL=user.service.js.map