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
	id?: InputMaybe<Scalars['String']>;
	name: Scalars['String'];
};

export type IRecipe = {
	category?: InputMaybe<Scalars['String']>;
	cookTime?: InputMaybe<Scalars['Int']>;
	id?: InputMaybe<Scalars['String']>;
	imgSrc?: InputMaybe<Scalars['String']>;
	ingredients?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
	instructions?: InputMaybe<Scalars['String']>;
	measurements?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
	name: Scalars['String'];
};

export type IUser = {
	email: Scalars['String'];
	first: Scalars['String'];
	id?: InputMaybe<Scalars['String']>;
	last: Scalars['String'];
};

export type Ingredient = {
	__typename?: 'Ingredient';
	created: Scalars['String'];
	id: Scalars['String'];
	name: Scalars['String'];
	updated: Scalars['String'];
};

export type Mutation = {
	__typename?: 'Mutation';
	addIngredient: ResponseObject;
	addRecipe: ResponseObject;
	addUser: ResponseObject;
	deleteIngredient: ResponseObject;
	deleteRecipe: ResponseObject;
	deleteUser: ResponseObject;
};

export type MutationAddIngredientArgs = {
	data: IIngredient;
};

export type MutationAddRecipeArgs = {
	data: IRecipe;
};

export type MutationAddUserArgs = {
	data: IUser;
};

export type MutationDeleteIngredientArgs = {
	id: Scalars['String'];
};

export type MutationDeleteRecipeArgs = {
	id: Scalars['String'];
};

export type MutationDeleteUserArgs = {
	id: Scalars['String'];
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
	created: Scalars['String'];
	id: Scalars['String'];
	imgSrc?: Maybe<Scalars['String']>;
	ingredients?: Maybe<Array<Maybe<Scalars['String']>>>;
	instructions?: Maybe<Scalars['String']>;
	measurements?: Maybe<Array<Maybe<Scalars['String']>>>;
	name: Scalars['String'];
	updated: Scalars['String'];
};

export type ResponseObject = {
	__typename?: 'ResponseObject';
	count: Scalars['Int'];
	data: Array<Maybe<UData>>;
	error?: Maybe<Scalars['String']>;
};

export type TId = {
	__typename?: 'TId';
	id: Scalars['String'];
};

export type UData = Ingredient | Recipe | TId | User;

export type User = {
	__typename?: 'User';
	created: Scalars['String'];
	email: Scalars['String'];
	first: Scalars['String'];
	id: Scalars['String'];
	last: Scalars['String'];
	updated: Scalars['String'];
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
