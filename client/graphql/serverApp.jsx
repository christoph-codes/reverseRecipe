import React from 'react';
import * as Realm from 'realm-web';

// create context to pass global props
const ReverseRecipeContext = React.createContext();

// function to set and protect the context from being used elsewhere
export const useAppContext = () => {
    const app = React.useContext(ReverseRecipeContext);
    if (!app) {
        throw new Error('useAppContext() can only be called inside <ServerProvider />');
    }
    return app;
};

export const AppProvider = ({appID, children}) => {
    // wrap realm app in react state.
    const [app, setApp] = React.useState(new Realm.App(appID));
    React.useEffect(() => {
        setApp(new Realm.App(appID));
    }, [appID]);

    // wrap current user in react state
    const [currentUser, setCurrentUser] = React.useState(app.currentUser);

    // use realm web sdk to login user
    async function logInAnon() {
        const creds = Realm.Credentials.anonymous();

        console.log(app.currentUser);
        if (!app.currentUser) {
            try {
                await app.logIn(creds);
                setCurrentUser(app.currentUser);
            } catch (e) {
                throw new Error("Unable to log in anon.");
            }
        } else {
            console.log("A user is already logged in: " + app.currentUser);
        }
    }

    async function logOut() {
        if (app.currentUser) {
            try {
                await app.currentUser.logOut();
                setCurrentUser(app.currentUser);
            } catch (e) {
                throw new error("Unable to log out.");
            }
        } else {
            console.log("There is no user logged in.");
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