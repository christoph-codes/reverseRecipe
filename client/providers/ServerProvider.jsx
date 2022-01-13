import React, { useState, useEffect } from 'react';
import { useAppContext } from './AppProvider';
import {
	ApolloClient,
	ApolloProvider,
	HttpLink,
	InMemoryCache,
} from '@apollo/client';

// Create a connection to our mongodb realm backend
const serverClientConnection = (app) => {
	const link = new HttpLink({
		uri: `https://realm.mongodb.com/api/client/v2.0/app/${app.id}/graphql`,
		// Custom fetch function that intercepts all requests.
		// Refreshes the current users data and add auth token to header.
		// fetch: async (uri, options) => {
		// 	// only add header when authentication is required.
		// 	const bodyObj = JSON.parse(options.body);
		// 	if (!JSON.parse(options.body).match(/ingredient+s|recipe+s/gi)) {
		// 		if (!app.currentUser) {
		// 			throw new Error(
		// 				`Must be logged in to use this functionality...`
		// 			);
		// 		}
		// 		// grab the latest version of the users custom data.
		// 		// so every query we refresh the users custom data.
		// 		await app.currentUser.refreshCustomData();

		// 		// add auth header to fetch
		// 		options.headers.Authorization = `Bearer ${app.currentUser.accessToken}`;
		// 	}
		// 	return fetch(uri, options);
		// },
	});

	// query results are stored in this cache after they are called
	const cache = new InMemoryCache();

	return new ApolloClient({ link, cache });
};

// similar to react context. wraps application and provides client as
// context to the app. context includes the cache which holds results of
// our querys, etc...
export default function ServerProvider({ children }) {
	const app = useAppContext();
	const [client, setClient] = useState(serverClientConnection(app));
	useEffect(() => {
		setClient(serverClientConnection(app));
	}, [app]);
	console.log('app find', app);
	return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
