import Head from 'next/head';
import { string, node } from 'prop-types';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import styles from './PageTemplate.module.scss';

const PageTemplate = ({ className, title, children, ...rest }) => {
	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>
			<div className={`${styles.PageTemplate} ${className}`} {...rest}>
				<Navbar />
				<div className={styles.PageTemplateContent}>{children}</div>
				<Footer />
			</div>
		</>
	);
};

export default PageTemplate;

PageTemplate.propTypes = {
	className: string,
	title: string,
	children: node,
};

PageTemplate.defaultProps = {
	className: '',
	title: 'Reverse Recipe',
	children: null,
};