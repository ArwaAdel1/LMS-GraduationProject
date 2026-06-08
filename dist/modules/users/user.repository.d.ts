export declare class UserRepository {
    findAll(): Promise<{
        id: string;
        fullName: string;
        email: string;
        mobile: string;
        role: import("../../generated/prisma/enums.js").Role;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
}
//# sourceMappingURL=user.repository.d.ts.map