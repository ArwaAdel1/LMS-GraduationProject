import type { Role } from "../../generated/prisma/client.js";
export interface UserRecord {
    id: string;
    fullName: string;
    email: string;
    mobile: string;
    role: Role;
    createdAt: Date;
    updatedAt: Date;
}
export type SafeUserRecord = Omit<UserRecord, "password">;
export declare const userPublicFields: {
    readonly id: true;
    readonly fullName: true;
    readonly email: true;
    readonly mobile: true;
    readonly role: true;
    readonly createdAt: true;
    readonly updatedAt: true;
};
//# sourceMappingURL=user.types.d.ts.map