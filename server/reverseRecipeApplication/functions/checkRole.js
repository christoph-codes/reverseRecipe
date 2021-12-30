/**
 * Checks the permissions of the logged in user.
 * @returns - ADMIN: if admin permissions, USER: if user permissions, GUEST: if no permissions or not logged in
 */
exports = async function() {
    const cluster = context.services.get('mongodb-atlas');
    const reverseRecipeUser = cluster.db('reverseRecipeDB').collection('reverseRecipeUser');

    try {
        // might need to adjust this
        // an auth provider user document references the reverseRecipeUser document by id and embeds it
        // I don't know if user.id is referencing the auth provider user or if it references the custom data
        const user = await userCollection.findOne({ _id: context.user.id });

        // return the users role to determine their permissions
        return user.role;
    } catch (error) {
        console.error('error retrieving userId from context or something else.', error);
        console.log('Granting GUEST access only.');
        return 'GUEST';
    }
};

if (typeof module === 'object') {
    module.exports = exports;
}