import type { NextPage } from 'next'
import React, { PropsWithChildren } from 'react';
import * as Realm from 'realm-web';
import ApolloClientProvider from '../providers/ApolloClientProvider';
import { IngredientsProvider } from '../providers/IngredientProvider';
import { RealmProvider, useRealmContext } from '../providers/RealmProvider';
import { RecipesProvider } from '../providers/RecipesProvider';
import Home from './Home';

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

    return () => {
      if (app.app?.currentUser) {
        app.logOut();
      }
      console.log('logged out');
    }
  }, []);
  
  return props.children;
}

const Main: NextPage = () => {
  const id = process.env.NEXT_PUBLIC_APP_ID ?? '';

  return (
    <RealmProvider appId={id}>
      <RequireLoggedInUser>
        <ApolloClientProvider>
          <IngredientsProvider>
            <RecipesProvider>
              <Home />
            </RecipesProvider>
          </IngredientsProvider>
        </ApolloClientProvider>
      </RequireLoggedInUser>
    </RealmProvider>
  );
}

export default Main;
