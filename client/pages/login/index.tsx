import * as RealmWeb from 'realm-web';
import { NextPage } from 'next';
import LoginCard from '../../components/LoginCard';
import styles from './Login.module.scss';

const Login: NextPage = () => {
	return (
		<div className={styles.Login}>
			<LoginCard
				title='LoGiN'
				loginButton={{
					href: '#',
					onClick: () => { console.log('console log') }
				}} />
		</div>
	);
}

export default Login;