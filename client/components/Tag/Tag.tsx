import { string } from 'prop-types';
import styles from './Tag.module.scss';

interface IChildren {
	children?: React.ReactNode;
}

interface ITag extends IChildren {
	className?: string;
	variant?: 'primary' | 'secondary' | 'blue' | 'green' | 'red' | 'yellow';
	rest?: React.HTMLProps<HTMLDivElement>;
}

export default function Tag({ 
	children, 
	className, 
	variant = 'primary', 
	...rest 
}: ITag): React.ReactNode {
	const getVariant = () => {
		switch (variant) {
			case 'primary':
				return styles.primary;
			case 'secondary':
				return styles.secondary;
			case 'blue':
				return styles.blue;
			case 'green':
				return styles.green;
			case 'red':
				return styles.red;
			case 'yellow':
				return styles.yellow;
			default:
				return '';
		}
	};

	return (
		<div className={`${styles.Tag} ${getVariant()} ${className}`} {...rest}>
			{children}
		</div>
	);
}
