import { string } from 'prop-types';
import styles from './SubtractTag.module.scss';

const SubtractTag = ({ children, className, ...rest }) => {
	return (
		<button className={`${styles.SubtractTag} ${className}`} {...rest}>
			{children}
			<span className={styles.SubtractTagMinus} />
		</button>
	);
};

export default SubtractTag;

SubtractTag.propTypes = {
	children: string,
	className: string,
};

SubtractTag.defaultProps = {
	children: '',
	className: '',
};
