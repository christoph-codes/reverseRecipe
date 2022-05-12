import React from 'react';
import { UseRealmApp } from '../providers/RealmAppProvider';

interface IChildren {
    children?: JSX.Element | JSX.Element[];
}

export function PublicAccess({
    children
}: IChildren): JSX.Element {
    const context = UseRealmApp();

    React.useEffect(() => {
        console.log(context);
        console.log(context.currentUser);
        console.log(context.app);
        if (context && !context.currentUser) {
            context.logInApiKey('UHuShx1eyDWLqABBh1MhgkFHgzVUsPdQYTXWpziRarnx4qypYNYqY48K0mbhfbF6');
        } 
        console.log(context.currentUser);

        return context.logOut;
    }, [context]);

    return (
        <>
            {children}
        </>
    );
}