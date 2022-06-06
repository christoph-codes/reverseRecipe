import type { NextPage } from 'next'
import React, { PropsWithChildren, useEffect } from 'react';
import ApolloClientProvider from '../providers/ApolloClientProvider';
import { RealmProvider, useRealmContext } from '../providers/RealmProvider';
import Home from './Home';
import Login from './login';

const RequireLoggedInUser = (props: PropsWithChildren<any>) => {
  const app = useRealmContext();
  const [isCurrentUser, setIsCurrentUser] = React.useState<boolean>(false)
  
  useEffect(() => {
    setIsCurrentUser(app.app?.currentUser ? true : false);
  }, [app]);

  return isCurrentUser ? props.children : <Login />;
}

const Main: NextPage = () => {
  const id = process.env.NEXT_PUBLIC_APP_ID ?? '';

  // return (
  //   <RealmAppProvider appId={id}>
  //     <RequireLoggedInUser>
  //       <RealmApolloProvider>
  //         <Home />
  //       </RealmApolloProvider>
  //     </RequireLoggedInUser>
  //   </RealmAppProvider>
  // );

  return (
    <RealmProvider appId={id}>
      <RequireLoggedInUser>
        <ApolloClientProvider>
          <Home />
        </ApolloClientProvider>
      </RequireLoggedInUser>
    </RealmProvider>
  );
}

export default Main;
