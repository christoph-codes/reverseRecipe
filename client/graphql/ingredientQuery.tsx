import React from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

// queryAll is defined custom resolver

const queryByName = gql`
    query queryIngredientByName($name: string!) {
        ingredient(name: $name) {
            _id,
            name,
            recipes
        }
    }
`;

const queryById = gql`
    query queryIngredientById($id: ID!) {
        ingredient(_id: $id) {
            _id,
            name,
            recipes
        }
    }
`;

const queryFromNameList = gql`
    query queryIngredientsFromNameList($nameList: [string!]) {
        queryIngredientsFromNameList(
            input: $nameList
        ) {
            _id,
            name,
            recipes
        }
    }
`;

const queryFromIdList = gql`
    query queryIngredientsFromNameList($idList: [ID!]) {
        queryIngredientsFromIdList(
            input: $idList
        ) {
            _id,
            name,
            recipes
        }
    }
`;

export function queryIngredientByName(name: string) {
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
        throw new Error(`Failed to fetch ${name} ingredient: ${error.message}`);
    }

    const ingredient = data?.ingredient ?? 'no ingredient found';
    return {
        ingredient,
        loading,
    };
}

export function queryIngredientsFromNameList(nameList: [string]) {
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
        throw new Error(`Failed to fetch ingredient names ${nameList.join(', ')}: ${error.message}`);
    }

    const ingredients = data?.queryIngredientsFromNameList ?? ['no ingredient found'];
    return {
        ingredients,
        loading,
    };
};

// type should be ID. idk how that is supposed to work...
export function queryIngredientById(id: string) {
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
        throw new Error(`Failed to fetch ingredient id ${id}: ${error.message}`);
    }

    const ingredient = data?.ingredient ?? 'no ingredient found';
    return {
        ingredient,
        loading,
    };
};

export function queryIngredientsFromIdList(idList: [string]) {
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
        throw new Error(`Failed to fetch ingredient id's ${idList.join(', ')}: ${error.message}`);
    }

    const ingredients = data?.queryIngredientsFromIdList ?? ['no ingredients found'];
    return {
        ingredients,
        loading,
    };
};