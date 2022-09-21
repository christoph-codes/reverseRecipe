import { NextPage } from 'next';
import Button from '../../components/Button';
import { useAuth } from '../../providers/AuthProvider';
import PageTemplate from '../../templates/PageTemplate';
import styles from './Login.module.scss';

const Login: NextPage = () => {
	const { login } = useAuth();

	return (
		<PageTemplate title="Login" className={styles.Login}>
			<form className={styles.LoginForm} onSubmit={login}>
				<h2>Login</h2>
				<input type="email" />
				<input type="password" />
				<Button type="submit">Login</Button>
			</form>
		</PageTemplate>
	);
};

export default Login;
