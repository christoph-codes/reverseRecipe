import { string, func, bool } from 'prop-types';
import styles from './Checkbox.module.scss';

const Checkbox = ({ className, label, name, value, setValue, ...rest }) => {
	return (
		<label
			htmlFor={name}
			onClick={() => setValue(!value)}
			className={styles.Checkbox}
		>
			<input
				className={styles.CheckboxBox}
				name={name}
				checked={value}
				type="checkbox"
				{...rest}
			/>
			<span className={styles.CheckboxLabel}>{label}</span>
		</label>
	);
};

export default Checkbox;

Checkbox.propTypes = {
	className: string,
	label: string,
	name: string.isRequired,
	value: bool.isRequired,
	setValue: func.isRequired,
};

Checkbox.defaultProps = {
	className: '',
	label: '',
};
