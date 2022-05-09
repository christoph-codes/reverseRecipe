import React from 'react';
import styles from './Container.module.scss';

type TContainerAs = string | ((a: any) => any);

interface IChildren {
	children?: React.ReactNode;
}

interface IContainer extends IChildren {
	className?: string;
	fluid?: boolean;
	as?: TContainerAs;
	ariaLabel?: string;
	rest?: React.HTMLProps<HTMLElement>; //Not sure if this is correct...
}

export default function Container({ 
	className, 
	fluid = false, 
	as = 'div', 
	children, 
	ariaLabel = 'container', 
	...rest 
}:IContainer): React.ReactNode {
	const As = as;
	return (
		<As
			aria-label={`${ariaLabel || 'container'} `}
			className={`${styles.Container} ${className} ${fluid ? styles.fluid : ''}`}
			{...rest}
		>
			{children}
		</As>
	);
}