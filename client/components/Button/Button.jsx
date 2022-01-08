import { string, bool, oneOf } from 'prop-types';
import styles from './Button.module.scss';

const Button = ({ variant, children, ...rest }) => {
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
	return (
		<button className={`${styles.Button} ${getVariant()}`} {...rest}>
			{children}
		</button>
	);
};

export default Button;

Button.propTypes = {
	variant: oneOf(['primary', 'secondary', 'tertiary']),
	children: string,
};

Button.defaultProps = {
	variant: 'primary',
	children: '',
};
