import { Role } from "../../generated/prisma/client.js";
import type { RegisterInput } from "./auth.types.js";
export declare class AuthRepository {
    findByEmail(email: string): Promise<{
        password: string;
        id: string;
        fullName: string;
        email: string;
        mobile: string;
        role: Role;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    createUser(input: RegisterInput): Promise<{
        id: string;
        fullName: string;
        email: string;
        mobile: string;
        role: Role;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
//# sourceMappingURL=auth.repository.d.ts.map