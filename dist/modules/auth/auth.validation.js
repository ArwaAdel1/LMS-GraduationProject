import { z } from "zod";
import { createUserSchema } from "../users/user.validation.js";
export const registerSchema = createUserSchema.omit({ role: true });
export const loginSchema = z.object({
    email: z.string().trim().email(),
    password: z.string().min(8),
});
//# sourceMappingURL=auth.validation.js.map