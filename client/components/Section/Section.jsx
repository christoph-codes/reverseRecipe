import React from 'react';
import { string, bool } from 'prop-types';
import Container from '../Container';
import Row from '../Row';
import styles from './Section.module.scss';

const Section = ({
	children,
	className,
	bgImg,
	title,
	titleClass,
	columns,
	fullWidth,
	containerClass,
	description,
	...rest
}) => {
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
};

Section.propTypes = {
	className: string,
	fullWidth: bool,
	bgImg: string,
	columns: bool,
	title: string,
	titleClass: string,
	columns: bool,
	fullWidth: bool,
	containerClass: string,
	description: string,
};

Section.defaultProps = {
	className: '',
	fullWidth: false,
	bgImg: '',
	columns: false,
	title: '',
	titleClass: '',
	columns: false,
	fullWidth: false,
	containerClass: '',
	description: '',
};

export default Section;
