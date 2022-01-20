import { string, bool, oneOf } from 'prop-types';
import { useAppContext } from '../../graphql/serverApp';
import styles from './Button.module.scss';

const Button = ({ variant, children, className, ...rest }) => {
	const getVariant = () => {
		switch (variant) {
			case 'primary':
				return styles.ButtonPrimary;
			case 'secondary':
				return styles.ButtonSecondary;
			case 'tertiary':
				return styles.ButtonTertiary;
			default:
				throw new Error(`Invalid variant: ${variant}`);
		}
	};

	const app = useAppContext();

	const test = () => {
		if (app.currentUser) {
			console.log("TEST LOGOUT");
			try {
				app.logOut();
				console.log("TEST LOGGED OUT USER", app.currentUser);
			} catch {
				console.log("TEST LOGOUT ERROR", e);
			}
		} else {
			console.log("TEST LOGIN");
			try {
				app.logInAnon();
			} catch (e) {
				console.log("TEST LOGIN ERROR", e);
			}
		}
	}
	return (
		<button
			className={`${styles.Button} ${getVariant()} ${className}`}
			{...rest}
			onClick={test}
		>
			{children}
		</button>
	);
};

export default Button;

Button.propTypes = {
	variant: oneOf(['primary', 'secondary', 'tertiary']),
	children: string,
	className: string,
};

Button.defaultProps = {
	variant: 'primary',
	children: '',
	className: '',
};
