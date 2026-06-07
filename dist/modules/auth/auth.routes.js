import { Router } from "express";
import { AuthController } from "./auth.controller.js";
import { asyncHandler } from "../../shared/utils/asyncHandler.js";
import { validateRequest } from "../../shared/middlewares/validate.middleware.js";
import { loginSchema, registerSchema } from "./auth.validation.js";
const router = Router();
const controller = new AuthController();
router.post("/register", validateRequest(registerSchema), asyncHandler(controller.register));
router.post("/login", validateRequest(loginSchema), asyncHandler(controller.login));
export default router;
//# sourceMappingURL=auth.routes.js.map