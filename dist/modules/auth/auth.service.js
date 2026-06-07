import bcrypt from "bcryptjs";
import { AuthRepository } from "./auth.repository.js";
import { TokenService } from "./token.service.js";
export class AuthService {
    authRepository;
    tokenService;
    constructor(authRepository = new AuthRepository(), tokenService = new TokenService()) {
        this.authRepository = authRepository;
        this.tokenService = tokenService;
    }
    async register(input) {
        const user = await this.authRepository.createUser(input);
        return {
            user,
            accessToken: this.tokenService.generateAccessToken(user.id),
            refreshToken: this.tokenService.generateRefreshToken(user.id),
        };
    }
    async login(input) {
        const user = await this.authRepository.findByEmail(input.email);
        if (!user) {
            const error = new Error("Invalid credentials");
            error.status = 401;
            throw error;
        }
        const isPasswordValid = await bcrypt.compare(input.password, user.password);
        if (!isPasswordValid) {
            const error = new Error("Invalid credentials");
            error.status = 401;
            throw error;
        }
        const { password: _password, ...safeUser } = user;
        return {
            user: safeUser,
            accessToken: this.tokenService.generateAccessToken(user.id),
            refreshToken: this.tokenService.generateRefreshToken(user.id),
        };
    }
}
//# sourceMappingURL=auth.service.js.map