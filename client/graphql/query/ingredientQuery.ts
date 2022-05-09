import { gql } from '@apollo/client';

// gets a single ingredient
// examples input value for $query:
//      { _id: <id string> }
//      { name: <name string> }
//      { recipes_in: [<recipe id string>,...] }
export const INGREDIENT = gql`
    query getIngredient($query: IngredientQueryInput) {
        ingredient(query: $query) {
            _id
            name
            imgSrc
            recipes
        }
    }
`;

// gets multiple ingredients with a default limit of if not specified.

export const INGREDIENTS = gql`
    query getIngredients($query: IngredientQueryInput, $limit: Int, $sortBy: IngredientSortByInput) {
        ingredients(query: $query, limit: $limt, sortBy: $sortBy) {
            _id
            name
            imgSrc
            recipes
        }
    }
`;