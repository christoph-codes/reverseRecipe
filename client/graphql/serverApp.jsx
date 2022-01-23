import { useContext, useState, useCallback, createContext } from 'react';
import * as Realm from 'realm-web';

// create context to pass global props
const ReverseRecipeContext = createContext();

// function to set and protect the context from being used elsewhere
export const useAppContext = () => {
    const app = useContext(ReverseRecipeContext);
    if (!app) {
        throw new Error('useAppContext() can only be called inside <ServerProvider />');
    }
    return app;
};

export const AppProvider = ({appID, children}) => {
    // wrap realm app in react state.
    const [app, setApp] = useState(new Realm.App(appID));

    // create Realm.App if appID state change and app is null
    useCallback(() => {
        if (!app) {
            setApp(new Realm.App(appID));
        }
    }, [appID]);

    // wrap current user in react state
    const [currentUser, setCurrentUser] = useState(app.currentUser);

    async function logIn(credentials) {
        try {
            if (app.currentUser) {
                await app.currentUser.logOut();
            }

            await app.logIn(credentials);
            setCurrentUser(app.currentUser);
        } catch {
            throw new Error("Unable to login user.");
        }
    }

    async function logOut() {
        try {
            if (app.currentUser) {
                await app.currentUser.logOut();
                // should be null
                setCurrentUser(app.currentUser);
            }
        } catch {
            throw new Error("Unable to logout user.")
        }
    }

    // wrap the realm client context to the react context
    const wrapped = { ...app, currentUser, logInAnon, logOut };
    return (
        <ReverseRecipeContext.Provider value={wrapped}>
            {children}
        </ReverseRecipeContext.Provider>
    );
};