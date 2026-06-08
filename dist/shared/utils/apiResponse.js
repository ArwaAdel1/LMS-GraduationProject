export function okResponse(message, data) {
    return {
        success: true,
        message,
        data,
    };
}
export function errorResponse(message, status = 400) {
    return {
        success: false,
        message,
        status,
    };
}
//# sourceMappingURL=apiResponse.js.map