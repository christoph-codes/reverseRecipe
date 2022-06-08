import React from 'react';
import * as Realm from 'realm-web';

interface IRealmProvider {
    appId: string;
}

interface IRealmContext {
    app: Realm.App | null;
    logIn: (c: Realm.Credentials) => Promise<void> | null;
    logOut: () => Promise<void> | null;
}

const RealmAppContext = React.createContext<IRealmContext>({
    app: null,
    logIn: () => null,
    logOut: () => null,
});

export const useRealmContext = () => {
    const app = React.useContext(RealmAppContext);
    if (!app) {
        throw new Error('useRealmApp() can only be used inside RealmAppProvider...');
    }
    return app
}

export const RealmProvider = (props: React.PropsWithChildren<IRealmProvider>) => {
    const [app, setApp] = React.useState(new Realm.App(props.appId));

    React.useEffect(() => {
        setApp(new Realm.App(props.appId));
    }, [props.appId]);

    // Public User will be automatically logged in via Client
    // You must log out public user before attempting to log in to email/pwd account
    async function logIn(credentials: Realm.Credentials) {
        await app.logIn(credentials);
    }

    async function logOut() {
        await app.currentUser?.logOut();
    }

    return (
        <RealmAppContext.Provider value={{ app, logIn, logOut }}>
            {props.children}
        </RealmAppContext.Provider>
    );
}


