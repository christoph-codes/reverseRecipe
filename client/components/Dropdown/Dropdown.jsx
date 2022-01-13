import { useState } from 'react';
import { string, arrayOf, func } from 'prop-types';
import styles from './Dropdown.module.scss';

const Dropdown = ({
	options,
	className,
	value,
	setValue,
	name,
	label,
	placeholder,
	...rest
}) => {
	const [openDropdown, setOpenDropdown] = useState(false);
	return (
		<label
			htmlFor={name}
			className={`${styles.Dropdown} ${className}`}
			{...rest}
		>
			<span className={styles.DropdownLabel}>{label}</span>
			<button
				className={styles.DropdownSelect}
				onClick={() => setOpenDropdown(!openDropdown)}
			>
				{!value ? (
					<span className={styles.DropdownSelectPlaceholder}>
						{placeholder}
					</span>
				) : (
					value
				)}
				<span
					className={
						openDropdown
							? styles.DropdownSelectArrowOpen
							: styles.DropdownSelectArrow
					}
				/>
			</button>
			<div
				id={name}
				className={`${
					openDropdown
						? styles.DropdownSelectOptionsOpen
						: styles.DropdownSelectOptionsClosed
				}`}
			>
				{options.map((option, index) => {
					return (
						<button
							key={index}
							className={styles.DropdownSelectItem}
							onClick={() => {
								setValue(option);
								setOpenDropdown(false);
							}}
						>
							{option}
						</button>
					);
				})}
			</div>
		</label>
	);
};

export default Dropdown;

Dropdown.propTypes = {
	name: string.isRequired,
	className: string,
	label: string,
	placeholder: string,
	options: arrayOf(string).isRequired,
	value: string,
	setValue: func.isRequired,
};

Dropdown.defaultProps = {
	className: '',
	label: '',
	placeholder: 'Please Choose',
	value: '',
	setValue: () => {},
};
