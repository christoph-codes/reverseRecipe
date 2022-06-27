import React, { PropsWithChildren } from 'react';
import { Recipe } from '../graphql/generated/graphql';

interface IRecipeQueryInfo {
    names?: string[];
    ids?: string[];
}

interface IRecipeProviderProps {
    recipes?: Recipe[];
    queryInfo?: IRecipeQueryInfo;
    updateRecipes: (r: (Recipe | null)[]) => void;
    updateQueryInfo: (q: IRecipeQueryInfo) => void;
}

const RecipesContext = React.createContext<IRecipeProviderProps>({
    recipes: [],
    queryInfo: {
        names: [],
        ids: []
    },
    updateRecipes: ([]) => {},
    updateQueryInfo: ({}) => {}
});

export const RecipesProvider = (props: PropsWithChildren<IRecipeProviderProps>) => {
    const [recipes, setRecipes] = React.useState<Recipe[]>(() => {
        const recipesItem = sessionStorage.getItem('recipes');
        return recipesItem ? JSON.parse(recipesItem) : [];
    });
    const [queryInfo, setQueryInfo] = React.useState<IRecipeQueryInfo>(() => {
        const queryInfoItem = sessionStorage.getItem('recipeQueryInfo');
        return queryInfoItem ? JSON.parse(queryInfoItem) : {};
    });

    const updateRecipes = React.useCallback(() => {
        // make sure not null[]
        sessionStorage.setItem('recipes', JSON.stringify(recipes));
        setRecipes(recipes);
        return;
    }, [sessionStorage.getItem('recipes')]);

    const updateQueryInfo = React.useCallback(() => {
        sessionStorage.setItem('recipeQueryInfo', JSON.stringify(queryInfo));
        setQueryInfo(queryInfo);
        return;
    }, [sessionStorage.getItem('recipeQueryInfo')]);

    return (
        <RecipesContext.Provider value={{ 
            recipes,
            queryInfo,
            updateRecipes,
            updateQueryInfo
         }}>
            {props.children}
        </RecipesContext.Provider>
    );
}

export const useRecipesContext = () => React.useContext(RecipesContext);