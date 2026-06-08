import { Role, Status } from "../../generated/prisma/client.js";
import { TokenService } from "./token.service.js";
import type { RegisterInput, ForgotPasswordInput, ResetPasswordInput } from "./auth.validation.js";
export declare class AuthService {
    private readonly tokenService;
    constructor(tokenService?: TokenService);
    registerUser(input: RegisterInput): Promise<{
        user: {
            fullName: string;
            mobile: string;
            email: string | null;
            role: Role;
            id: string;
            status: Status;
            tenantId: string;
            createdAt: Date;
            updatedAt: Date;
        };
        accessToken: string;
    }>;
    forgotPassword(input: ForgotPasswordInput): Promise<{
        message: string;
    }>;
    resetPassword(input: ResetPasswordInput): Promise<{
        message: string;
    }>;
}
//# sourceMappingURL=auth.service.d.ts.map