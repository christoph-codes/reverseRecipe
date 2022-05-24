import { gql } from '@apollo/client';

export const INGREDIENT = gql`
    query getIngredient($q: IngredientQueryInput) {
        ingredient(query: $q) {
            _id
            name
            imgSrc
            recipes
        }
    }
`;

export const INGREDIENTS = gql`
    query getIngredients($q: IngredientQueryInput, $lim: Int, $sort: IngredientSortByInput) {
        ingredients(query: $q, limit: $lim, sortBy: $sort) {
            _id
            name
            imgSrc
            recipes
        }
    }
`;