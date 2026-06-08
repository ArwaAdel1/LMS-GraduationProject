export declare const Role: {
    readonly ADMIN: "ADMIN";
    readonly STUDENT: "STUDENT";
    readonly OPERATION: "OPERATION";
};
export type Role = (typeof Role)[keyof typeof Role];
export declare const Status: {
    readonly ACTIVE: "ACTIVE";
    readonly INACTIVE: "INACTIVE";
    readonly BANNED: "BANNED";
};
export type Status = (typeof Status)[keyof typeof Status];
export declare const OtpType: {
    readonly EMAIL_VERIFICATION: "EMAIL_VERIFICATION";
    readonly PASSWORD_RESET: "PASSWORD_RESET";
};
export type OtpType = (typeof OtpType)[keyof typeof OtpType];
//# sourceMappingURL=enums.d.ts.map