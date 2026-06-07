import bcrypt from "bcryptjs";
import { Role } from "../../generated/prisma/client.js";
import { prisma } from "../../config/database.js";
import { userPublicFields } from "../users/user.types.js";
export class AuthRepository {
    async findByEmail(email) {
        return prisma.user.findUnique({
            where: { email },
        });
    }
    async createUser(input) {
        const hashedPassword = await bcrypt.hash(input.password, 10);
        return prisma.user.create({
            data: {
                fullName: input.fullName,
                email: input.email,
                mobile: input.mobile,
                password: hashedPassword,
                role: Role.STUDENT,
            },
            select: userPublicFields,
        });
    }
}
//# sourceMappingURL=auth.repository.js.map