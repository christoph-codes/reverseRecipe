/**
 * Creates a new user document.
 * This document represents the custom_data attached to a user from the 
 * perspective of the authorization provider.
 * Must have ADMIN permissions.
 * 
 * @param user - User object to be inserted.
 * @returns The inserted user and its audit.
 * @returns If there is an error the returned object(s) will only have an error field.
 */
exports = async function({user}) {
    const cluster = context.services.get('mongodb-atlas');
    const users = cluster.db('reverseRecipeDB').collection('reverseRecipeUser');

    const caller = context.user;
    const {role} = caller.custom_data;

    if (!caller || role !== 'ADMIN') {
        return {'error': 'You do not have the correct permissions.'};
    }

    const inserted = await users.insertOne({
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

if (typeof module === 'object') {
    module.exports = exports;
}