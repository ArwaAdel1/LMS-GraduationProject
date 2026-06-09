import type { Request, Response, NextFunction } from "express";
<<<<<<< HEAD
import type { ApiError } from "../types/common.types.js";

export function authorizeMiddleware(roles: string[]) {
  return (req: Request, _res: Response, next: NextFunction) => {
    const userRole = req.user?.role;

    if (!userRole || !roles.includes(userRole)) {
      const error = new Error("You don't have permission to access this resource") as ApiError;
      error.status = 403;
      return next(error);
    }

=======

export function authorizeMiddleware(roles: string[]) {
  return (_req: Request, _res: Response, next: NextFunction) => {
    void roles;
>>>>>>> 7316bdfad4af2202da96652d2cfaad5b1e6d8e3a
    next();
  };
}
