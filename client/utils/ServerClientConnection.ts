import * as dotenv from 'dotenv';
import * as RealmWeb from 'realm-web';
import {
    ApolloClient,
    HttpLink,
    NormalizedCacheObject,
    InMemoryCache,
} from '@apollo/client';

dotenv.config({ path: '../../.env' });

export interface IRealmApp {
    app?: RealmWeb.App;
}

export function ServerClientConnection ({ 
    app
}: IRealmApp): ApolloClient<NormalizedCacheObject> {
    if(!app) throw new Error('Cannot connect to server, App is null...');

    const link = new HttpLink({
        uri: process.env.SERVER_CLIENT_CONNECTION,
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