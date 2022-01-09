import { string } from 'prop-types';
import styles from './Tag.module.scss';

const Tag = ({ children, className, ...rest }) => {
	return (
		<div className={`${styles.Tag} ${className}`} {...rest}>
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
