/**
 * Creates an audit document.
 * Must have ADMIN permissions.
 * 
 * @param audit - Audit object to be inserted.
 * @returns Audit document that was inserted or permissions error.
 */
exports = async function({audit}) {
    const cluster = context.services.get('mongodb-atlas');
    const audits = cluster.db('reverseRecipeDB').collection('reverseRecipeAudit');

    const caller = context.user;
    const {role} = caller.custom_data;

    if (role !== 'ADMIN') {
        return {'error': 'You must have ADMIN permissions to create an audit.'};
    }

    return audits.insertOne({
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

if (typeof module === 'object') {
    module.exports = exports;
}