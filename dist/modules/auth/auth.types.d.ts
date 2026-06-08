import type { CreateUserInput } from "../users/user.validation.js";
export interface LoginInput {
    email: string;
    password: string;
}
export type RegisterInput = Omit<CreateUserInput, "role">;
//# sourceMappingURL=auth.types.d.ts.map