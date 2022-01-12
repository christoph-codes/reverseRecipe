exports = async function({audit}) {
    const request = context.services.get('mongodb-atlas').db('reverseRecipeDB').collection('reverseRecipeAudit');

    const caller = context.user;
    const {role} = caller.custom_data;

    if (role !== 'ADMIN') {
        return {'error': 'You must have ADMIN permissions to create an audit.'};
    }

    return request.insertOne({
        'additionalInfo': audit.additionalInfo || null,
        'createdAt': audit.createdAt || Date.now(),
        'createdBy': audit.createdBy || null,
        'errors': audit.errors || null,
        'object': audit.object || null,
        'objectType': audit.objectType || null,
        'referenceID': audit.referenceID || null,
        'updatedAt': audit.updatedAt || Date.now()
    });
};

// Export as module to make function testable.
if (typeof module === 'object') {
    module.exports = exports;
}