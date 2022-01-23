exports = async function({recipe}) {
    const request = context.services.get('mongodb-atlas').db('reverseRecipeDB').collection('reverseRecipeRecipe');

    const caller = context.user;
    const {role} = caller.custom_data;

    if (role !== 'ADMIN') {
        return {'error': 'You must have ADMIN permissions to create a recipe.'};
    }

    const inserted = await request.insertOne({
        'category': recipe.category,
        'cookTime': recipe.cookTime || null,
        'imgSrc': recipe.imgSrc || null,
        'ingredients': recipe.ingredients,
        'instructions': recipe.instructions || null,
        'measurements': recipe.measurements || null,
        'name': recipe.name,
        'recipeDescription': recipe.recipeDescription
    });

    const audit = await context.functions.createAuditDocument({
        'additionalInfo': null,
        'createdAt': Date.now(),
        'createdBy': context.user.id || 'SYSTEM',
        'errors': inserted.error || null,
        'object': inserted || null,
        'objectType': 'RECIPE',
        'referenceID': inserted._id || null,
        'updatedAt': Date.now()
    });

    return {'recipe': inserted, 'audit': audit};
};

// Export as module to make function testable.
if (typeof module === 'object') {
    module.exports = exports;
}