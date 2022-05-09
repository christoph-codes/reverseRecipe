import React from 'react';
import styles from './SaveStar.module.scss';

interface ISaveStar {
	className?: string;
	onClick?: (a: any) => void;
	rest?: React.HTMLProps<HTMLButtonElement>;
}

export default function SaveStar({ 
	className, 
	onClick, 
	...rest 
}: ISaveStar): React.ReactNode {
	const [toggleActive, setToggleActive] = React.useState(false);

	return (
		<button
			className={`${styles.SaveStar} ${
				toggleActive ? styles.SaveStarActive : ''
			} ${className}`}
			onClick={() => {
				setToggleActive(!toggleActive);
				onClick;
			}}
			{...rest}
		>
			Save
			<span
				className={
					toggleActive
						? styles.SaveStarActiveIcon
						: styles.SaveStarIcon
				}
			/>
		</button>
	);
}
