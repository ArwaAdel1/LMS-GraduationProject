export function authorizeMiddleware(roles) {
    return (_req, _res, next) => {
        void roles;
        next();
    };
}
//# sourceMappingURL=authorize.middleware.js.map