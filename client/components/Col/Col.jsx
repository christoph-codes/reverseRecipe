import React from 'react';
import { oneOfType, string, object, number, bool, func } from 'prop-types';
import styles from './Col.module.scss';

const Col = ({ className, as, xs, sm, md, lg, children, ...rest }) => {
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
};

export default Col;

Col.propTypes = {
	className: string,
	as: oneOfType([string, func]),
	xs: oneOfType([string, object, number, bool]),
	md: oneOfType([string, object, number, bool]),
	lg: oneOfType([string, object, number, bool]),
	sm: oneOfType([string, object, number, bool]),
};

Col.defaultProps = {
	className: '',
	as: 'div',
	xs: '',
	md: '',
	lg: '',
	sm: '',
};
