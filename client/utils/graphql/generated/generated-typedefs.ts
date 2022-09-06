/* eslint-disable */
export const typeDefs = /* GraphQL */ `
	schema {
		query: Query
		mutation: Mutation
	}
	input IIngredient {
		id: String
		name: String!
	}
	input IRecipe {
		category: String
		cookTime: Int
		id: String
		imgSrc: String
		ingredients: [String]
		instructions: String
		measurements: [String]
		name: String!
	}
	input IUser {
		email: String!
		first: String!
		id: String
		last: String!
	}
	type Ingredient {
		created: String!
		id: String!
		name: String!
		updated: String!
	}
	type Mutation {
		addIngredient(data: IIngredient!): ResponseObject!
		addRecipe(data: IRecipe!): ResponseObject!
		addUser(data: IUser!): ResponseObject!
		deleteIngredient(id: String!): ResponseObject!
		deleteRecipe(id: String!): ResponseObject!
		deleteUser(id: String!): ResponseObject!
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
		created: String!
		id: String!
		imgSrc: String
		ingredients: [String]
		instructions: String
		measurements: [String]
		name: String!
		updated: String!
	}
	type ResponseObject {
		count: Int!
		data: [UData]!
		error: String
	}
	type TId {
		id: String!
	}
	union UData = Ingredient | Recipe | TId | User
	type User {
		created: String!
		email: String!
		first: String!
		id: String!
		last: String!
		updated: String!
	}
`;
