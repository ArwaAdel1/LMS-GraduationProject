import { UserRepository } from "./user.repository.js";
import type { CreateUserInput } from "./user.validation.js";
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository?: UserRepository);
    listUsers(): Promise<{
        fullName: string;
        mobile: string;
        email: string | null;
        role: import("../../generated/prisma/enums.js").Role;
        id: string;
        status: import("../../generated/prisma/enums.js").Status;
        tenantId: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    createUser(input: CreateUserInput): Promise<{
        fullName: string;
        mobile: string;
        email: string | null;
        role: import("../../generated/prisma/enums.js").Role;
        id: string;
        status: import("../../generated/prisma/enums.js").Status;
        tenantId: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
//# sourceMappingURL=user.service.d.ts.map