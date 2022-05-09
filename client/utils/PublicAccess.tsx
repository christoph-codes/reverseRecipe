import React, { useEffect } from 'react';
import { UseRealmApp } from '../providers/RealmAppProvider';
import * as dotenv from 'dotenv';

dotenv.config({ path: '../.env' });

interface IChildren {
    children?: React.ReactNode;
}

export function PublicAccess({
    children,
}: IChildren): React.ReactNode {
    const context = UseRealmApp();

    useEffect(() => {
        if (!context && !context.currentUser) {
            context.logInApiKey(process.env.API_KEY);
        } 

        return context.logOut;
    }, [context]);

    return ( children );
}