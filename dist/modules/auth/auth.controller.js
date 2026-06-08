import { forgotPasswordSchema, registerSchema, resetPasswordSchema } from "./auth.validation.js";
import { AuthService } from "./auth.service.js";
const authService = new AuthService();
export class AuthController {
    constructor() {
        this.register = async (req, res, next) => {
            try {
                // Validate request body with Zod schema
                const parsed = registerSchema.safeParse(req.body);
                if (!parsed.success) {
                    res.status(400).json({
                        success: false,
                        message: "Validation error",
                        errors: parsed.error.flatten().fieldErrors,
                    });
                    return;
                }
                const result = await authService.registerUser(parsed.data);
                res.status(201).json({
                    message: "Registration successful",
                    data: {
                        user: result.user,
                        accessToken: result.accessToken,
                    },
                });
            }
            catch (error) {
                // Pass service errors (409, 500, etc.) to the global error handler
                next(error);
            }
        };
        this.forgotPassword = async (req, res, next) => {
            try {
                const parsed = forgotPasswordSchema.safeParse(req.body);
                if (!parsed.success) {
                    res.status(400).json({
                        success: false,
                        message: "Validation error",
                        errors: parsed.error.flatten().fieldErrors,
                    });
                    return;
                }
                const response = await authService.forgotPassword(parsed.data);
                res.status(200).json(response);
            }
            catch (error) {
                next(error);
            }
        };
        this.resetPassword = async (req, res, next) => {
            try {
                const parsed = resetPasswordSchema.safeParse(req.body);
                if (!parsed.success) {
                    res.status(400).json({
                        success: false,
                        message: "Validation error",
                        errors: parsed.error.flatten().fieldErrors,
                    });
                    return;
                }
                const response = await authService.resetPassword(parsed.data);
                res.status(200).json(response);
            }
            catch (error) {
                next(error);
            }
        };
    }
}
//# sourceMappingURL=auth.controller.js.map