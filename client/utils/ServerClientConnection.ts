import * as RealmWeb from 'realm-web';
import {
    ApolloClient,
    HttpLink,
    NormalizedCacheObject,
    InMemoryCache,
    ApolloLink,
    concat
} from '@apollo/client';

export function CreateServerClientConnection (
    app: RealmWeb.App
): ApolloClient<NormalizedCacheObject> {
    if (!app) throw new Error('Cannot connect to server, App is null...');

    const httpLink = new HttpLink({
        uri: `https://realm.mongodb.com/api/client/v2.0/app/${app.id}/graphql`
    });

    const authMiddleware = new ApolloLink((operation, forward) => {
        operation.setContext(({ headers = {} }) => ({
            headers: {
                ...headers,
                Authorization: `Bearer ${app.currentUser.accessToken}`
            }
        }));

        app.currentUser.refreshCustomData();
        return forward(operation);
    });

    // 'Content-Type': 'application/json',
    //             'Access-Control-Allow-Origin:': '*',

    //     fetch: async (uri: string, options: any) => {
    //         if (!app.currentUser) {
    //             throw new Error('You must be logged in to use the API...');
    //         }

    //         const header = {
    //             'Authorization': `Bearer ${app.currentUser.accessToken}`
    //         };
    //         options.headers = header;

    //         await app.currentUser.refreshCustomData();
    //         return fetch(uri, options);
    //     }
    // });

    return new ApolloClient({
        uri: 'http://localhost:3000',
        cache: new InMemoryCache(),
        link: concat(authMiddleware, httpLink),
    });
}