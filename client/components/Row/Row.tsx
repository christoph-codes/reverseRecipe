import React from 'react';
import styles from './Row.module.scss';

type TRowAs = string | ((a: any) => any);
type TRowSize = string | object | number | boolean;

interface IChildren {
	children?: React.ReactNode;
}

interface IRow extends IChildren {
	className?: string;
	as?: TRowAs;
	xs?: TRowSize;
	sm?: TRowSize;
	md?: TRowSize;
	lg?: TRowSize;
	rest?: React.HTMLProps<HTMLElement> //Not sure if this is correct...
}

export default function Row({ 
	className, 
	as,  
	xs, 
	sm, 
	md, 
	lg,
	children,
	...rest
}: IRow): React.ReactNode {
	const As = as;
	const getClassNames = (breakpoint, value) => {
		let classNames = '';
		if (value && value === true) {
			classNames += ` ROW-COLS-${breakpoint.toUpperCase()}`;
		} else if (value && value.toString().length > 0) {
			classNames += ` ROW-COLS-${
				breakpoint === 'xs' ? '' : `${breakpoint.toUpperCase()}-`
			}${value.toString().toUpperCase()}`;
		}
		return classNames;
	};
	return (
		<As
			className={`Row ${className} ${getClassNames(
				'xs',
				xs,
			)} ${getClassNames('sm', sm)} ${getClassNames(
				'md',
				md,
			)} ${getClassNames('lg', lg)}`}
			{...rest}
		>
			{children}
		</As>
	);
}
