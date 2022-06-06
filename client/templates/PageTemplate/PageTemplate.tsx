import Head from 'next/head';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import styles from './PageTemplate.module.scss';

interface IChildren {
	children?: JSX.Element | JSX.Element[];
}

interface IPageTemplate extends IChildren {
	className?: string;
	title: string;
	rest?: React.HTMLProps<HTMLDivElement>;
}

export default function PageTemplate({ 
	className, 
	title = 'Reverse Recipe', 
	children, 
	...rest 
}: IPageTemplate): JSX.Element {
	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>
			<div className={`${styles.PageTemplate} ${className}`} {...rest}>
				<Navbar />
				<div className={styles.PageTemplateContent}>
					{children}
				</div>
				<Footer />
			</div>
		</>
	);
}