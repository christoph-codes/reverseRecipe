exports = async function({user}) {
    const request = context.services.get('mongodb-atlas').db('reverseRecipeDB').collection('reverseRecipeUser');

    const caller = context.user;
    const {role} = caller.custom_data;

    if (!caller || role !== 'ADMIN') {
        return {'error': 'You do not have the correct permissions.'};
    }

    const inserted = await request.insertOne({
        'first': user.first,
        'last': user.last,
        'savedRecipes': user.savedRecipes || [],
        'role': user.role || null
    });

    const audit = await context.functions.createAuditDocument({
        'additionalInfo': null,
        'createdAt': Date.now(),
        'createdBy': caller.id || 'SYSTEM',
        'errors': inserted.error || null,
        'object': inserted || null,
        'objectType': 'USER',
        'referenceID': inserted._id || null,
        'updatedAt': Date.now()
    });

    return {'user': inserted, 'audit': audit};
};

// Export as module to make function testable.
if (typeof module === 'object') {
    module.exports = exports;
}