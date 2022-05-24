import React from 'react';
import * as RealmWeb from 'realm-web';

interface IRealmAppProvider {
    appId: string;
    children?: React.ReactNode;
}

interface IRealmAppContext {
    app?: RealmWeb.App;
    currentUser?: RealmWeb.User;
    setApp?: (a: RealmWeb.App) => void;
    logIn?: (c: RealmWeb.Credentials) => void;
    logInApiKey?: (c: RealmWeb.Credentials) => void;
    logOut?: () => void;
}

const RealmAppContext = React.createContext<IRealmAppContext | null>(null);

export function RealmAppProvider({
    appId,
    children,
}: IRealmAppProvider): JSX.Element {
    const [app, setApp] = React.useState(new RealmWeb.App(appId));
    const [currentUser, setCurrentUser] = React.useState(app.currentUser);

    React.useEffect(() => {
        setApp(new RealmWeb.App(appId));
    }, []);

    // TODO: create credentials with RealmWeb.Credentials.EmailPassword()
    async function logIn(credentials: RealmWeb.Credentials) {
        if (credentials.providerType !== "local-userpass") {
            throw new Error('Must have email/password credentials to log in with this method...');
        }
        if (app.currentUser) {
            throw new Error('You must log out before you can log in...');
        }

        try {
            const user = await app.logIn(credentials);

            console.assert(user.id === app.currentUser.id);
            setCurrentUser(app.currentUser);
        } catch (err) {
            console.error('Failed to log in', err);
        }
    }

    async function logInApiKey(credentials: RealmWeb.Credentials) {
        if (credentials.providerType !== "api-key") {
            throw new Error('Must have apiKey credentials to log in with this method...');
        }
        if (app.currentUser) {
            throw new Error('You must log out before you can log in...');
        }

        try {
            const user = await app.logIn(credentials);

            console.assert(user.id === app.currentUser.id);
            setCurrentUser(app.currentUser);
        } catch (err) {
            console.error('Failed to log in', err);
        }
    }

    async function logOut() {
        if (app.currentUser) {
            await app.currentUser.logOut();
            setCurrentUser(app.currentUser);
        }
    }

    return (
        <RealmAppContext.Provider value={{ app, currentUser, setApp, logIn, logInApiKey, logOut }}>
            {children}
        </RealmAppContext.Provider>
    );
}

export const UseRealmApp = () => {
    const appContext = React.useContext(RealmAppContext);
    if (!appContext) {
        throw new Error('useRealmApp() must be used inside RealmAppProvider');
    }

    return appContext;
};
