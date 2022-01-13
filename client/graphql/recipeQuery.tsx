import React from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import { FULL_RECIPE_QUERY } from './fragments';

const queryAll = gql`
    ${FULL_RECIPE_QUERY}
    query queryAllRecipes {
        ...fullRecipeQuery
    }
`

const queryByName = gql`
    ${FULL_RECIPE_QUERY}
    query queryRecipeByName($name: string!) {
        recipe(name: $name) {
            ...fullRecipeQuery
        }
    }
`;

const queryById = gql`
    ${FULL_RECIPE_QUERY}
    query queryRecipeById($id: ID!) {
        recipe(_id: $id) {
            ...fullRecipeQuery
        }
    }
`;

const queryFromNameList = gql`
    ${FULL_RECIPE_QUERY}
    query queryRecipesFromNameList($nameList: [string!]) {
        queryIRecipesFromNameList(
            input: $nameList
        ) {
            ...fullRecipeQuery
        }
    }
`;

const queryFromIdList = gql`
    ${FULL_RECIPE_QUERY}
    query queryRecipesFromNameList($idList: [ID!]) {
        queryRecipesFromIdList(
            input: $idList
        ) {
            ...fullRecipeQuery
        }
    }
`;

const queryFromIngredients = gql`
    ${FULL_RECIPE_QUERY}
    query queryRecipesFromIngredients($ingredientList: [ID!]) {
        queryRecipesFromIngredients(
            input: $ingredientList
        ) {
            ...fullRecipeQuery
        }
    }
`;

export function queryRecipesFromIngredients(ingredientList: [string]) {
    const { data, loading, error, startPolling, stopPolling } = useQuery(
        queryFromIngredients
    );
    React.useEffect(() => {
        startPolling(1000);
        return () => stopPolling();
    }, [startPolling, stopPolling]);

    if (error) {
        throw new Error(`Failed to fetch recipes: ${error.message}`);
    }
    
    const recipes = data?.queryFromIngredients ?? ['no recipes found'];
    return {
        recipes,
        loading,
    };
}

export function queryAllRecipes() {
    const { data, loading, error, startPolling, stopPolling } = useQuery(
        queryAll
    );
    React.useEffect(() => {
        startPolling(1000);
        return () => stopPolling();
    }, [startPolling, stopPolling]);

    if (error) {
        throw new Error(`Failed to fetch all recipes: ${error.message}`);
    }
    
    const recipes = data?.queryAllRecipes ?? ['no recipe found'];
    return {
        recipes,
        loading,
    };
}

export function queryRecipeByName(name: string) {
    const { data, loading, error, startPolling, stopPolling } = useQuery(
        queryByName,
        {
            variables: {
                name: name
            }
        },
    );
    React.useEffect(() => {
        startPolling(1000);
        return () => stopPolling();
    }, [startPolling, stopPolling]);

    if (error) {
        throw new Error(`Failed to fetch ${name} recipe: ${error.message}`);
    }
    
    const recipe = data?.recipe ?? 'no recipe found';
    return {
        recipe,
        loading,
    };
}

export function queryRecipesFromNameList(nameList: [string]) {
    const { data, loading, error, startPolling, stopPolling } = useQuery(
        queryFromNameList,
        {
            variables: {
                nameList: nameList
            }
        },
    );
    React.useEffect(() => {
        startPolling(1000);
        return () => stopPolling();
    }, [startPolling, stopPolling]);

    if (error) {
        throw new Error(`Failed to fetch recipe names ${nameList.join(', ')}: ${error.message}`);
    }

    const recipes = data?.queryRecipesFromNameList ?? ['no recipes found'];
    return {
        recipes,
        loading,
    };
};

// type should be ID. idk how that is supposed to work...
export function queryRecipeById(id: string) {
    const { data, loading, error, startPolling, stopPolling } = useQuery(
        queryByName,
        {
            variables: {
                id: id
            }
        },
    );
    React.useEffect(() => {
        startPolling(1000);
        return () => stopPolling();
    }, [startPolling, stopPolling]);

    if (error) {
        throw new Error(`Failed to fetch recipe id ${id}: ${error.message}`);
    }

    const recipe = data?.recipe ?? 'no recipe found';
    return {
        recipe,
        loading,
    };
};

export function queryRecipesFromIdList(idList: [string]) {
    const { data, loading, error, startPolling, stopPolling } = useQuery(
        queryFromIdList,
        {
            variables: {
                idList: idList
            }
        },
    );
    React.useEffect(() => {
        startPolling(1000);
        return () => stopPolling();
    }, [startPolling, stopPolling]);

    if (error) {
        throw new Error(`Failed to fetch recipe id's ${idList.join(', ')}: ${error.message}`);
    }

    const recipes = data?.queryRecipesFromIdList ?? ['no recipes found'];
    return {
        recipes,
        loading,
    };
};