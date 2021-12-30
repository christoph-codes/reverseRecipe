/**
 * Creates a new user document.
 * If no savedRecipes field is passed then an empty array is set.
 * If no role field is passed then null is set.
 * 
 * @param user - user object that must contain first and last fields
 * @returns user object that was inserted or error message
 */
exports = async function({user}) {
    const cluster = context.services.get('mongodb-atlas');
    const users = cluster.db('reverseRecipeDB').collection('reverseRecipeUser');

    const caller = context.user;
    const {role} = caller.custom_data;

    if (!role || role === 'USER') {
        return {'error': 'You do not have permission to create a user document.'};
    }

    return users.insertOne({
        'first': user.first,
        'last': user.last,
        'savedRecipes': user.savedRecipes || [],
        'role': user.role || null
    });
};

if (typeof module === 'object') {
    module.exports = exports;
}