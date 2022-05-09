import Head from 'next/head';
import { string, node } from 'prop-types';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import styles from './PageTemplate.module.scss';

interface IChildren {
	children?: React.ReactNode;
}

interface IPageTemplate extends IChildren {
	className?: string;
	title: string;
}

export default function PageTemplate({ 
	className, 
	title, 
	children, 
	...rest 
}: IPageTemplate) {
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
}