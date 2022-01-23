exports = async function(payload, response) {
  const args = payload.query.ingredients.split(',');
  
  if (args.length > 0) {
    const request = context.services.get('mongodb-atlas').db('reverseRecipeDB').collection('reverseRecipeRecipe');
    const data = await request.find({
      ingredients: { $in : args }
    }).toArray();
    response.setStatusCode(200);
    response.setBody(JSON.stringify(data));
  } else {
    response.setBody({"error": "No ingredients passed."});
  }
}
