import styles from './Card.module.scss';

const Card = ({ children, className, ...rest }) => {
	return (
		<div className={`${styles.Card} ${className}`} {...rest}>
			{children}
		</div>
	);
};

export default Card;
