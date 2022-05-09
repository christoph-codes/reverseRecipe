import { gql } from '@apollo/client';

// example input values for $query:
//      { cookTime_gte: <Int> }
//      { _id_in: [<id string>,...] }
export const RECIPE = gql`
    query getRecipe($query: RecipeQueryInput) {
        recipe(query: $query) {
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

// example input values for $query:
//      { query: { cookTime_lte: <Int> }}
//      { query: { _id_in: [<id string>,...] }}
//      { query: { AND: { cookTime: <Int>, name: <name string> }}}
//      { query: { imgSrc_exists: true }}
// example input values for $sortBy:
//      { sortBy: RECIPEDESCRIPTION_DESC }
//      { sortBy: COOKTIME_DESC }
//      { sortBy: NAME_ASC }
//      { sortBy: CATEGORY_DESC }
export const RECIPES = gql`
    query getRecipes($query: RecipeQueryInput, $limit: Int, $sortBy: RecipeSortByInput) {
        recipes(query: $query, limit: $limit, sortBy: $sortBy) {
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