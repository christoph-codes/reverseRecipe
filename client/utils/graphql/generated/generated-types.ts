import { useQuery, UseQueryOptions } from '@tanstack/react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
	[K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]: Maybe<T[SubKey]>;
};

function fetcher<TData, TVariables>(
	endpoint: string,
	requestInit: RequestInit,
	query: string,
	variables?: TVariables
) {
	return async (): Promise<TData> => {
		const res = await fetch(endpoint, {
			method: 'POST',
			...requestInit,
			body: JSON.stringify({ query, variables }),
		});

		const json = await res.json();

		if (json.errors) {
			const { message } = json.errors[0];

			throw new Error(message);
		}

		return json.data;
	};
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: string;
	String: string;
	Boolean: boolean;
	Int: number;
	Float: number;
};

export type IIngredient = {
	id: Scalars['String'];
	name?: InputMaybe<Scalars['String']>;
};

export type IRecipe = {
	category?: InputMaybe<Scalars['String']>;
	cookTime?: InputMaybe<Scalars['Int']>;
	id: Scalars['String'];
	imgSrc?: InputMaybe<Scalars['String']>;
	ingredients?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
	instructions?: InputMaybe<Scalars['String']>;
	measurements?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
	name?: InputMaybe<Scalars['String']>;
};

export type IUser = {
	email?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['String']>;
	id: Scalars['String'];
	last?: InputMaybe<Scalars['String']>;
};

export type Ingredient = {
	__typename?: 'Ingredient';
	id: Scalars['String'];
	name: Scalars['String'];
};

export type IngredientResponse = {
	__typename?: 'IngredientResponse';
	count: Scalars['Int'];
	data: Array<Maybe<Ingredient>>;
	error?: Maybe<Scalars['String']>;
};

export type Mutation = {
	__typename?: 'Mutation';
	addIngredient?: Maybe<IngredientResponse>;
	addRecipe?: Maybe<RecipeResponse>;
	addUser?: Maybe<UserResponse>;
	deleteIngredient?: Maybe<IngredientResponse>;
	deleteRecipe?: Maybe<RecipeResponse>;
	deleteUser?: Maybe<UserResponse>;
};

export type MutationAddIngredientArgs = {
	opts?: InputMaybe<IIngredient>;
};

export type MutationAddRecipeArgs = {
	opts?: InputMaybe<IRecipe>;
};

export type MutationAddUserArgs = {
	opts?: InputMaybe<IUser>;
};

export type MutationDeleteIngredientArgs = {
	opts?: InputMaybe<IIngredient>;
};

export type MutationDeleteRecipeArgs = {
	opts?: InputMaybe<IRecipe>;
};

export type MutationDeleteUserArgs = {
	opts?: InputMaybe<IUser>;
};

export type Query = {
	__typename?: 'Query';
	ingredient?: Maybe<Ingredient>;
	listIngredients: Array<Maybe<Ingredient>>;
	listRecipes: Array<Maybe<Recipe>>;
	listUsers: Array<Maybe<User>>;
	recipe?: Maybe<Recipe>;
	user?: Maybe<User>;
};

export type QueryIngredientArgs = {
	id: Scalars['String'];
};

export type QueryListIngredientsArgs = {
	ids: Array<Scalars['String']>;
};

export type QueryListRecipesArgs = {
	ids: Array<Scalars['String']>;
};

export type QueryListUsersArgs = {
	ids: Array<Scalars['String']>;
};

export type QueryRecipeArgs = {
	id: Scalars['String'];
};

export type QueryUserArgs = {
	id: Scalars['String'];
};

export type Recipe = {
	__typename?: 'Recipe';
	category?: Maybe<Scalars['String']>;
	cookTime?: Maybe<Scalars['Int']>;
	id: Scalars['String'];
	imgSrc?: Maybe<Scalars['String']>;
	ingredients?: Maybe<Array<Maybe<Scalars['String']>>>;
	instructions?: Maybe<Scalars['String']>;
	measurements?: Maybe<Array<Maybe<Scalars['String']>>>;
	name: Scalars['String'];
};

export type RecipeResponse = {
	__typename?: 'RecipeResponse';
	count: Scalars['Int'];
	data: Array<Maybe<Recipe>>;
	error?: Maybe<Scalars['String']>;
};

export type User = {
	__typename?: 'User';
	email: Scalars['String'];
	first: Scalars['String'];
	id: Scalars['String'];
	last: Scalars['String'];
};

export type UserResponse = {
	__typename?: 'UserResponse';
	count: Scalars['Int'];
	data: Array<Maybe<User>>;
	error?: Maybe<Scalars['String']>;
};

export type UserQueryVariables = Exact<{
	id: Scalars['String'];
}>;

export type UserQuery = {
	__typename?: 'Query';
	user?: {
		__typename?: 'User';
		id: string;
		first: string;
		last: string;
		email: string;
	} | null;
};

export const UserDocument = `
    query User($id: String!) {
  user(id: $id) {
    id
    first
    last
    email
  }
}
    `;
export const useUserQuery = <TData = UserQuery, TError = unknown>(
	dataSource: { endpoint: string; fetchParams?: RequestInit },
	variables: UserQueryVariables,
	options?: UseQueryOptions<UserQuery, TError, TData>
) =>
	useQuery<UserQuery, TError, TData>(
		['User', variables],
		fetcher<UserQuery, UserQueryVariables>(
			dataSource.endpoint,
			dataSource.fetchParams || {},
			UserDocument,
			variables
		),
		options
	);
