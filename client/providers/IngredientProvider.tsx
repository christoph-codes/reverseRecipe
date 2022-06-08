import React, { PropsWithChildren } from 'react';
import { Ingredient } from '../graphql/generated/graphql';

interface IIngredients {
    ingredients?: Ingredient[];
    names?: string[];
    ids?: string[];
    cacheIngredients?: (list: Ingredient[]) => void;
    cacheNames?: (list: string[]) => void;
    cacheIds?: (list: string[]) => void;
}

const IngredientsContext = React.createContext<IIngredients>({
    ingredients: [],
    names: [],
    ids: [],
    cacheIngredients: () => {},
    cacheNames: () => {},
    cacheIds: () => {}
});

export const IngredientsProvider = (props: PropsWithChildren<IIngredients>) => {
    const [ingredients, setIngredients] = React.useState<Ingredient[]>([]);
    const [names, setNames] = React.useState<string[]>([]);
    const [ids, setIds] = React.useState<string[]>([]);

    const cacheIngredients = (list?: Ingredient[]) => {
        if (list?.length) {
            setIngredients(list);
        }
    }

    const cacheNames = (list?: string[]) => {
        if (list?.length) {
            setNames(list);
        }
    }

    const cacheIds = (list?: string[]) => {
        if (list?.length) {
            setIds(list);
        }
    }

    return (
        <IngredientsContext.Provider value={{ ingredients, names, ids, cacheIngredients, cacheNames, cacheIds }}>
            {props.children}
        </IngredientsContext.Provider>
    );
}

export const useIngredientsContext = () => React.useContext(IngredientsContext);