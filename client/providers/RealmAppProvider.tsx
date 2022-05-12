import React from 'react';
import * as RealmWeb from 'realm-web';
import { IRealmApp } from '../utils/ServerClientConnection';

interface IRealmAppProvider {
    appId: string;
    children?: JSX.Element;
}

interface IRealmAppContext extends IRealmApp{
    app: RealmWeb.App | null;
    currentUser?: RealmWeb.User;
    setApp: (a: RealmWeb.App) => void;
    logIn: (c: RealmWeb.Credentials) => void;
    logInApiKey: (k: string) => void;
    logOut: () => void;
}

const defaultContext = {
    app: null,
    currentUser: null,
    setApp: () => {},
    logIn: () => {},
    logInApiKey: () => {},
    logOut: () => {},
}

const RealmAppContext = React.createContext<IRealmAppContext>(defaultContext);

export function RealmAppProvider({
    appId,
    children,
}: IRealmAppProvider): JSX.Element {
    const [app, setApp] = React.useState(new RealmWeb.App(appId));
    const [currentUser, setCurrentUser] = React.useState(app.currentUser);

    React.useEffect(() => {
        setApp(new RealmWeb.App(appId));
    }, [appId]);

    async function logIn(credentials: RealmWeb.Credentials) {
        // logout without changing state to avoid unnecessary reloads
        if (app.currentUser) {
           await app.currentUser.logOut();
        }

        await app.logIn(credentials);
        setCurrentUser(app.currentUser);
    }

    async function logInApiKey(apiKey: string) {
        const credentials = RealmWeb.Credentials.apiKey(apiKey);

        try {
            const publicUser = await app.logIn(credentials);
            setCurrentUser(app.currentUser);
            console.assert(publicUser.id === app.currentUser?.id);
            return publicUser;
        } catch (err) {
            console.error('Failed login for public API Key', err);
        }
    }

    async function logOut() {
        await app.currentUser?.logOut();
        setCurrentUser(app.currentUser);
    }

    return (
        <RealmAppContext.Provider value={{ app, currentUser, setApp, logIn, logInApiKey, logOut }}>
            {children}
        </RealmAppContext.Provider>
    );
}

export const UseRealmApp = () => {
    const appContext = React.useContext<IRealmAppContext>(RealmAppContext);

    if (!appContext) throw new Error('useRealmApp() must be used inside RealmAppProvider');
    return appContext;
};
