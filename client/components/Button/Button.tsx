import React from 'react';
import styles from './Button.module.scss';

interface IChildren {
	children?: React.ReactNode;
}

interface IButton extends IChildren {
	variant: 'primary' | 'secondary' | 'tertiary';
	className?: string;
	rest?: React.HTMLProps<HTMLButtonElement>
}

export default function Button({ 
	variant = 'primary', 
	children, 
	className, 
	...rest
}: IButton): React.ReactNode {
	const getVariant = () => {
		switch (variant) {
			case 'primary':
				return styles.ButtonPrimary;
			case 'secondary':
				return styles.ButtonSecondary;
			case 'tertiary':
				return styles.ButtonTertiary;
			default:
				throw new Error(`Invalid variant: ${variant}`);
		}
	};
	return (
		<button
			className={`${styles.Button} ${getVariant()} ${className}`}
			{...rest}
		>
			{children}
		</button>
	);
}
