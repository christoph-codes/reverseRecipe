import React from 'react';
import { string, bool } from 'prop-types';
import Container from '../Container';
import Row from '../Row';
import styles from './Section.module.scss';

interface IChildren {
	children?: React.ReactNode;
}

interface ISection extends IChildren {
	className?: string;
	bgImg?: string;
	title?: string;
	titleClass?: string;
	columns?: boolean;
	fullWidth?: boolean;
	containerClass?: string;
	description?: string;
	rest?: React.HTMLProps<HTMLElement>
}

export default function Section({
	children,
	className,
	bgImg,
	title,
	titleClass,
	columns = false,
	fullWidth = false,
	containerClass,
	description,
	...rest
}: ISection): React.ReactNode {
	return (
		<>
			<section
				style={bgImg ? { backgroundImage: `url(${bgImg})` } : {}}
				className={`${styles.Section} ${className || ''}`}
				{...rest}
			>
				<Container
					className={`${containerClass || ''}`}
					as="div"
					fluid={fullWidth || false}
				>
					{title ? (
						<h2
							className={`${styles.sectionTitle} ${titleClass} text-gray`}
						>
							{title}
						</h2>
					) : (
						''
					)}
					{description ? (
						<p className="section-description">{description}</p>
					) : (
						''
					)}
					{columns ? <Row>{children}</Row> : children}
				</Container>
			</section>
		</>
	);
}
