import React from 'react';
import styles from './SubtractTag.module.scss';

interface ISubtractTag extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	children?: JSX.Element | string;
}

// how to define ...rest

export default function SubtractTag({ 
	children, 
	className, 
	...rest
}: ISubtractTag): JSX.Element {
	return (
		<button className={`${styles.SubtractTag} ${className}`} {...rest}>
			{children}
			<span className={styles.SubtractTagMinus} />
		</button>
	);
}
