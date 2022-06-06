import React from 'react';
import styles from './Row.module.scss';

type TRowSize = string | object | number | boolean;

interface IRow extends React.HTMLAttributes<HTMLDivElement> {
	className?: string;
	children?: JSX.Element;
	xs?: TRowSize;
	sm?: TRowSize;
	md?: TRowSize;
	lg?: TRowSize;
	as?: any;
}

const Row = ({ 
	className,
	as = 'div',
	xs,
	sm,
	md,
	lg,
	children,
	...rest
}: IRow) => {
	const As = as;
	const getClassNames = (breakpoint: string, value: any) => {
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

export default Row;
