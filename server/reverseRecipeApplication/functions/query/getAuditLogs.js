exports = async function() {
    const request = context.services.get("mongodb-atlas").db('reverseRecipeDB').collection('reverseRecipeAudit');

    const caller = context.user;
    const {role} = caller.custom_data;

    if (role !== 'ADMIN') {
        return {'error': 'You do not have ADMIN permissions.'};
    }

    return await audits.find({}).toArray();
};

// Export as module to make function testable.
if (typeof module === 'object') {
    module.exports = exports;
}