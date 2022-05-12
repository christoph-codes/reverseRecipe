import React from 'react';
import Container from '../Container';
import Row from '../Row';
import styles from './Section.module.scss';

interface ISection extends React.AllHTMLAttributes<HTMLElement> {
	className?: string;
	children?: JSX.Element;
	bgImg?: string;
	title?: string;
	titleClass?: string;
	columns?: boolean;
	fullWidth?: boolean;
	containerClass?: string;
	description?: string;
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
}: ISection): JSX.Element {
	return (
		<React.Fragment>
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
					<React.Fragment>
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
					</React.Fragment>
				</Container>
			</section>
		</React.Fragment>
	);
}
