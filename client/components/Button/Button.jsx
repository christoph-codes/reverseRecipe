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
		fetch('https://us-west-2.aws.data.mongodb-api.com/app/reverserecipeapplication-aogyb/endpoint/getIngredients')
		.then(res => console.log(res))
		.catch(e => console.log(e));
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
