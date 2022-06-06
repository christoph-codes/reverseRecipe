import * as RealmWeb from 'realm-web';
import { NextPage } from 'next';
import { useRealmContext } from '../../providers/RealmProvider';
import LoginCard from '../../components/LoginCard';
import styles from './Login.module.scss';

const Login: NextPage = () => {
    const { logIn } = useRealmContext();
	const API_KEY = process.env.NEXT_PUBLIC_API_KEY_KEY;

	return (
		<div className={styles.Login}>
			<LoginCard 
			title='LoGiN'   
			loginButton={{
				href: '#',
				onClick: () => {
					logIn(RealmWeb.Credentials.apiKey(API_KEY!));
				}
			}}/>
		</div>
	);
}

export default Login;