import * as RealmWeb from 'realm-web';
import {
    ApolloClient,
    HttpLink,
    NormalizedCacheObject,
    InMemoryCache,
} from '@apollo/client';

export function ServerClientConnection (app: RealmWeb.App): ApolloClient<NormalizedCacheObject> {
    if(!app) throw new Error('Cannot connect to server, App is null...');

    const link = new HttpLink({
        uri: 'https://us-west-2.aws.realm.mongodb.com/api/client/v2.0/app/reverserecipe-production-lkjvj/graphql',
        fetch: async (uri: string, options: any) => {
            if (!app.currentUser) {
                throw new Error('Must be logged in to use this functionality...');
            }
            // await app.currentUser.refreshCustomData();
            options.headers.Authorization = `Bearer ${app.currentUser}`;
            return fetch(uri, options);
        },
    });

    const cache: InMemoryCache = new InMemoryCache();
    return new ApolloClient({ link, cache });
}