import gql from 'graphql-tag';

export const FULL_INGREDIENT_QUERY = gql`
    fragment fullIngredientQuery on ingredient {
        _id,
        imgSrc,
        name,
        recipes
    }
`;

export const FULL_RECIPE_QUERY = gql`
    fragment fullRecipeQuery on recipe {
        _id,
        category,
        cookTime,
        imgSrc,
        ingredients,
        instructions,
        measurements,
        name,
        recipeDescription
    }
`;