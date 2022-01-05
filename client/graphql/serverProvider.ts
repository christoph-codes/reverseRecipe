import React from 'react';
import { useServerApp } from './serverApp';
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client';

const createServerClient = (app: any) => {
  const link = new HttpLink({
    uri: `https://realm.mongodb.com/api/client/v2.0/app/${app.id}/graphql`,
    fetch: async (uri: any, options: any) => {
      if (!app.currentUser) {
        throw new Error(`No user logged in...`);
      }
      await app.currentUser.refreshCustomData();
      options.headers.Authorization = `Bearer ${app.currentUser.accessToken}`;
      return fetch(uri, options);
    },
  });

  const cache = new InMemoryCache();

  return new ApolloClient({ link, cache });
};

export default function serverProvider({children}) {
    const app = useServerApp();
    const [client, setClient] = React.useState(createServerClient(app));
    React.useEffect(() => {
        setClient(createServerClient(app));
    }, [app]);
    return (
        <ApolloProvider client={client}>
            {children}
        </ApolloClient>
    );
}