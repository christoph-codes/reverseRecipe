import React from 'react';
import styles from './Dropdown.module.scss';

interface IDropdown extends React.LabelHTMLAttributes<HTMLLabelElement> {
	name: string;
	className?: string;
	label?: string;
	placeholder?: string;
	options: string[];
	value: string;
	setValue: (s: string) => void;
}

export default function Dropdown({
	options,
	className,
	value,
	setValue = () => {},
	name,
	label = '',
	placeholder = 'Please Choose',
	...rest
}: IDropdown): JSX.Element {
	const [openDropdown, setOpenDropdown] = React.useState(false);
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
}
