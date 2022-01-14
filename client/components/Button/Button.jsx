import { string, bool, oneOf } from 'prop-types';
import styles from './Button.module.scss';
import { queryAllIngredients } from '../../graphql/ingredientQuery';

const Button = ({ variant, children, className, ...rest }) => {
    const test = queryAllIngredients();
    console.log(test);

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
		<button
			className={`${styles.Button} ${getVariant()} ${className}`}
			{...rest}
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
