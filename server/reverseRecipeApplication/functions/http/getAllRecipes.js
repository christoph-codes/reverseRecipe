exports = async function(payload, response) {
  const request = context.services.get('mongodb-atlas').db('reverseRecipeDB').collection('reverseRecipeRecipe');
  const data = await request.find({}).toArray();
  response.setStatusCode(200);
  response.setBody(JSON.stringify(data));
}
