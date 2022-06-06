import React from 'react';
import styles from './Button.module.scss';

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement>{
	variant?: 'primary' | 'secondary' | 'tertiary';
	className?: string;
	children?: string | JSX.Element & Omit<JSX.Element, 'a'>; // idk if this will exclude a tags or not
	href?: string;
}

const Button = ({ 
	variant = 'primary',  
	className,
	children,
	href = '#',
	...rest
}: IButton) => {
	const getVariant = () => {
		switch (variant) {
			case 'primary':
				return styles.ButtonPrimary;
			case 'secondary':
				return styles.ButtonSecondary;
			case 'tertiary':
				return styles.ButtonTertiary;
			default:
				return 'primary';
		}
	};
	return (
		<button
			className={`${styles.Button} ${getVariant()} ${className}`}
			{...rest}
		>
			<a href={href}>
				{children}
			</a>
		</button>
	);
}

export default Button;
