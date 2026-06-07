export declare function okResponse<T>(message: string, data?: T): {
    success: boolean;
    message: string;
    data: T | undefined;
};
export declare function errorResponse(message: string, status?: number): {
    success: boolean;
    message: string;
    status: number;
};
//# sourceMappingURL=apiResponse.d.ts.map