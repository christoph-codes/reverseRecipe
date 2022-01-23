exports = async function(ingredientList) {
  const request = context.services.get('mongodb-atlas').db('reverseRecipeDB').collection('reverseRecipeRecipe');
  
  const pipeline = [
    {
      $filter: {
        input: $ingredients,
        as: ingredient,
        cond: {
          "$$ingredient": {
            $in: { ingredientList }
          }
        }
      }
    }
  ];
  
  return await request.aggregate(pipeline).toArray();
};

// Export as module to make function testable.
if (typeof module === 'object') {
    module.exports = exports;
}