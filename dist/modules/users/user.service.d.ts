import { UserRepository } from "./user.repository.js";
import type { CreateUserInput } from "./user.validation.js";
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository?: UserRepository);
    listUsers(): Promise<{
        id: string;
        fullName: string;
        email: string;
        mobile: string;
        role: import("../../generated/prisma/enums.js").Role;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    createUser(input: CreateUserInput): Promise<{
        id: string;
        fullName: string;
        email: string;
        mobile: string;
        role: import("../../generated/prisma/enums.js").Role;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
//# sourceMappingURL=user.service.d.ts.map