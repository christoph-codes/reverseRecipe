import React from 'react';
import { useServerApp } from './serverApp';
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';

const createServerClient = (app: any) => {
  const link = new HttpLink({
    uri: `https://realm.mongodb.com/api/client/v2.0/app/${app.id}/graphql`,
    fetch: async (uri: any, options: any) => {
      // We want guests to be able to use certain parts of the app so this might need to change.
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

export default function serverProvider({children}: {children: any}) {
  const app = useServerApp();
  const [client, setClient] = React.useState(createServerClient(app));
  React.useEffect(() => {
      setClient(createServerClient(app));
  }, [app]);
  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  );
}