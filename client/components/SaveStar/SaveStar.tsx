import React from 'react';
import styles from './SaveStar.module.scss';

interface ISaveStar extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	onClick?: (a: any) => void;
}

export default function SaveStar({ 
	className, 
	onClick, 
	...rest 
}: ISaveStar): JSX.Element {
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
