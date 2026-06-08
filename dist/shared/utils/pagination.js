export function paginate(items, page = 1, limit = 10) {
    const offset = (page - 1) * limit;
    const pagedItems = items.slice(offset, offset + limit);
    return {
        page,
        limit,
        total: items.length,
        data: pagedItems,
    };
}
//# sourceMappingURL=pagination.js.map