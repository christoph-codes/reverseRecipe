import React from 'react';
import styles from './SubtractTag.module.scss';

interface ISubtractTag extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	children?: JSX.Element | string;
}

// how to define ...rest

const SubtractTag = ({ 
	children, 
	className, 
	...rest
}: ISubtractTag) => {
	return (
		<button className={`${styles.SubtractTag} ${className}`} {...rest}>
			{children}
			<span className={styles.SubtractTagMinus} />
		</button>
	);
}

export default SubtractTag;
