import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { env } from "../../config/env.js";
import type { ApiError } from "../types/common.types.js";

interface JwtPayload {
  sub: string;
  role?: string;
}

export function authenticateMiddleware(
  req: Request,
  _res: Response,
  next: NextFunction,
) {
  // 1. استخرج الـ token من الـ Authorization header
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    const error = new Error("Authentication required") as ApiError;
    error.status = 401;
    return next(error);
  }

  const token = authHeader.split(" ")[1];

  // 2. Verify the JWT
  try {
    const decoded = jwt.verify(token, env.JWT_SECRET) as JwtPayload;

    // 3. ضع بيانات اليوزر في req.user عشان الـ routes التانية تستخدمها
    req.user = {
      id: decoded.sub,
      role: decoded.role,
    };

    next();
  } catch (err) {
    // expired أو invalid token
    const error = new Error("Invalid or expired token") as ApiError;
    error.status = 401;
    next(error);
  }
}
