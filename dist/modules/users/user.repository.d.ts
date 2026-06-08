export declare class UserRepository {
    findAll(): Promise<{
        fullName: string;
        mobile: string;
        email: string | null;
        role: import("../../generated/prisma/enums.js").Role;
        id: string;
        status: import("../../generated/prisma/enums.js").Status;
        tenantId: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
}
//# sourceMappingURL=user.repository.d.ts.map