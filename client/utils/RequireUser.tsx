import React from 'react';
import { UseRealmApp } from '../providers/RealmAppProvider';

interface IChildren {
    children?: React.ReactNode;
}

export function RequireLoggedInUser({
    children,
}: IChildren): React.ReactNode {
    const context = UseRealmApp();

    if (!context.currentUser || context.currentUser.providerType === 'api-key') {
        // TODO redirect to login page or something
        // probs need to test the providerType call too...
    } else {
        return ( children );
    }
}