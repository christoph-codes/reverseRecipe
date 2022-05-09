import React from 'react';
import styles from './Checkbox.module.scss';

interface ICheckbox {
	className?: string;
	label?: string;
	name: string;
	value: boolean;
	setValue: (b: boolean) => void;
	rest?: React.HTMLProps<HTMLInputElement>
}

export default function Checkbox({ 
	className, 
	label,
	name = '', 
	value = false, 
	setValue = () => {}, 
	...rest
}: ICheckbox): React.ReactNode {
	return (
		<label
			htmlFor={name}
			onClick={() => setValue(!value)}
			className={styles.Checkbox}
		>
			<input
				className={styles.CheckboxBox}
				name={name}
				defaultChecked={value}
				type="checkbox"
				{...rest}
			/>
			<span className={styles.CheckboxLabel}>{label}</span>
		</label>
	);
}
