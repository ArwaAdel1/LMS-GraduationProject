import { z } from "zod";
export declare const userRoleSchema: z.ZodEnum<{
    STUDENT: "STUDENT";
    OPERATION: "OPERATION";
    ADMIN: "ADMIN";
}>;
export declare const createUserSchema: z.ZodObject<{
    fullName: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
    mobile: z.ZodString;
    role: z.ZodDefault<z.ZodEnum<{
        STUDENT: "STUDENT";
        OPERATION: "OPERATION";
        ADMIN: "ADMIN";
    }>>;
}, z.core.$strip>;
export declare const updateUserSchema: z.ZodObject<{
    fullName: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodString>;
    password: z.ZodOptional<z.ZodString>;
    mobile: z.ZodOptional<z.ZodString>;
    role: z.ZodOptional<z.ZodEnum<{
        STUDENT: "STUDENT";
        OPERATION: "OPERATION";
        ADMIN: "ADMIN";
    }>>;
}, z.core.$strip>;
export type CreateUserInput = z.infer<typeof createUserSchema>;
export type UpdateUserInput = z.infer<typeof updateUserSchema>;
//# sourceMappingURL=user.validation.d.ts.map