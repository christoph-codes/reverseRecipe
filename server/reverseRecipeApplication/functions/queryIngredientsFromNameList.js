exports = async function(nameList) {
  const request = context.services.get('mongodb-atlas').db('reverseRecipeDB').collection('reverseRecipeIngredient');
  
  return await request.find({
    name: {
      $in: nameList
    }
  }).toArray();
};

// Export as module to make function testable.
if (typeof module === 'object') {
    module.exports = exports;
}