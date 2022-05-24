import { gql } from '@apollo/client';

export const RECIPE = gql`
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

export const RECIPES = gql`
    query getRecipes($q: RecipeQueryInput, $lim: Int, $sort: RecipeSortByInput) {
        recipes(query: $q, limit: $lim, sortBy: $sort) {
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