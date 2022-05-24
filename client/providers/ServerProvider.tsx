import React from 'react';
import { CreateServerClientConnection } from '../utils/ServerClientConnection';
import { UseRealmApp } from './RealmAppProvider';
import { ApolloClient, ApolloProvider, NormalizedCacheObject } from '@apollo/client';

interface IChildren {
    children?: React.ReactNode;
}

export function ServerProvider({
    children
}: IChildren): JSX.Element {
    const appContext = UseRealmApp();
    const [client, setClient] = React.useState<ApolloClient<NormalizedCacheObject>>(CreateServerClientConnection(appContext.app));

    React.useEffect(() => {
        if (!client) {
            setClient(CreateServerClientConnection(appContext.app));
        }
    }, []);

    return (
        <ApolloProvider client={ client }>
            {children}
        </ApolloProvider>
    );
};