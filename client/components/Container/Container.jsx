import React from 'react';
import { string, bool, element, oneOfType, array, func } from 'prop-types';
import styles from './Container.module.scss';

const Container = ({ className, fluid, as, children, ariaLabel, ...rest }) => {
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
};

export default Container;

Container.propTypes = {
	className: string,
	as: oneOfType([string, func]),
	fluid: bool,
	children: oneOfType([
		element.isRequired,
		string.isRequired,
		array.isRequired,
	]),
	ariaLabel: string,
};

Container.defaultProps = {
	className: '',
	as: 'div',
	fluid: false,
	ariaLabel: 'container',
};