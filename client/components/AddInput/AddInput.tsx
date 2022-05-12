import React from 'react';
import styles from './AddInput.module.scss';

interface IAddInput {
	name: string;
	className?: string;
	value: string;
	setValue: (s: string) => void;
	addCallback: (a?: any) => void;
}

export default function AddInput({ 
	name = '', 
	className, 
	value = '', 
	setValue = () => {}, 
	addCallback = () => {}
}: IAddInput): JSX.Element {
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
				onChange={(e) => setValue(e.target.value)}
				onKeyPress={(e) => e.key === 'Enter' && callback(e)}
			/>
			<button
				className={styles.AddInputButton}
				onClick={(e) => callback(e)}
			/>
		</label>
	);
}
