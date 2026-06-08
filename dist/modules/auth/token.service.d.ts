import type { Role } from "../../generated/prisma/client.js";
export declare class TokenService {
    generateAccessToken(userId: string): string;
    generateRegisterToken(userId: string, role: Role, tenantId: string): string;
    generateRefreshToken(userId: string): string;
}
//# sourceMappingURL=token.service.d.ts.map