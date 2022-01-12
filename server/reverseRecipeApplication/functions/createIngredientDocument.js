exports = async function({ingredient}) {
    const request = context.services.get('mongodb-atlas').db('reverseRecipeDB').collection('reverseRecipeIngredient');

    const caller = context.user;
    const {role} = caller.custom_data;

    if (role !== 'ADMIN') {
        return {'error': 'You must have ADMIN permissions to create an ingredient.'};
    }

    const inserted = await request.insertOne({
        'name': ingredient.name,
        'recipes': ingredient.recipes || []
    });

    const audit = await context.functions.createAuditDocument({
        'additionalInfo': null,
        'createdAt': Date.now(),
        'createdBy': caller.id || 'SYSTEM',
        'errors': inserted.error || null,
        'object': inserted || null,
        'objectType': 'INGREDIENT',
        'referenceID': inserted._id || null,
        'updatedAt': Date.now()
    });

    return {'ingredient': inserted, 'audit': audit};
};

// Export as module to make function testable.
if (typeof module === 'object') {
    module.exports = exports;
}