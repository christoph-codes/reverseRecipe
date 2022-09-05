import React, { PropsWithChildren } from 'react';
import { Recipe } from '../pages/api/graphql/generated/graphql';

interface IRecipes {
    recipes?: Recipe[];
    names?: string[];
    ids?: string[];
    setRecipes?: (list: Recipe[]) => void;
    setNames?: (list: string[]) => void;
    setIds?: (list: string[]) => void;
}

const RecipesContext = React.createContext<IRecipes>({
    recipes: [],
    names: [],
    ids: [],
    setRecipes: () => {},
    setNames: () => {},
    setIds: () => {}
});

export const RecipesProvider = (props: PropsWithChildren<IRecipes>) => {
    const [recipes, setRecipes] = React.useState<Recipe[]>([]);
    const [names, setNames] = React.useState<string[]>([]);
    const [ids, setIds] = React.useState<string[]>([]);

    return (
        <RecipesContext.Provider value={{ recipes, names, ids, setRecipes, setNames, setIds }}>
            {props.children}
        </RecipesContext.Provider>
    );
}

export const useRecipesContext = () => React.useContext(RecipesContext);