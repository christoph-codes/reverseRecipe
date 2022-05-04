import { useState } from 'react';
import { string, func } from 'prop-types';
import styles from './SaveStar.module.scss';

const SaveStar = ({ className, onClick, ...rest }) => {
	const [toggleActive, setToggleActive] = useState(false);
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
};

export default SaveStar;

SaveStar.propTypes = {
	className: string,
	onClick: func,
};

SaveStar.defaultProps = {
	className: '',
	func: () => {},
};
