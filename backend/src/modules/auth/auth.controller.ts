import type { Request, Response, NextFunction } from "express";
<<<<<<< HEAD
import { registerSchema, loginSchema } from "./auth.validation.js";
=======
import { ZodError } from "zod";
import { registerSchema } from "./auth.validation.js";
>>>>>>> 7316bdfad4af2202da96652d2cfaad5b1e6d8e3a
import { AuthService } from "./auth.service.js";

const authService = new AuthService();

export class AuthController {
<<<<<<< HEAD
  // ─── Register ──────────────────────────────────────────────────────────────

=======
>>>>>>> 7316bdfad4af2202da96652d2cfaad5b1e6d8e3a
  public register = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
<<<<<<< HEAD
=======
      // Validate request body with Zod schema
>>>>>>> 7316bdfad4af2202da96652d2cfaad5b1e6d8e3a
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
<<<<<<< HEAD
        success: true,
=======
>>>>>>> 7316bdfad4af2202da96652d2cfaad5b1e6d8e3a
        message: "Registration successful",
        data: {
          user: result.user,
          accessToken: result.accessToken,
        },
      });
    } catch (error) {
<<<<<<< HEAD
      next(error);
    }
  };

  // ─── Login ─────────────────────────────────────────────────────────────────

  public login = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const parsed = loginSchema.safeParse(req.body);

      if (!parsed.success) {
        res.status(400).json({
          success: false,
          message: "Validation error",
          errors: parsed.error.flatten().fieldErrors,
        });
        return;
      }

      const result = await authService.loginUser(parsed.data);

      // ✅ Refresh token في httpOnly cookie — الـ JS في الفرونت إند مش هيوصلها
      res.cookie("refreshToken", result.refreshToken, {
        httpOnly: true,   // محمي من XSS
        secure: process.env.NODE_ENV === "production", // HTTPS فقط في production
        sameSite: "strict", // حماية من CSRF
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 أيام
        path: "/api/v1/auth", // مش متاح لكل الـ routes
      });

      res.status(200).json({
        success: true,
        message: "Login successful",
        data: {
          user: result.user,
          accessToken: result.accessToken,
          // ❌ refreshToken مش بنرجعه في الـ body — بس في الـ cookie
        },
      });
    } catch (error) {
=======
      // Pass service errors (409, 500, etc.) to the global error handler
>>>>>>> 7316bdfad4af2202da96652d2cfaad5b1e6d8e3a
      next(error);
    }
  };
}
