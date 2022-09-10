/* eslint-disable */
export const typeDefs = /* GraphQL */ `
	schema {
		query: Query
		mutation: Mutation
	}
	input IIngredient {
		id: String!
		name: String
	}
	input IRecipe {
		category: String
		cookTime: Int
		id: String!
		imgSrc: String
		ingredients: [String]
		instructions: String
		measurements: [String]
		name: String
	}
	input IUser {
		email: String
		first: String
		id: String!
		last: String
	}
	type Ingredient {
		id: String!
		name: String!
	}
	type IngredientResponse {
		count: Int!
		data: [Ingredient]!
		error: String
	}
	type Mutation {
		addIngredient(opts: IIngredient): IngredientResponse
		addRecipe(opts: IRecipe): RecipeResponse
		addUser(opts: IUser): UserResponse
		deleteIngredient(opts: IIngredient): IngredientResponse
		deleteRecipe(opts: IRecipe): RecipeResponse
		deleteUser(opts: IUser): UserResponse
	}
	type Query {
		ingredient(id: String!): Ingredient
		listIngredients(ids: [String!]!): [Ingredient]!
		listRecipes(ids: [String!]!): [Recipe]!
		listUsers(ids: [String!]!): [User]!
		recipe(id: String!): Recipe
		user(id: String!): User
	}
	type Recipe {
		category: String
		cookTime: Int
		id: String!
		imgSrc: String
		ingredients: [String]
		instructions: String
		measurements: [String]
		name: String!
	}
	type RecipeResponse {
		count: Int!
		data: [Recipe]!
		error: String
	}
	type User {
		email: String!
		first: String!
		id: String!
		last: String!
	}
	type UserResponse {
		count: Int!
		data: [User]!
		error: String
	}
`;
