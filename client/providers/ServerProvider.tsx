import React from 'react';
import { ServerClientConnection } from '../utils/ServerClientConnection';
import { UseRealmApp } from './RealmAppProvider';
import { ApolloProvider } from '@apollo/client';

interface IChildren {
    children?: React.ReactNode;
}

export function ServerProvider({
    children
}: IChildren): JSX.Element {
    const appContext = UseRealmApp();
    const [client, setClient] = React.useState(ServerClientConnection(appContext.app));

    React.useCallback(() => {
        if (!client) {
            setClient(ServerClientConnection(appContext.app));
        }
    }, [client, appContext]);

    return (
        <ApolloProvider client={ client }>
            {children}
        </ApolloProvider>
    );
};