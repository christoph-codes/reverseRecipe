import React from 'react';
import styles from './Container.module.scss';

interface IContainer extends React.AllHTMLAttributes<HTMLElement> {
	className?: string;
	children?: JSX.Element;
	fluid?: boolean;
	ariaLabel?: string;
	as?: any;
}

const Container = ({ 
	className, 
	fluid = false,
	children, 
	ariaLabel = 'container', 
	as = 'div',
	...rest 
}:IContainer) => {
	const As = as;
	return (
		<As aria-label={`${ariaLabel || 'container'} `}
			className={`${styles.Container} ${className} ${fluid ? styles.fluid : ''}`}
			{...rest}>
			{children}
		</As>
	);
}

export default Container;