import React from 'react';
import * as Realm from 'realm-web';

// create context
// this allows us to pass shit throughout all components without
// passing to each child
const AppContext: any = React.createContext(null);

interface providerProps {
    appId: any,
    children: any
};

// function to set and protect the context from being used elsewhere
export const useServerApp = () => {
    const app: any = React.useContext(AppContext);

    if (!app) {
        throw new Error('useApp() can only be called inside <RealmAppProvider />');
    }

    return app;
};

export const AppProvider = (args: providerProps) => {
    // realm-web sdk
    // registers authentication providers, access remote mongodb data, etc...
    const [app, setApp] = React.useState(new Realm.App(args.appId));

    // on load set the state 
    React.useEffect(() => {
        setApp(new Realm.App(args.appId));
    }, [args.appId]);

    // Wrap the Realm.App object's user state with React state
    const [currentUser, setCurrentUser] = React.useState(app.currentUser);

    // login function usable within this context
    // logs in the user with the auth-provider 
    // sets the current user state
    // need to adjust for guest
    async function logIn(credentials: any) {
        await app.logIn(credentials);
        setCurrentUser(app.currentUser);
    }

    // similar to above but logout
    async function logOut() {
        await app.currentUser?.logOut();
        setCurrentUser(app.currentUser);
    }

    // wrap all the functions and everything into an object
    const wrapped: any = { ...app, currentUser, logIn, logOut };

    // return a Provider withe the context that wraps all the children
    return (
        <AppContext.Provider value={wrapped}>
        {args.children}
        </AppContext.Provider>
    );
};