import { 
    IIngredient, 
    Ingredient, 
    IRecipe, 
    IUser, 
    Recipe, 
    Resolvers, 
    User 
} from '../generated/generated-resolvers';
import { 
    getItem, 
    listItems, 
    ECollectionType, 
    addItem, 
    deleteItem 
} from './functions';

export const resolvers: Resolvers = {
    Query: {
        user: (parent, args, context, info) => {
            return getItem<User>(args.id, ECollectionType.USER);
        },
        listUsers: (parent, args, context, info) => {
            return listItems<User>(args.ids, ECollectionType.USER);
        },
        ingredient: (parent, args, context, info) => {
            return getItem<Ingredient>(args.id, ECollectionType.INGREDIENT);
        },
        listIngredients: (parent, args, context, info) => {
            return listItems<Ingredient>(args.ids, ECollectionType.USER);
        },
        recipe: (parent, args, context, info) => {
            return getItem<Recipe>(args.id,ECollectionType.RECIPE);
        },
        listRecipes: (parent, args, context, info) => {
            return listItems<Recipe>(args.ids, ECollectionType.USER);
        },
    },
    Mutation: {
        addUser: (parent, args, context, info) => {
            return addItem<IUser>(args.data, ECollectionType.USER);
        },
        deleteUser: (parent, args, context, info) => {
            return deleteItem(args.id, ECollectionType.USER);
        },
        addIngredient: (parent, args, context, info) => {
            return addItem<IIngredient>(args.data, ECollectionType.INGREDIENT);
        },
        deleteIngredient: (parent, args, context, info) => {
            return deleteItem(args.id, ECollectionType.INGREDIENT);
        },
        addRecipe: (parent, args, context, info) => {
            return addItem<IRecipe>(args.data, ECollectionType.RECIPE);
        },
        deleteRecipe: (parent, args, context, info) => {
            return deleteItem(args.id, ECollectionType.RECIPE);
        },
    }
};