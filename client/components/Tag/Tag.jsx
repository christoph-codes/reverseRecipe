import { string } from 'prop-types';
import styles from './Tag.module.scss';

const Tag = ({ children, className, variant, ...rest }) => {
	const getVariant = () => {
		switch (variant) {
			case 'primary':
				return styles.primary;
			case 'secondary':
				return styles.secondary;
			case 'blue':
				return styles.blue;
			case 'green':
				return styles.green;
			case 'red':
				return styles.red;
			case 'yellow':
				return styles.yellow;
			default:
				return '';
		}
	};
	return (
		<div className={`${styles.Tag} ${getVariant()} ${className}`} {...rest}>
			{children}
		</div>
	);
};

export default Tag;

Tag.propTypes = {
	children: string,
	className: string,
};

Tag.defaultProps = {
	children: '',
	className: '',
};
