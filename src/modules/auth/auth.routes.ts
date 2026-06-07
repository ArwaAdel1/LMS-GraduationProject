import { Router } from "express";
import rateLimit from "express-rate-limit";
import { AuthController } from "./auth.controller.js";

const router = Router();
const controller = new AuthController();

// Rate limiter خاص بالـ login — أقل من الـ global عشان يحمي من Brute Force
const loginRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 دقيقة
  max: 10,                   // 10 محاولات بس كل 15 دقيقة
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many login attempts. Please try again after 15 minutes.",
  },
  skipSuccessfulRequests: true, // المحاولات الناجحة مش بتتحسب في الـ limit
});

// POST /api/v1/auth/register
router.post("/register", controller.register);

// POST /api/v1/auth/login
router.post("/login", loginRateLimiter, controller.login);

export default router;
