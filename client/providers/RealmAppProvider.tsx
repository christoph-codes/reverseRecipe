import React from 'react';
import * as RealmWeb from 'realm-web';
import { IRealmApp } from '../utils/ServerClientConnection';

interface IChildren {
    children?: React.ReactNode;
}

interface IRealmAppProvider extends IChildren {
    appId: string;
}

interface IRealmAppContext extends IRealmApp{
    currentUser?: RealmWeb.User;
    setApp: (a: RealmWeb.App) => void;
    logIn: (c: RealmWeb.Credentials) => void;
    logInApiKey: (k: string) => void;
    logOut: () => void;
}

const RealmAppContext = React.createContext<IRealmAppContext>({
    app: null,
    currentUser: null,
    setApp: () => {},
    logIn: () => {},
    logInApiKey: () => {},
    logOut: () => {},
});

export function UseRealmApp(): IRealmAppContext {
    const appContext = React.useContext(RealmAppContext);

    if (!appContext) throw new Error('useRealmApp() must be used inside RealmAppProvider');
    return appContext;
}

export function RealmAppProvider({
    appId,
    children,
}: IRealmAppProvider): JSX.Element {
    const [app, setApp] = React.useState(new RealmWeb.App(appId));
    const [currentUser, setCurrentUser] = React.useState(app.currentUser);

    React.useEffect(() => {
        setApp(new RealmWeb.App(appId));

        return app
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
