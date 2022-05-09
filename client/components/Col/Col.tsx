import React from 'react';
import styles from './Col.module.scss';

type TColAs = string | ((a: any) => any);
type TColSize = string | object | number | boolean;

interface IChildren {
	children?: React.ReactNode;
}

interface ICol extends IChildren {
	className?: string;
	as?: TColAs;
	xs?: TColSize;
	sm?: TColSize;
	md?: TColSize;
	lg?: TColSize;
	rest?: React.HTMLProps<HTMLElement> //Not sure if this is correct...
}

export default function Col({ 
	className, 
	as = 'div', 
	xs, 
	sm, 
	md, 
	lg, 
	children, 
	...rest 
}: ICol): React.ReactNode {
	const As = as;
	const getClassNames = (breakpoint, value) => {
		let classNames = '';
		if (value && typeof value === 'object') {
			if (value.order) {
				classNames += ` ORDER-${
					breakpoint === 'xs' ? '' : `${breakpoint.toUpperCase()}-`
				}${value.order.toString().toUpperCase()}`;
			}
			if (value.offset) {
				classNames += ` OFFSET-${
					breakpoint === 'xs' ? '' : `${breakpoint.toUpperCase()}-`
				}${value.offset}`;
			}
			if (value.span) {
				classNames += ` COL-${
					breakpoint === 'xs' ? '' : `${breakpoint.toUpperCase()}-`
				}${value.span}`;
			}
		} else if (value && value === true) {
			classNames +=
				breakpoint === 'xs' ? '' : ` COL-${breakpoint.toUpperCase()}`;
		} else if (value && value.toString().length > 0) {
			classNames += ` COL-${
				breakpoint === 'xs' ? '' : `${breakpoint.toUpperCase()}-`
			}${value.toString().toUpperCase()}`;
		}
		return classNames;
	};
	return (
		<As
			className={`Col ${className} ${getClassNames(
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
