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

    // use realm web sdk to login user
    async function logInAnon() {
        if (app.currentUser) {
            logOut();
        } else {
            const creds = Realm.Credentials.anonymous();
            try {
                await app.logIn(creds);
                console.log("TEST PROVIDER LOGIN", app.currentUser);
                setCurrentUser(app.currentUser);
            } catch (e) {
                throw new Error("Unable to log in anon user.");
            }
        }
    }

    async function logOut() {
        if (app.currentUser) {
            try {
                console.log("TEST PROVIDER LOGOUT", app.currentUser);
                await app.currentUser.logOut();
                console.log("TEST USER LOGGED OUT");
                setCurrentUser(app.currentUser);
            } catch (e) {
                throw new error("Unable to log out.");
            }
        } else {
            console.log("Logged in user does not exist.");
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