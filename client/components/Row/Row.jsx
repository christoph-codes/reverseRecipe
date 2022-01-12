import React from 'react';
import { oneOfType, string, object, number, bool, func } from 'prop-types';
import styles from './Row.module.scss';

const Row = ({ className, as, children, xs, sm, md, lg, ...rest }) => {
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
};

export default Row;

Row.propTypes = {
	className: string,
	as: oneOfType([string, func]),
	xs: oneOfType([string, object, number, bool]),
	sm: oneOfType([string, object, number, bool]),
	md: oneOfType([string, object, number, bool]),
	lg: oneOfType([string, object, number, bool]),
};

Row.defaultProps = {
	className: '',
	as: 'div',
	xs: '',
	md: '',
	sm: '',
	lg: '',
};
