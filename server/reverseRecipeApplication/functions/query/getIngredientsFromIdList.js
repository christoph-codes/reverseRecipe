exports = async function(idList) {
  const request = context.services.get('mongodb-atlas').db('reverseRecipeDB').collection('reverseRecipeIngredient');
  
  return await request.find({
    _id: {
      $in: idList
    }
  }).toArray();
};

// Export as module to make function testable.
if (typeof module === 'object') {
    module.exports = exports;
}