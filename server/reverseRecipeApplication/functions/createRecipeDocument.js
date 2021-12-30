/**
 * Creates a new recipe document.
 * If no cookTime field is passed then null is set.
 * If no instructions field is passed then null is set.
 * If no measurements field is passed then null is set.
 * 
 * @param recipe - recipe object that must include category, ingredients, name, and recipeDescription
 * @returns recipe document that was inserted or error message
 */
exports = async function({recipe}) {
    const cluster = context.services.get('mongodb-atlas');
    const recipes = cluster.db('reverseRecipeDB').collection('reverseRecipeRecipe');

    const caller = context.user;
    const {role} = caller.custom_data;

    if (role !== 'ADMIN') {
        return {'error': 'You must have ADMIN permissions to create a recipe.'};
    }

    return recipes.insertOne({
        'category': recipe.category,
        'cookTime': recipe.cookTime || null,
        'ingredients': recipe.ingredients,
        'instructions': recipe.instructions || null,
        'measurements': recipe.measurements || null,
        'name': recipe.name,
        'recipeDescription': recipe.recipeDescription
    });
};

if (typeof module === 'object') {
    module.exports = exports;
}