import { Resolvers } from '../generated/generated-resolvers';
import { getItem, listItems, ECollectionType } from './functions';
import {
    User,
    Ingredient,
    Recipe
} from '../generated/generated-types';

export const resolvers: Resolvers = {
    Query: {
        user: (parent, args, context, info) => {
            return getItem<User>(args, ECollectionType.USER);
        },
        listUsers: (parent, args, context, info) => {
            return listItems<User>(args, ECollectionType.USER);
        },
        ingredient: (parent, args, context, info) => {
            return getItem<Ingredient>(args, ECollectionType.INGREDIENT);
        },
        listIngredients: (parent, args, context, info) => {
            return listItems<Ingredient>(args, ECollectionType.USER);
        },
        recipe: (parent, args, context, info) => {
            return getItem<Recipe>(args,ECollectionType.RECIPE);
        },
        listRecipes: (parent, args, context, info) => {
            return listItems<Recipe>(args, ECollectionType.USER);
        },
    },
    Mutation: {
        addUser: (parent, args, context, info) => {

        },
        deleteUser: (parent, args, context, info) => {

        },
        addIngredient: (parent, args, context, info) => {

        },
        deleteIngredient: (parent, args, context, info) => {

        },
        addRecipe: (parent, args, context, info) => {

        },
        deleteRecipe: (parent, args, context, info) => {

        },
    }
};