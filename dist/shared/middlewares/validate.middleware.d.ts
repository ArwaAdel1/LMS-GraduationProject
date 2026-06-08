import type { Request, Response, NextFunction } from "express";
import type { ZodType } from "zod";
type RequestSource = "body" | "query" | "params";
export declare function validateRequest<T>(schema: ZodType<T>, source?: RequestSource): (req: Request, _res: Response, next: NextFunction) => void;
export {};
//# sourceMappingURL=validate.middleware.d.ts.map