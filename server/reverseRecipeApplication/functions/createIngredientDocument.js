/**
 * Creates an ingredient document.
 * Must have ADMIN permissions.
 * 
 * @param ingredient - Ingredient object to be inserted.
 * @returns The inserted ingredient and its audit.
 * @returns If there is an error the returned object(s) will only have an error field.
 */
exports = async function({ingredient}) {
    const cluster = context.services.get('mongodb-atlas');
    const ingredients = cluster.db('reverseRecipeDB').collection('reverseRecipeIngredient');

    const caller = context.user;
    const {role} = caller.custom_data;

    if (role !== 'ADMIN') {
        return {'error': 'You must have ADMIN permissions to create an ingredient.'};
    }

    const inserted = await ingredients.insertOne({
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

if (typeof module === 'object') {
    module.exports = exports;
}