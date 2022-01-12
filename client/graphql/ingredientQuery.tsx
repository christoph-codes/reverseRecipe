import React from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import { FULL_INGREDIENT_QUERY } from './fragments';

const queryAll = gql`
    ${FULL_INGREDIENT_QUERY}
    query queryAllIngredients {
        ...fullIngredientQuery
    }
`;

const queryByName = gql`
    ${FULL_INGREDIENT_QUERY}
    query queryIngredientByName($name: string!) {
        ingredient(name: $name) {
            ...fullIngredientQuery
        }
    }
`;

const queryById = gql`
    ${FULL_INGREDIENT_QUERY}
    query queryIngredientById($id: ID!) {
        ingredient(_id: $id) {
            ...fullIngredientQuery
        }
    }
`;

const queryFromNameList = gql`
    ${FULL_INGREDIENT_QUERY}
    query queryIngredientsFromNameList($nameList: [string!]) {
        queryIngredientsFromNameList(
            input: $nameList
        ) {
            ...fullIngredientQuery
        }
    }
`;

const queryFromIdList = gql`
    ${FULL_INGREDIENT_QUERY}
    query queryIngredientsFromNameList($idList: [ID!]) {
        queryIngredientsFromIdList(
            input: $idList
        ) {
            ...fullIngredientQuery
        }
    }
`;

export function queryAllIngredients() {
    const { data, loading, error, startPolling, stopPolling } = useQuery(
        queryAll
    );
    React.useEffect(() => {
        startPolling(1000);
        return () => stopPolling();
    }, [startPolling, stopPolling]);

    if (error) {
        throw new Error(`Failed to fetch all ingredients: ${error.message}`);
    }

    const ingredients = data?.queryAllIngredients ?? ['no ingredients found'];
    return {
        ingredients,
        loading,
    };
};

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