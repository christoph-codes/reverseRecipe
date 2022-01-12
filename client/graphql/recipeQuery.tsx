import React from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

// queryAll is defined custom resolver

const queryByName = gql`
    query queryRecipeByName($name: string!) {
        recipe(name: $name) {
            _id,
            name,
            recipes
        }
    }
`;

const queryById = gql`
    query queryRecipeById($id: ID!) {
        recipe(_id: $id) {
            _id,
            name,
            recipes
        }
    }
`;

const queryFromNameList = gql`
    query queryRecipesFromNameList($nameList: [string!]) {
        queryIRecipesFromNameList(
            input: $nameList
        ) {
            _id,
            name,
            recipes
        }
    }
`;

const queryFromIdList = gql`
    query queryRecipesFromNameList($idList: [ID!]) {
        queryRecipesFromIdList(
            input: $idList
        ) {
            _id,
            name,
            recipes
        }
    }
`;

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