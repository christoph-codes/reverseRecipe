import React from 'react';
import { RealmAppProvider } from '../providers/RealmAppProvider';
import { ServerProvider } from '../providers/ServerProvider';
import RequirePublicAccess, { APP_ID } from '../utils/RequirePublicAccess';

export default function App(): JSX.Element {
  return (
    <RealmAppProvider appId={APP_ID}>
			<ServerProvider>
        <RequirePublicAccess />
      </ServerProvider>
    </RealmAppProvider>
  );
}