import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import React, { PropsWithChildren } from 'react';
import * as Realm from 'realm-web';
import ApolloClientProvider from '../providers/ApolloClientProvider';
import { IngredientsProvider } from '../providers/IngredientProvider';
import { RealmProvider, useRealmContext } from '../providers/RealmProvider';
import { RecipesProvider } from '../providers/RecipesProvider';

/**
 * Ensure that the public user is logged in to start.
 * When unmounting this comopnent the user should be logged out.
 * @param props - children only
 * @returns - logout on unmount
 */
 const RequireLoggedInUser = (props: PropsWithChildren<any>) => {
  const app = useRealmContext();

  React.useEffect(() => {
    if (!app.app?.currentUser) {
      app.logIn(Realm.Credentials.apiKey(process.env.NEXT_PUBLIC_API_KEY_KEY!));
    }
  }, []);
  
  return props.children;
}

function MyApp({ Component, pageProps }: AppProps) {
  const app = useRealmContext()
  const id = process.env.NEXT_PUBLIC_APP_ID ?? '';

  return (
    <RealmProvider appId={id}>
      <RequireLoggedInUser>
        <ApolloClientProvider>
          <IngredientsProvider>
            <RecipesProvider>
              <button onClick={() => {
                if (app.app?.currentUser) {
                  app.logOut();
                }
                console.log('logged out');
              }}>Log Out</button>
              <Component {...pageProps} />
            </RecipesProvider>
          </IngredientsProvider>
        </ApolloClientProvider>
      </RequireLoggedInUser>
    </RealmProvider>
  )
}

export default MyApp
