import React from 'react';
import styles from './Checkbox.module.scss';

interface ICheckbox extends React.InputHTMLAttributes<HTMLInputElement> {
	className?: string;
	label?: string;
	name: string;
	checked?: boolean;
}

export default function Checkbox({ 
	className, 
	label,
	name = '',
	checked = false,
	...rest
}: ICheckbox): JSX.Element {

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
