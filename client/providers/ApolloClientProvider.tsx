import { ApolloClient, HttpLink, InMemoryCache, ApolloProvider } from '@apollo/client';
import React from 'react';
import { useRealmContext } from './RealmProvider';

interface ICreateApolloClient {
    app: Realm.App | null;
}

interface IApolloProvider {
    children: JSX.Element | null;
}

const createApolloClient = (props: ICreateApolloClient) => {
    const link = new HttpLink({
        uri: `https://us-east-1.aws.realm.mongodb.com/api/client/v2.0/app/${props.app.id}/graphql`,
        fetch: async (uri, options: any) => {
            if (!props.app!.currentUser) {
                throw new Error('must be logged in');
            }

            await props.app!.currentUser.refreshCustomData();
            options.headers.Authorization = `Bearer ${props.app!.currentUser.accessToken}`;
            return fetch(uri, options);
        }
    });

    const cache = new InMemoryCache();
    return new ApolloClient({
        link,
        cache
    });
}

const ApolloClientProvider = (props: IApolloProvider) => {
    const realmApp = useRealmContext();
    const [client, setClient] = React.useState(createApolloClient(realmApp));
    React.useEffect(() => {
        setClient(createApolloClient(realmApp));
    }, [realmApp]);
    return (
        <ApolloProvider client={client}>
            {props.children}
        </ApolloProvider>
    )
}

export default ApolloClientProvider;