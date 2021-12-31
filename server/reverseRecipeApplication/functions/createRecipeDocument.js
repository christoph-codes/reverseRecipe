/**
 * Creates a new recipe document.
 * Must have ADMIN permissions.
 * 
 * @param recipe - Recipe object to be inserted.
 * @returns The inserted Recipe and its audit.
 * @returns If there is an error the returned object(s) will only have an error field.
 */
exports = async function({recipe}) {
    const cluster = context.services.get('mongodb-atlas');
    const recipes = cluster.db('reverseRecipeDB').collection('reverseRecipeRecipe');

    const caller = context.user;
    const {role} = caller.custom_data;

    if (role !== 'ADMIN') {
        return {'error': 'You must have ADMIN permissions to create a recipe.'};
    }

    const inserted = await recipes.insertOne({
        'category': recipe.category,
        'cookTime': recipe.cookTime || null,
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

if (typeof module === 'object') {
    module.exports = exports;
}