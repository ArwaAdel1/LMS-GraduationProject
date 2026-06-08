import { AuthService } from "./auth.service.js";
import { okResponse } from "../../shared/utils/apiResponse.js";
const authService = new AuthService();
export class AuthController {
    register = async (req, res, next) => {
        try {
            const result = await authService.register(req.body);
            res.status(201).json(okResponse("User registered successfully", result));
        }
        catch (error) {
            next(error);
        }
    };
    login = async (req, res, next) => {
        try {
            const result = await authService.login(req.body);
            res.status(200).json(okResponse("Login successful", result));
        }
        catch (error) {
            next(error);
        }
    };
}
//# sourceMappingURL=auth.controller.js.map