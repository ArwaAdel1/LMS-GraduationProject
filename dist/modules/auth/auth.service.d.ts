import { AuthRepository } from "./auth.repository.js";
import { TokenService } from "./token.service.js";
import type { LoginInput, RegisterInput } from "./auth.types.js";
export declare class AuthService {
    private readonly authRepository;
    private readonly tokenService;
    constructor(authRepository?: AuthRepository, tokenService?: TokenService);
    register(input: RegisterInput): Promise<{
        user: {
            id: string;
            fullName: string;
            email: string;
            mobile: string;
            role: import("../../generated/prisma/enums.js").Role;
            createdAt: Date;
            updatedAt: Date;
        };
        accessToken: string;
        refreshToken: string;
    }>;
    login(input: LoginInput): Promise<{
        user: {
            id: string;
            fullName: string;
            email: string;
            mobile: string;
            role: import("../../generated/prisma/enums.js").Role;
            createdAt: Date;
            updatedAt: Date;
        };
        accessToken: string;
        refreshToken: string;
    }>;
}
//# sourceMappingURL=auth.service.d.ts.map