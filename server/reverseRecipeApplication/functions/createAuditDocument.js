/**
 * Creates an audit document.
 * If no additionalInfo field is passed then null is set.
 * If no createdAt field is passed then Date.now() is set.
 * If no createdBy field is passed then null is set.
 * If no updatedAt field is passed then Date.now() is set.
 * 
 * @param audit - audit object that must contain object, objectType, and referenceID fields
 * @returns audit document that was inserted or error
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
        'createdAt': Date.now(),
        'createdBy': audit.createdBy || null,
        'errors': audit.errors || null,
        'object': audit.object,
        'objectType': audit.objectType,
        'referenceID': audit.referenceID,
        'updatedAt': Date.now()
    });
};

if (typeof module === 'object') {
    module.exports = exports;
}