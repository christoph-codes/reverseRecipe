import Row from '../Row';
import Col from '../Col';
import styles from './Footer.module.scss';
import Container from '../Container';
import React from 'react';

// TODO wtf is this error ...
//also should this be footer or Footer?
export default function Footer({ 
	...rest 
}: React.AllHTMLAttributes<HTMLElement>): JSX.Element {
	return (
		<footer className={styles.Footer} {...rest}>
			<Container as={Row}>
				<>
					<Col
						xs={{ order: 0, span: 12 }}
						md={{ order: 0, span: 4 }}
						className={styles.FooterCopyright}
					>
						<p>Copyright 2022. All Rights Reserved.</p>
					</Col>
					<Col
						xs={{ order: 2, span: 12 }}
						md={{ order: 1, span: 4 }}
						className={styles.FooterIcon}
					>
						<img src="/rr-icon.svg" alt="Reverse Recipe" />
					</Col>
					<Col
						xs={{ order: 1, span: 12 }}
						md={{ order: 2, span: 4 }}
						className={styles.FooterMadewith}
					>
						<p>Made with organic chicken grease.</p>
					</Col>
				</>
			</Container>
		</footer>
	);
}
