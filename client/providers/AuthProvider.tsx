import {
	createContext,
	Dispatch,
	SetStateAction,
	useContext,
	useEffect,
	useState,
	ReactNode,
} from 'react';

export interface IUser {
	/** A string of the users email */
	email: string;
	/** A string of the users username that they saved */
	username: string;
	/** A string of the users first name */
	fname: string;
	/** A string of the users last name */
	lname: string;
	/** An array of string id's of the recipes that a user saves */
	recipes: string[];
}

export interface IAuthContext {
	/** A user object declared in IUser */
	user?: IUser | null;
	/** A function that calls firebase to set the logged in user. Will take email and password. */
	login?: () => void;
	/** A function that calls firebase to logout any user logged in. */
	logout?: () => void;
	/** A set state function that sets the apps user. */
	setUser?: Dispatch<SetStateAction<IUser>> | (() => string);
}

export interface IAuthProviderProps {
	children: ReactNode;
}

const AuthContext = createContext<IAuthContext>({
	user: null,
	login: () => {},
	logout: () => {},
	setUser: () => {},
});

const defaultUser: IUser = {
	email: '',
	username: '',
	fname: '',
	lname: '',
	recipes: [''],
};

const AuthProvider = ({ children }: IAuthProviderProps) => {
	/** Before setting state check session storage for a saved user object and set it if so. */
	// TODO: Set the correct type for useState when we figure it out
	const [user, setUser] = useState<any>(null);

	useEffect(() => {
		const localUser = sessionStorage.getItem('rrUser');
		setUser((localUser && JSON.parse(localUser)) || defaultUser);
	}, []);

	/** Anytime the user object changes set session storage */
	useEffect(() => {
		sessionStorage.setItem('rrUser', JSON.stringify(user));
	}, [user]);

	console.log('user', user);

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;

/** Authentication hook for consuming the authentication context */
export const useAuth = () => useContext(AuthContext);
