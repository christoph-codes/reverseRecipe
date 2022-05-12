import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
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
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: string;
	String: string;
	Boolean: boolean;
	Int: number;
	Float: number;
	ObjectId: any;
};

export type DeleteManyPayload = {
	__typename?: 'DeleteManyPayload';
	deletedCount: Scalars['Int'];
};

export type Ingredient = {
	__typename?: 'Ingredient';
	_id: Scalars['ObjectId'];
	imgSrc?: Maybe<Scalars['String']>;
	name: Scalars['String'];
	recipes?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
};

export type IngredientInsertInput = {
	_id?: InputMaybe<Scalars['ObjectId']>;
	imgSrc?: InputMaybe<Scalars['String']>;
	name: Scalars['String'];
	recipes?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
};

export type IngredientQueryInput = {
	AND?: InputMaybe<Array<IngredientQueryInput>>;
	OR?: InputMaybe<Array<IngredientQueryInput>>;
	_id?: InputMaybe<Scalars['ObjectId']>;
	_id_exists?: InputMaybe<Scalars['Boolean']>;
	_id_gt?: InputMaybe<Scalars['ObjectId']>;
	_id_gte?: InputMaybe<Scalars['ObjectId']>;
	_id_in?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
	_id_lt?: InputMaybe<Scalars['ObjectId']>;
	_id_lte?: InputMaybe<Scalars['ObjectId']>;
	_id_ne?: InputMaybe<Scalars['ObjectId']>;
	_id_nin?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
	imgSrc?: InputMaybe<Scalars['String']>;
	imgSrc_exists?: InputMaybe<Scalars['Boolean']>;
	imgSrc_gt?: InputMaybe<Scalars['String']>;
	imgSrc_gte?: InputMaybe<Scalars['String']>;
	imgSrc_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
	imgSrc_lt?: InputMaybe<Scalars['String']>;
	imgSrc_lte?: InputMaybe<Scalars['String']>;
	imgSrc_ne?: InputMaybe<Scalars['String']>;
	imgSrc_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
	name?: InputMaybe<Scalars['String']>;
	name_exists?: InputMaybe<Scalars['Boolean']>;
	name_gt?: InputMaybe<Scalars['String']>;
	name_gte?: InputMaybe<Scalars['String']>;
	name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
	name_lt?: InputMaybe<Scalars['String']>;
	name_lte?: InputMaybe<Scalars['String']>;
	name_ne?: InputMaybe<Scalars['String']>;
	name_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
	recipes?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
	recipes_exists?: InputMaybe<Scalars['Boolean']>;
	recipes_in?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
	recipes_nin?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
};

export enum IngredientSortByInput {
	ImgsrcAsc = 'IMGSRC_ASC',
	ImgsrcDesc = 'IMGSRC_DESC',
	NameAsc = 'NAME_ASC',
	NameDesc = 'NAME_DESC',
	IdAsc = '_ID_ASC',
	IdDesc = '_ID_DESC',
}

export type IngredientUpdateInput = {
	_id?: InputMaybe<Scalars['ObjectId']>;
	_id_unset?: InputMaybe<Scalars['Boolean']>;
	imgSrc?: InputMaybe<Scalars['String']>;
	imgSrc_unset?: InputMaybe<Scalars['Boolean']>;
	name?: InputMaybe<Scalars['String']>;
	name_unset?: InputMaybe<Scalars['Boolean']>;
	recipes?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
	recipes_unset?: InputMaybe<Scalars['Boolean']>;
};

export type InsertManyPayload = {
	__typename?: 'InsertManyPayload';
	insertedIds: Array<Maybe<Scalars['ObjectId']>>;
};

export type Mutation = {
	__typename?: 'Mutation';
	deleteManyIngredients?: Maybe<DeleteManyPayload>;
	deleteManyRecipes?: Maybe<DeleteManyPayload>;
	deleteOneIngredient?: Maybe<Ingredient>;
	deleteOneRecipe?: Maybe<Recipe>;
	insertManyIngredients?: Maybe<InsertManyPayload>;
	insertManyRecipes?: Maybe<InsertManyPayload>;
	insertOneIngredient?: Maybe<Ingredient>;
	insertOneRecipe?: Maybe<Recipe>;
	replaceOneIngredient?: Maybe<Ingredient>;
	replaceOneRecipe?: Maybe<Recipe>;
	updateManyIngredients?: Maybe<UpdateManyPayload>;
	updateManyRecipes?: Maybe<UpdateManyPayload>;
	updateOneIngredient?: Maybe<Ingredient>;
	updateOneRecipe?: Maybe<Recipe>;
	upsertOneIngredient?: Maybe<Ingredient>;
	upsertOneRecipe?: Maybe<Recipe>;
};

export type MutationDeleteManyIngredientsArgs = {
	query?: InputMaybe<IngredientQueryInput>;
};

export type MutationDeleteManyRecipesArgs = {
	query?: InputMaybe<RecipeQueryInput>;
};

export type MutationDeleteOneIngredientArgs = {
	query: IngredientQueryInput;
};

export type MutationDeleteOneRecipeArgs = {
	query: RecipeQueryInput;
};

export type MutationInsertManyIngredientsArgs = {
	data: Array<IngredientInsertInput>;
};

export type MutationInsertManyRecipesArgs = {
	data: Array<RecipeInsertInput>;
};

export type MutationInsertOneIngredientArgs = {
	data: IngredientInsertInput;
};

export type MutationInsertOneRecipeArgs = {
	data: RecipeInsertInput;
};

export type MutationReplaceOneIngredientArgs = {
	data: IngredientInsertInput;
	query?: InputMaybe<IngredientQueryInput>;
};

export type MutationReplaceOneRecipeArgs = {
	data: RecipeInsertInput;
	query?: InputMaybe<RecipeQueryInput>;
};

export type MutationUpdateManyIngredientsArgs = {
	query?: InputMaybe<IngredientQueryInput>;
	set: IngredientUpdateInput;
};

export type MutationUpdateManyRecipesArgs = {
	query?: InputMaybe<RecipeQueryInput>;
	set: RecipeUpdateInput;
};

export type MutationUpdateOneIngredientArgs = {
	query?: InputMaybe<IngredientQueryInput>;
	set: IngredientUpdateInput;
};

export type MutationUpdateOneRecipeArgs = {
	query?: InputMaybe<RecipeQueryInput>;
	set: RecipeUpdateInput;
};

export type MutationUpsertOneIngredientArgs = {
	data: IngredientInsertInput;
	query?: InputMaybe<IngredientQueryInput>;
};

export type MutationUpsertOneRecipeArgs = {
	data: RecipeInsertInput;
	query?: InputMaybe<RecipeQueryInput>;
};

export type Query = {
	__typename?: 'Query';
	ingredient?: Maybe<Ingredient>;
	ingredients: Array<Maybe<Ingredient>>;
	recipe?: Maybe<Recipe>;
	recipes: Array<Maybe<Recipe>>;
};

export type QueryIngredientArgs = {
	query?: InputMaybe<IngredientQueryInput>;
};

export type QueryIngredientsArgs = {
	limit?: InputMaybe<Scalars['Int']>;
	query?: InputMaybe<IngredientQueryInput>;
	sortBy?: InputMaybe<IngredientSortByInput>;
};

export type QueryRecipeArgs = {
	query?: InputMaybe<RecipeQueryInput>;
};

export type QueryRecipesArgs = {
	limit?: InputMaybe<Scalars['Int']>;
	query?: InputMaybe<RecipeQueryInput>;
	sortBy?: InputMaybe<RecipeSortByInput>;
};

export type Recipe = {
	__typename?: 'Recipe';
	_id: Scalars['ObjectId'];
	category: Scalars['String'];
	cookTime?: Maybe<Scalars['Int']>;
	imgSrc?: Maybe<Scalars['String']>;
	ingredients: Array<Maybe<Scalars['ObjectId']>>;
	instructions?: Maybe<Scalars['String']>;
	measurements?: Maybe<Array<Maybe<Scalars['String']>>>;
	name: Scalars['String'];
	recipeDescription: Scalars['String'];
};

export type RecipeInsertInput = {
	_id?: InputMaybe<Scalars['ObjectId']>;
	category: Scalars['String'];
	cookTime?: InputMaybe<Scalars['Int']>;
	imgSrc?: InputMaybe<Scalars['String']>;
	ingredients: Array<InputMaybe<Scalars['ObjectId']>>;
	instructions?: InputMaybe<Scalars['String']>;
	measurements?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
	name: Scalars['String'];
	recipeDescription: Scalars['String'];
};

export type RecipeQueryInput = {
	AND?: InputMaybe<Array<RecipeQueryInput>>;
	OR?: InputMaybe<Array<RecipeQueryInput>>;
	_id?: InputMaybe<Scalars['ObjectId']>;
	_id_exists?: InputMaybe<Scalars['Boolean']>;
	_id_gt?: InputMaybe<Scalars['ObjectId']>;
	_id_gte?: InputMaybe<Scalars['ObjectId']>;
	_id_in?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
	_id_lt?: InputMaybe<Scalars['ObjectId']>;
	_id_lte?: InputMaybe<Scalars['ObjectId']>;
	_id_ne?: InputMaybe<Scalars['ObjectId']>;
	_id_nin?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
	category?: InputMaybe<Scalars['String']>;
	category_exists?: InputMaybe<Scalars['Boolean']>;
	category_gt?: InputMaybe<Scalars['String']>;
	category_gte?: InputMaybe<Scalars['String']>;
	category_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
	category_lt?: InputMaybe<Scalars['String']>;
	category_lte?: InputMaybe<Scalars['String']>;
	category_ne?: InputMaybe<Scalars['String']>;
	category_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
	cookTime?: InputMaybe<Scalars['Int']>;
	cookTime_exists?: InputMaybe<Scalars['Boolean']>;
	cookTime_gt?: InputMaybe<Scalars['Int']>;
	cookTime_gte?: InputMaybe<Scalars['Int']>;
	cookTime_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
	cookTime_lt?: InputMaybe<Scalars['Int']>;
	cookTime_lte?: InputMaybe<Scalars['Int']>;
	cookTime_ne?: InputMaybe<Scalars['Int']>;
	cookTime_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
	imgSrc?: InputMaybe<Scalars['String']>;
	imgSrc_exists?: InputMaybe<Scalars['Boolean']>;
	imgSrc_gt?: InputMaybe<Scalars['String']>;
	imgSrc_gte?: InputMaybe<Scalars['String']>;
	imgSrc_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
	imgSrc_lt?: InputMaybe<Scalars['String']>;
	imgSrc_lte?: InputMaybe<Scalars['String']>;
	imgSrc_ne?: InputMaybe<Scalars['String']>;
	imgSrc_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
	ingredients?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
	ingredients_exists?: InputMaybe<Scalars['Boolean']>;
	ingredients_in?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
	ingredients_nin?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
	instructions?: InputMaybe<Scalars['String']>;
	instructions_exists?: InputMaybe<Scalars['Boolean']>;
	instructions_gt?: InputMaybe<Scalars['String']>;
	instructions_gte?: InputMaybe<Scalars['String']>;
	instructions_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
	instructions_lt?: InputMaybe<Scalars['String']>;
	instructions_lte?: InputMaybe<Scalars['String']>;
	instructions_ne?: InputMaybe<Scalars['String']>;
	instructions_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
	measurements?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
	measurements_exists?: InputMaybe<Scalars['Boolean']>;
	measurements_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
	measurements_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
	name?: InputMaybe<Scalars['String']>;
	name_exists?: InputMaybe<Scalars['Boolean']>;
	name_gt?: InputMaybe<Scalars['String']>;
	name_gte?: InputMaybe<Scalars['String']>;
	name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
	name_lt?: InputMaybe<Scalars['String']>;
	name_lte?: InputMaybe<Scalars['String']>;
	name_ne?: InputMaybe<Scalars['String']>;
	name_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
	recipeDescription?: InputMaybe<Scalars['String']>;
	recipeDescription_exists?: InputMaybe<Scalars['Boolean']>;
	recipeDescription_gt?: InputMaybe<Scalars['String']>;
	recipeDescription_gte?: InputMaybe<Scalars['String']>;
	recipeDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
	recipeDescription_lt?: InputMaybe<Scalars['String']>;
	recipeDescription_lte?: InputMaybe<Scalars['String']>;
	recipeDescription_ne?: InputMaybe<Scalars['String']>;
	recipeDescription_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export enum RecipeSortByInput {
	CategoryAsc = 'CATEGORY_ASC',
	CategoryDesc = 'CATEGORY_DESC',
	CooktimeAsc = 'COOKTIME_ASC',
	CooktimeDesc = 'COOKTIME_DESC',
	ImgsrcAsc = 'IMGSRC_ASC',
	ImgsrcDesc = 'IMGSRC_DESC',
	InstructionsAsc = 'INSTRUCTIONS_ASC',
	InstructionsDesc = 'INSTRUCTIONS_DESC',
	NameAsc = 'NAME_ASC',
	NameDesc = 'NAME_DESC',
	RecipedescriptionAsc = 'RECIPEDESCRIPTION_ASC',
	RecipedescriptionDesc = 'RECIPEDESCRIPTION_DESC',
	IdAsc = '_ID_ASC',
	IdDesc = '_ID_DESC',
}

export type RecipeUpdateInput = {
	_id?: InputMaybe<Scalars['ObjectId']>;
	_id_unset?: InputMaybe<Scalars['Boolean']>;
	category?: InputMaybe<Scalars['String']>;
	category_unset?: InputMaybe<Scalars['Boolean']>;
	cookTime?: InputMaybe<Scalars['Int']>;
	cookTime_inc?: InputMaybe<Scalars['Int']>;
	cookTime_unset?: InputMaybe<Scalars['Boolean']>;
	imgSrc?: InputMaybe<Scalars['String']>;
	imgSrc_unset?: InputMaybe<Scalars['Boolean']>;
	ingredients?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
	ingredients_unset?: InputMaybe<Scalars['Boolean']>;
	instructions?: InputMaybe<Scalars['String']>;
	instructions_unset?: InputMaybe<Scalars['Boolean']>;
	measurements?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
	measurements_unset?: InputMaybe<Scalars['Boolean']>;
	name?: InputMaybe<Scalars['String']>;
	name_unset?: InputMaybe<Scalars['Boolean']>;
	recipeDescription?: InputMaybe<Scalars['String']>;
	recipeDescription_unset?: InputMaybe<Scalars['Boolean']>;
};

export type UpdateManyPayload = {
	__typename?: 'UpdateManyPayload';
	matchedCount: Scalars['Int'];
	modifiedCount: Scalars['Int'];
};

export type GetIngredientQueryVariables = Exact<{
	a?: InputMaybe<IngredientQueryInput>;
}>;

export type GetIngredientQuery = {
	__typename?: 'Query';
	ingredient?: {
		__typename?: 'Ingredient';
		_id: any;
		name: string;
		imgSrc?: string | null;
		recipes?: Array<any | null> | null;
	} | null;
};

export type GetIngredientsQueryVariables = Exact<{
	q?: InputMaybe<IngredientQueryInput>;
	l?: InputMaybe<Scalars['Int']>;
	sb?: InputMaybe<IngredientSortByInput>;
}>;

export type GetIngredientsQuery = {
	__typename?: 'Query';
	ingredients: Array<{
		__typename?: 'Ingredient';
		_id: any;
		name: string;
		imgSrc?: string | null;
		recipes?: Array<any | null> | null;
	} | null>;
};

export type GetRecipeQueryVariables = Exact<{
	q?: InputMaybe<RecipeQueryInput>;
}>;

export type GetRecipeQuery = {
	__typename?: 'Query';
	recipe?: {
		__typename?: 'Recipe';
		_id: any;
		category: string;
		cookTime?: number | null;
		imgSrc?: string | null;
		ingredients: Array<any | null>;
		instructions?: string | null;
		measurements?: Array<string | null> | null;
		name: string;
		recipeDescription: string;
	} | null;
};

export type GetRecipesQueryVariables = Exact<{
	q?: InputMaybe<RecipeQueryInput>;
	l?: InputMaybe<Scalars['Int']>;
	sb?: InputMaybe<RecipeSortByInput>;
}>;

export type GetRecipesQuery = {
	__typename?: 'Query';
	recipes: Array<{
		__typename?: 'Recipe';
		_id: any;
		category: string;
		cookTime?: number | null;
		imgSrc?: string | null;
		ingredients: Array<any | null>;
		instructions?: string | null;
		measurements?: Array<string | null> | null;
		name: string;
		recipeDescription: string;
	} | null>;
};

export const GetIngredientDocument = gql`
	query getIngredient($a: IngredientQueryInput) {
		ingredient(query: $a) {
			_id
			name
			imgSrc
			recipes
		}
	}
`;

/**
 * __useGetIngredientQuery__
 *
 * To run a query within a React component, call `useGetIngredientQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetIngredientQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetIngredientQuery({
 *   variables: {
 *      a: // value for 'a'
 *   },
 * });
 */
export function useGetIngredientQuery(
	baseOptions?: Apollo.QueryHookOptions<
		GetIngredientQuery,
		GetIngredientQueryVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<GetIngredientQuery, GetIngredientQueryVariables>(
		GetIngredientDocument,
		options
	);
}
export function useGetIngredientLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<
		GetIngredientQuery,
		GetIngredientQueryVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<GetIngredientQuery, GetIngredientQueryVariables>(
		GetIngredientDocument,
		options
	);
}
export type GetIngredientQueryHookResult = ReturnType<
	typeof useGetIngredientQuery
>;
export type GetIngredientLazyQueryHookResult = ReturnType<
	typeof useGetIngredientLazyQuery
>;
export type GetIngredientQueryResult = Apollo.QueryResult<
	GetIngredientQuery,
	GetIngredientQueryVariables
>;
export const GetIngredientsDocument = gql`
	query getIngredients(
		$q: IngredientQueryInput
		$l: Int
		$sb: IngredientSortByInput
	) {
		ingredients(query: $q, limit: $l, sortBy: $sb) {
			_id
			name
			imgSrc
			recipes
		}
	}
`;

/**
 * __useGetIngredientsQuery__
 *
 * To run a query within a React component, call `useGetIngredientsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetIngredientsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetIngredientsQuery({
 *   variables: {
 *      q: // value for 'q'
 *      l: // value for 'l'
 *      sb: // value for 'sb'
 *   },
 * });
 */
export function useGetIngredientsQuery(
	baseOptions?: Apollo.QueryHookOptions<
		GetIngredientsQuery,
		GetIngredientsQueryVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<GetIngredientsQuery, GetIngredientsQueryVariables>(
		GetIngredientsDocument,
		options
	);
}
export function useGetIngredientsLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<
		GetIngredientsQuery,
		GetIngredientsQueryVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<
		GetIngredientsQuery,
		GetIngredientsQueryVariables
	>(GetIngredientsDocument, options);
}
export type GetIngredientsQueryHookResult = ReturnType<
	typeof useGetIngredientsQuery
>;
export type GetIngredientsLazyQueryHookResult = ReturnType<
	typeof useGetIngredientsLazyQuery
>;
export type GetIngredientsQueryResult = Apollo.QueryResult<
	GetIngredientsQuery,
	GetIngredientsQueryVariables
>;
export const GetRecipeDocument = gql`
	query getRecipe($q: RecipeQueryInput) {
		recipe(query: $q) {
			_id
			category
			cookTime
			imgSrc
			ingredients
			instructions
			measurements
			name
			recipeDescription
		}
	}
`;

/**
 * __useGetRecipeQuery__
 *
 * To run a query within a React component, call `useGetRecipeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRecipeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRecipeQuery({
 *   variables: {
 *      q: // value for 'q'
 *   },
 * });
 */
export function useGetRecipeQuery(
	baseOptions?: Apollo.QueryHookOptions<
		GetRecipeQuery,
		GetRecipeQueryVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<GetRecipeQuery, GetRecipeQueryVariables>(
		GetRecipeDocument,
		options
	);
}
export function useGetRecipeLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<
		GetRecipeQuery,
		GetRecipeQueryVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<GetRecipeQuery, GetRecipeQueryVariables>(
		GetRecipeDocument,
		options
	);
}
export type GetRecipeQueryHookResult = ReturnType<typeof useGetRecipeQuery>;
export type GetRecipeLazyQueryHookResult = ReturnType<
	typeof useGetRecipeLazyQuery
>;
export type GetRecipeQueryResult = Apollo.QueryResult<
	GetRecipeQuery,
	GetRecipeQueryVariables
>;
export const GetRecipesDocument = gql`
	query getRecipes($q: RecipeQueryInput, $l: Int, $sb: RecipeSortByInput) {
		recipes(query: $q, limit: $l, sortBy: $sb) {
			_id
			category
			cookTime
			imgSrc
			ingredients
			instructions
			measurements
			name
			recipeDescription
		}
	}
`;

/**
 * __useGetRecipesQuery__
 *
 * To run a query within a React component, call `useGetRecipesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRecipesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRecipesQuery({
 *   variables: {
 *      q: // value for 'q'
 *      l: // value for 'l'
 *      sb: // value for 'sb'
 *   },
 * });
 */
export function useGetRecipesQuery(
	baseOptions?: Apollo.QueryHookOptions<
		GetRecipesQuery,
		GetRecipesQueryVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<GetRecipesQuery, GetRecipesQueryVariables>(
		GetRecipesDocument,
		options
	);
}
export function useGetRecipesLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<
		GetRecipesQuery,
		GetRecipesQueryVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<GetRecipesQuery, GetRecipesQueryVariables>(
		GetRecipesDocument,
		options
	);
}
export type GetRecipesQueryHookResult = ReturnType<typeof useGetRecipesQuery>;
export type GetRecipesLazyQueryHookResult = ReturnType<
	typeof useGetRecipesLazyQuery
>;
export type GetRecipesQueryResult = Apollo.QueryResult<
	GetRecipesQuery,
	GetRecipesQueryVariables
>;
