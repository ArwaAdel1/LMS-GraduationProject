import type { Request, Response, NextFunction } from "express";
import type { ApiError } from "../types/common.types.js";

export function authorizeMiddleware(roles: string[]) {
  return (req: Request, _res: Response, next: NextFunction) => {
    const userRole = req.user?.role;

    if (!userRole || !roles.includes(userRole)) {
      const error = new Error("You don't have permission to access this resource") as ApiError;
      error.status = 403;
      return next(error);
    }

    next();
  };
}
