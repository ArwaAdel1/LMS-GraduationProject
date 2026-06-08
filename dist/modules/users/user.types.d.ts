import type { Role, Status } from "../../generated/prisma/client.js";
export interface UserRecord {
    id: string;
    fullName: string;
    email: string | null;
    mobile: string;
    role: Role;
    status: Status;
    tenantId: string;
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
    readonly status: true;
    readonly tenantId: true;
    readonly createdAt: true;
    readonly updatedAt: true;
};
//# sourceMappingURL=user.types.d.ts.map