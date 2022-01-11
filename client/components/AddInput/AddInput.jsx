import { string, func } from 'prop-types';
import styles from './AddInput.module.scss';

const AddInput = ({ name, className, value, setValue, addCallback }) => {
	const callback = (e) => {
		e.preventDefault();
		if (value.length > 0) {
			addCallback();
			setValue('');
		}
	};
	return (
		<label htmlFor={name} className={`${styles.AddInput} ${className}`}>
			<input
				className={styles.AddInputTextField}
				value={value}
				name={name}
				onChange={(e) => setValue(e.target.value.trim())}
				onKeyPress={(e) => e.key === 'Enter' && callback(e)}
			/>
			<button
				className={styles.AddInputButton}
				onClick={(e) => callback(e)}
			/>
		</label>
	);
};

export default AddInput;

AddInput.propTypes = {
	name: string.isRequired,
	className: string,
	value: string.isRequired,
	setValue: func.isRequired,
	addCallback: func.isRequired,
};

AddInput.defaultProps = {
	className: '',
};
