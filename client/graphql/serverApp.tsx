import React from 'react';
import * as Realm from 'realm-web';

// create context to pass global props
const ReverseRecipeContext = React.createContext(null);

// function to set and protect the context from being used elsewhere
export const useAppContext = () => {
    const app = React.useContext(ReverseRecipeContext);
    if (!app) {
        throw new Error('useAppContext() can only be called inside <ServerProvider />');
    }
    return app;
};

export const AppProvider = (appId: string, children: any) => {
    // wrap realm app in react state.
    const [app, setApp] = React.useState(new Realm.App(appId));
    React.useEffect(() => {
        setApp(new Realm.App(appId));
    }, [appId]);

    // wrap current user in react state
    const [currentUser, setCurrentUser] = React.useState(app.currentUser);

    // use realm web sdk to login user
    async function logIn(credentials: any) {
        await app.logIn(credentials);
        setCurrentUser(app.currentUser);
    }

    async function logOut() {
        await app.currentUser?.logOut();
        setCurrentUser(app.currentUser);
    }

    // wrap the realm client context to the react context
    const wrapped: any = { ...app, currentUser, logIn, logOut };
    return (
        <ReverseRecipeContext.Provider value={wrapped}>
            {children}
        </ReverseRecipeContext.Provider>
    );
};