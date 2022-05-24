import React from 'react';

interface IRecipeContext {
    children?: React.ReactNode;
    recipes?: string[];
    setRecipes?: (s: string[]) => void;
}

export const RecipeContext = React.createContext<IRecipeContext>({});

export function RecipeProvider({
    children
}: IRecipeContext): JSX.Element {
    const [recipes, setRecipes] = React.useState([]);

    return (
        <RecipeContext.Provider value={{ recipes, setRecipes }}>
            {children}
        </RecipeContext.Provider>
    )
}

export const UseRecipeContext = () => React.useContext(RecipeContext);
