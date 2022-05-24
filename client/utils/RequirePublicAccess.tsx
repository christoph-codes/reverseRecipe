import React, { useEffect } from 'react';
import { UseRealmApp } from '../providers/RealmAppProvider';
import * as RealmWeb from 'realm-web';
import Home from '../pages/Home';

export const APP_ID = 'reverserecipe-production-lkjvj';

export default function RequirePublicAccess(): JSX.Element {
    const app = UseRealmApp();

    useEffect(() => {
        if (!app.currentUser) {
            app.logInApiKey(RealmWeb.Credentials.apiKey('UHuShx1eyDWLqABBh1MhgkFHgzVUsPdQYTXWpziRarnx4qypYNYqY48K0mbhfbF6'));
        }
    }, [])

    if (app.currentUser) {
        return (
            <Home />
        );
    } else {
        return (
            <h1>There is an issue accessing the application...</h1>
        );
    }
}