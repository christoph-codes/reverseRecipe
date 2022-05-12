import React from 'react';
import styles from './Tag.module.scss';

interface ITag extends React.AllHTMLAttributes<HTMLDivElement> {
	className?: string;
	children?: JSX.Element | string;
	variant?: 'primary' | 'secondary' | 'blue' | 'green' | 'red' | 'yellow';
}

export default function Tag({ 
	children, 
	className, 
	variant = 'primary', 
	...rest 
}: ITag): JSX.Element {
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
}
