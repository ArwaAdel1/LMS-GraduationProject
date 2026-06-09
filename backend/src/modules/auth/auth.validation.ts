import { z } from "zod";

const passwordSchema = z
  .string()
  .min(8, "Password must be at least 8 characters")
  .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
  .regex(/[a-z]/, "Password must contain at least one lowercase letter")
  .regex(/[0-9]/, "Password must contain at least one number")
  .regex(
    /[^A-Za-z0-9]/,
    "Password must contain at least one special character",
  );

export const registerSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name must not exceed 100 characters"),
  mobile: z
    .string()
    .trim()
    .regex(
      /^(\+20|0)(10|11|12|15)[0-9]{8}$/,
      "Invalid Egyptian phone number",
    ),
  email: z.string().trim().email("Invalid email address").toLowerCase().optional(),
  password: passwordSchema,
  role: z.enum(["STUDENT", "OPERATION"]).default("STUDENT"),
});

<<<<<<< HEAD
// Login: يقبل email أو mobile (واحد منهم على الأقل)
export const loginSchema = z
  .object({
    email: z
      .string()
      .trim()
      .email("Invalid email address")
      .toLowerCase()
      .optional(),
    mobile: z
      .string()
      .trim()
      .regex(
        /^(\+20|0)(10|11|12|15)[0-9]{8}$/,
        "Invalid Egyptian phone number",
      )
      .optional(),
    password: z.string().min(1, "Password is required"),
  })
  .refine((data) => data.email || data.mobile, {
    message: "Either email or mobile is required",
    path: ["email"],
  });
=======
export const loginSchema = z.object({
  email: z.string().trim().email(),
  password: z.string().min(8),
});
>>>>>>> 7316bdfad4af2202da96652d2cfaad5b1e6d8e3a

export type RegisterInput = z.infer<typeof registerSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
