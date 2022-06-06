import React from 'react';
import styles from './Checkbox.module.scss';

interface ICheckbox extends React.InputHTMLAttributes<HTMLInputElement> {
	className?: string;
	label?: string;
	name: string;
	checked?: boolean;
}

const Checkbox = ({ 
	className, 
	label,
	name = '',
	checked = false,
	...rest
}: ICheckbox) => {

	function changeHandler() {
		checked = !checked ?? true;
	}

	return (
		<label
			htmlFor={name}
			onClick={changeHandler}
			className={styles.Checkbox}
		>
			<input
				className={styles.CheckboxBox}
				name={name}
				defaultChecked={checked}
				type="checkbox"
				{...rest}
			/>
			<span className={styles.CheckboxLabel}>{label}</span>
		</label>
	);
}

export default Checkbox;
