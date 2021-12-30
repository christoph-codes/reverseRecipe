/**
 * Creates an ingredient document.
 * If no recipes field is passed then empty array is set.
 * 
 * @param ingredient - ingredient object that must contain the name field
 * @returns ingredient object that was inserted
 */
exports = async function({ingredient}) {
    const cluster = context.services.get('mongodb-atlas');
    const ingredients = cluster.db('reverseRecipeDB').collection('reverseRecipeIngredient');

    const caller = context.user;
    const {role} = caller.custom_data;

    if (role !== 'ADMIN') {
        return {'error': 'You must have ADMIN permissions to create an ingredient.'};
    }

    return ingredients.insertOne({
        'name': ingredient.name,
        'recipes': ingredient.recipes || []
    });
};

if (typeof module === 'object') {
    module.exports = exports;
}