import React, { PropsWithChildren, useCallback } from 'react';
import { Ingredient } from '../graphql/generated/graphql';

interface IIngredientQueryInfo {
    names?: string[];
    ids?: string[];
}
interface IIngredientProviderProps {
    ingredients?: Ingredient[];
    queryInfo?: IIngredientQueryInfo;
    updateIngredients: (i: Ingredient[]) => void;
    updateQueryInfo: (q: IIngredientQueryInfo) => void;
}

const IngredientsContext = React.createContext<IIngredientProviderProps>({
    ingredients: [],
    queryInfo: {
        names: [],
        ids: []
    },
    updateIngredients: ([]) => {},
    updateQueryInfo: ({}) => {}
});

export const IngredientsProvider = (props: PropsWithChildren<IIngredientProviderProps>) => {
    const [ingredients, setIngredients] = React.useState<Ingredient[]>(() => {
        const ingredientsItem = sessionStorage.getItem('ingredients');
        return ingredientsItem ? JSON.parse(ingredientsItem) : [];
    });
    const [queryInfo, setQueryInfo] = React.useState<IIngredientQueryInfo>(() => {
        const queryInfoItem = sessionStorage.getItem('ingredientQueryInfo');
        return queryInfoItem ? JSON.parse(queryInfoItem) : {};
    });

    const updateIngredients = useCallback(() => {
        sessionStorage.setItem('ingredients', JSON.stringify(ingredients));
        setIngredients(ingredients);
        return;
    }, [sessionStorage.getItem('ingredients')]);

    const updateQueryInfo = useCallback(() => {
        sessionStorage.setItem('ingredientQueryInfo', JSON.stringify(queryInfo));
        setQueryInfo(queryInfo);
        return;
    }, [sessionStorage.getItem('ingredientQueryInfo')]);

    return (
        <IngredientsContext.Provider value={{ 
            ingredients,
            queryInfo,
            updateIngredients,
            updateQueryInfo
         }}>
            {props.children}
        </IngredientsContext.Provider>
    );
}

export const useIngredientsContext = () => React.useContext(IngredientsContext);