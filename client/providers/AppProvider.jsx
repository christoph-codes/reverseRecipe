import { createContext, useState, useEffect, useContext } from 'react';
import * as Realm from 'realm-web';

export const ReverseRecipeContext = createContext();

export const AppProvider = ({ children }) => {
	const id = 'reverserecipeapplication-aogyb';
	const [app, setApp] = useState(new Realm.App(id));
	useEffect(() => {
		setApp(new Realm.App(id));
	}, [id]);

	// wrap current user in react state
	const [currentUser, setCurrentUser] = useState(app.currentUser);

	// use realm web sdk to login user
	async function logIn(credentials) {
		await app.logIn(credentials);
		setCurrentUser(app.currentUser);
	}

	async function logOut() {
		await app.currentUser?.logOut();
		setCurrentUser(app.currentUser);
	}

	// wrap the realm client context to the react context
	const wrapped = { ...app, id, currentUser, logIn, logOut };
	return (
		<ReverseRecipeContext.Provider value={wrapped}>
			{children}
		</ReverseRecipeContext.Provider>
	);
};

export const useAppContext = () => {
	const app = useContext(ReverseRecipeContext);
	if (!app) {
		throw new Error(
			'useAppContext() can only be called inside <ServerProvider />'
		);
	}
	return app;
};
