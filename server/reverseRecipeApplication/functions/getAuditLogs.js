exports = async function() {
    const cluster = context.services.get("mongodb-atlas");
    const audits = cluster.db('reverseRecipeDB').collection('reverseRecipeAudit');

    const caller = context.user;
    const {role} = caller.custom_data;

    if (role !== 'ADMIN') {
        return {'error': 'You do not have ADMIN permissions.'};
    }

    return await audits.find({});
};

// Export as module to make function testable.
if (typeof module === 'object') {
    module.exports = exports;
}