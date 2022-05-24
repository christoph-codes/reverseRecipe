import React from 'react';
import { Ingredient, useGetIngredientLazyQuery } from '../graphql/generated/Generated';

interface IIngredientContext {
    data?: Ingredient | Ingredient[];
    error?: boolean;
    loading?: boolean;
    ingredients?: Ingredient[];
    setIngredients?: (i: Ingredient[]) => void;
    getIngredients?: () => void;
}

export const IngredientContext = React.createContext<IIngredientContext>({});

export function IngredientProvider(
    children?: React.ReactNode
): JSX.Element {
    const [ingredients, setIngredients] = React.useState([]);
    const [fetchIngredients, { data, error, loading }] = useGetIngredientLazyQuery();

    const getIngredients = () => {
        if (ingredients && ingredients.length) {
            fetchIngredients({
                variables: {
                    a: { } // fetch by array of names
                }
            });
        }
    }

    return (
        <IngredientContext.Provider value={{ data, error, loading, ingredients, setIngredients, getIngredients }}>
            {children}
        </IngredientContext.Provider>
    )
}

export const UseIngredientContext = () => React.useContext(IngredientContext);