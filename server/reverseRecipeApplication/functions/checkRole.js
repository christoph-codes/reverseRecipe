exports = async function() {
    const request = context.services.get('mongodb-atlas').db('reverseRecipeDB').collection('reverseRecipeUser');

    try {
        const currUser = await request.findOne({ _id: context.user.id });
        
        // return value should be ADMIN, USER, or DEFAULT if neither.
        return currUser.custom_data.role ?? 'DEFAULT';
    } catch (error) {
        return 'DEFAULT';
    }
};

// Export as module to make function testable.
if (typeof module === 'object') {
    module.exports = exports;
}