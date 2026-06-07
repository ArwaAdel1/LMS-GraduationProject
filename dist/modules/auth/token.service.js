import jwt from "jsonwebtoken";
import { env } from "../../config/env.js";
export class TokenService {
    generateAccessToken(userId) {
        return jwt.sign({ sub: userId }, env.JWT_SECRET, {
            expiresIn: env.JWT_EXPIRES_IN,
        });
    }
    generateRefreshToken(userId) {
        return jwt.sign({ sub: userId }, env.JWT_REFRESH_SECRET, {
            expiresIn: env.JWT_REFRESH_EXPIRES_IN,
        });
    }
}
//# sourceMappingURL=token.service.js.map