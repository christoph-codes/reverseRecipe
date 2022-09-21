import React, { PropsWithChildren } from 'react';
import { Ingredient } from '../utils/graphql/generated/generated-types';

interface IIngredients {
    ingredients?: Ingredient[];
    searchNames?: string[];
    cachedNames?: string[];
    cachedIds?: string[];
    cacheIngredients: (list: Ingredient[], isCacheNames?: boolean, isCacheIds?: boolean) => void;
    setSearchNames: (list: string[]) => void;
    cacheNames: (list: string[]) => void;
    cacheIds: (list: string[]) => void;
}

const IngredientsContext = React.createContext<IIngredients>({
    ingredients: [],
    searchNames: [],
    cachedNames: [],
    cachedIds: [],
    cacheIngredients: () => {},
    setSearchNames: () => {},
    cacheNames: () => {},
    cacheIds: () => {}
});

export const IngredientsProvider = (props: PropsWithChildren<IIngredients>) => {
    const [ingredients, setIngredients] = React.useState<Ingredient[]>([]);
    const [searchNames, setSearchNames] = React.useState<string[]>([]);
    const [cachedNames, setCachedNames] = React.useState<string[]>([]);
    const [cachedIds, setCachedIds] = React.useState<string[]>([]);

    const cacheIngredients = (
        list: Ingredient[], 
        isCacheNames: boolean = true, 
        isCacheIds: boolean = true
    ) => {
        if (list.length) {
            setIngredients(list);
            isCacheNames && setCachedNames(list.map((item) => item?.name ?? ''));
            isCacheIds && setCachedIds(list.map((item) => item?._id ?? ''));
        }
    }

    const cacheNames = (list?: string[]) => {
        if (list?.length) {
            setCachedNames(list);
        }
    }

    const cacheIds = (list?: string[]) => {
        if (list?.length) {
            setCachedIds(list);
        }
    }

    return (
        <IngredientsContext.Provider value={{ 
            ingredients, 
            searchNames, 
            cachedNames, 
            cachedIds, 
            cacheIngredients, 
            setSearchNames, 
            cacheNames, 
            cacheIds }}>
            {props.children}
        </IngredientsContext.Provider>
    );
}

export const useIngredientsContext = () => React.useContext(IngredientsContext);