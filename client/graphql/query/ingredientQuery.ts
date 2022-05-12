import { gql } from '@apollo/client';

export const INGREDIENT = gql`
    query getIngredient($a: IngredientQueryInput) {
        ingredient(query: $a) {
            _id
            name
            imgSrc
            recipes
        }
    }
`;

export const INGREDIENTS = gql`
    query getIngredients($q: IngredientQueryInput, $l: Int, $sb: IngredientSortByInput) {
        ingredients(query: $q, limit: $l, sortBy: $sb) {
            _id
            name
            imgSrc
            recipes
        }
    }
`;