import { NextPage } from 'next';
import Button from '../../components/Button';
import LoginCard from '../../components/LoginCard';
import { useAuth } from '../../providers/AuthProvider';
import PageTemplate from '../../templates/PageTemplate';
import styles from './Login.module.scss';

const Login: NextPage = () => {
	const { login } = useAuth();

	return (
		<PageTemplate title="Login" className={styles.Login}>
			<LoginCard title="Login">
				<form className={styles.LoginForm} onSubmit={login}>
					<input type="email" />
					<input type="password" />
					<Button type="submit">Login</Button>
				</form>
			</LoginCard>
		</PageTemplate>
	);
};

export default Login;
