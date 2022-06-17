import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
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

export type AdditionalEntityFields = {
  path?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type DeleteManyPayload = {
  __typename?: 'DeleteManyPayload';
  deletedCount: Scalars['Int'];
};

export type Ingredient = {
  __typename?: 'Ingredient';
  _id?: Maybe<Scalars['ObjectId']>;
  imgSrc?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type IngredientInsertInput = {
  _id?: InputMaybe<Scalars['ObjectId']>;
  imgSrc?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
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
};

export enum IngredientSortByInput {
  ImgsrcAsc = 'IMGSRC_ASC',
  ImgsrcDesc = 'IMGSRC_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type IngredientUpdateInput = {
  _id?: InputMaybe<Scalars['ObjectId']>;
  _id_unset?: InputMaybe<Scalars['Boolean']>;
  imgSrc?: InputMaybe<Scalars['String']>;
  imgSrc_unset?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  name_unset?: InputMaybe<Scalars['Boolean']>;
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
  _id?: Maybe<Scalars['ObjectId']>;
  category?: Maybe<Scalars['String']>;
  cookTime?: Maybe<Scalars['Int']>;
  imgSrc?: Maybe<Scalars['String']>;
  ingredients?: Maybe<Array<Maybe<Scalars['String']>>>;
  instructions?: Maybe<Scalars['String']>;
  measurements?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
};

export type RecipeInsertInput = {
  _id?: InputMaybe<Scalars['ObjectId']>;
  category?: InputMaybe<Scalars['String']>;
  cookTime?: InputMaybe<Scalars['Int']>;
  imgSrc?: InputMaybe<Scalars['String']>;
  ingredients?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  instructions?: InputMaybe<Scalars['String']>;
  measurements?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
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
  ingredients?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ingredients_exists?: InputMaybe<Scalars['Boolean']>;
  ingredients_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ingredients_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
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
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
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
  ingredients?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ingredients_unset?: InputMaybe<Scalars['Boolean']>;
  instructions?: InputMaybe<Scalars['String']>;
  instructions_unset?: InputMaybe<Scalars['Boolean']>;
  measurements?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  measurements_unset?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  name_unset?: InputMaybe<Scalars['Boolean']>;
};

export type UpdateManyPayload = {
  __typename?: 'UpdateManyPayload';
  matchedCount: Scalars['Int'];
  modifiedCount: Scalars['Int'];
};

import { ObjectId } from 'mongodb';
export type IngredientQueryVariables = Exact<{
  query?: InputMaybe<IngredientQueryInput>;
}>;


export type IngredientQuery = { __typename?: 'Query', ingredient?: { __typename?: 'Ingredient', _id?: any | null, imgSrc?: string | null, name?: string | null } | null };

export type IngredientsQueryVariables = Exact<{
  sortBy?: InputMaybe<IngredientSortByInput>;
  query?: InputMaybe<IngredientQueryInput>;
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type IngredientsQuery = { __typename?: 'Query', ingredients: Array<{ __typename?: 'Ingredient', _id?: any | null, imgSrc?: string | null, name?: string | null } | null> };

export type RecipeQueryVariables = Exact<{
  query?: InputMaybe<RecipeQueryInput>;
}>;


export type RecipeQuery = { __typename?: 'Query', recipe?: { __typename?: 'Recipe', _id?: any | null, category?: string | null, cookTime?: number | null, imgSrc?: string | null, ingredients?: Array<string | null> | null, instructions?: string | null, measurements?: Array<string | null> | null, name?: string | null } | null };

export type RecipesQueryVariables = Exact<{
  sortBy?: InputMaybe<RecipeSortByInput>;
  query?: InputMaybe<RecipeQueryInput>;
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type RecipesQuery = { __typename?: 'Query', recipes: Array<{ __typename?: 'Recipe', _id?: any | null, category?: string | null, cookTime?: number | null, imgSrc?: string | null, ingredients?: Array<string | null> | null, instructions?: string | null, measurements?: Array<string | null> | null, name?: string | null } | null> };


export const IngredientDocument = gql`
    query ingredient($query: IngredientQueryInput) {
  ingredient(query: $query) {
    _id
    imgSrc
    name
  }
}
    `;

/**
 * __useIngredientQuery__
 *
 * To run a query within a React component, call `useIngredientQuery` and pass it any options that fit your needs.
 * When your component renders, `useIngredientQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIngredientQuery({
 *   variables: {
 *      query: // value for 'query'
 *   },
 * });
 */
export function useIngredientQuery(baseOptions?: Apollo.QueryHookOptions<IngredientQuery, IngredientQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IngredientQuery, IngredientQueryVariables>(IngredientDocument, options);
      }
export function useIngredientLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IngredientQuery, IngredientQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IngredientQuery, IngredientQueryVariables>(IngredientDocument, options);
        }
export type IngredientQueryHookResult = ReturnType<typeof useIngredientQuery>;
export type IngredientLazyQueryHookResult = ReturnType<typeof useIngredientLazyQuery>;
export type IngredientQueryResult = Apollo.QueryResult<IngredientQuery, IngredientQueryVariables>;
export const IngredientsDocument = gql`
    query Ingredients($sortBy: IngredientSortByInput, $query: IngredientQueryInput, $limit: Int = 50) {
  ingredients(sortBy: $sortBy, query: $query, limit: $limit) {
    _id
    imgSrc
    name
  }
}
    `;

/**
 * __useIngredientsQuery__
 *
 * To run a query within a React component, call `useIngredientsQuery` and pass it any options that fit your needs.
 * When your component renders, `useIngredientsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIngredientsQuery({
 *   variables: {
 *      sortBy: // value for 'sortBy'
 *      query: // value for 'query'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useIngredientsQuery(baseOptions?: Apollo.QueryHookOptions<IngredientsQuery, IngredientsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IngredientsQuery, IngredientsQueryVariables>(IngredientsDocument, options);
      }
export function useIngredientsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IngredientsQuery, IngredientsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IngredientsQuery, IngredientsQueryVariables>(IngredientsDocument, options);
        }
export type IngredientsQueryHookResult = ReturnType<typeof useIngredientsQuery>;
export type IngredientsLazyQueryHookResult = ReturnType<typeof useIngredientsLazyQuery>;
export type IngredientsQueryResult = Apollo.QueryResult<IngredientsQuery, IngredientsQueryVariables>;
export const RecipeDocument = gql`
    query Recipe($query: RecipeQueryInput) {
  recipe(query: $query) {
    _id
    category
    cookTime
    imgSrc
    ingredients
    instructions
    measurements
    name
  }
}
    `;

/**
 * __useRecipeQuery__
 *
 * To run a query within a React component, call `useRecipeQuery` and pass it any options that fit your needs.
 * When your component renders, `useRecipeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRecipeQuery({
 *   variables: {
 *      query: // value for 'query'
 *   },
 * });
 */
export function useRecipeQuery(baseOptions?: Apollo.QueryHookOptions<RecipeQuery, RecipeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RecipeQuery, RecipeQueryVariables>(RecipeDocument, options);
      }
export function useRecipeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RecipeQuery, RecipeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RecipeQuery, RecipeQueryVariables>(RecipeDocument, options);
        }
export type RecipeQueryHookResult = ReturnType<typeof useRecipeQuery>;
export type RecipeLazyQueryHookResult = ReturnType<typeof useRecipeLazyQuery>;
export type RecipeQueryResult = Apollo.QueryResult<RecipeQuery, RecipeQueryVariables>;
export const RecipesDocument = gql`
    query Recipes($sortBy: RecipeSortByInput, $query: RecipeQueryInput, $limit: Int) {
  recipes(sortBy: $sortBy, query: $query, limit: $limit) {
    _id
    category
    cookTime
    imgSrc
    ingredients
    instructions
    measurements
    name
  }
}
    `;

/**
 * __useRecipesQuery__
 *
 * To run a query within a React component, call `useRecipesQuery` and pass it any options that fit your needs.
 * When your component renders, `useRecipesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRecipesQuery({
 *   variables: {
 *      sortBy: // value for 'sortBy'
 *      query: // value for 'query'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useRecipesQuery(baseOptions?: Apollo.QueryHookOptions<RecipesQuery, RecipesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RecipesQuery, RecipesQueryVariables>(RecipesDocument, options);
      }
export function useRecipesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RecipesQuery, RecipesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RecipesQuery, RecipesQueryVariables>(RecipesDocument, options);
        }
export type RecipesQueryHookResult = ReturnType<typeof useRecipesQuery>;
export type RecipesLazyQueryHookResult = ReturnType<typeof useRecipesLazyQuery>;
export type RecipesQueryResult = Apollo.QueryResult<RecipesQuery, RecipesQueryVariables>;