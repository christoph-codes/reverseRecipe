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