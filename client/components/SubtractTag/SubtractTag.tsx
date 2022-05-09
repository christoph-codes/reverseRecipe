import styles from './SubtractTag.module.scss';

interface IChildren {
	children?: React.ReactNode;
}

interface ISubtractTag extends IChildren {
	className?: string;
	rest?: React.HTMLProps<HTMLButtonElement>;
}

export default function SubtractTag({ 
	children, 
	className, 
	...rest
}: ISubtractTag): React.ReactNode {
	return (
		<button className={`${styles.SubtractTag} ${className}`} {...rest}>
			{children}
			<span className={styles.SubtractTagMinus} />
		</button>
	);
}
