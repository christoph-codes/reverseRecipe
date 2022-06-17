import Link from 'next/link';
import React from 'react';
import styles from './Button.module.scss';

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement & HTMLAnchorElement> {
	variant?: 'primary' | 'secondary' | 'tertiary';
	className?: string;
	children?: string | JSX.Element & Omit<JSX.Element, 'a'>; // idk if this will exclude a tags or not
	href?: string;
	isDisabled?: boolean;
}

const Button = ({ 
	variant = 'primary',  
	className,
	children,
	href,
	isDisabled = false,
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
	const Tag = href ? Link : 'button';
	return (
		<Tag
			type={!href ? 'button' : undefined}
			className={`${styles.Button} ${getVariant()} ${className}`}
			disabled={isDisabled}
			href={href ? href : ''}
			{...rest}
		>
			{href ?
				<a className={`${styles.Button} ${getVariant()} ${className}`}>
					{children}
				</a> : children
			}
		</Tag>
	);
}

export default Button;
