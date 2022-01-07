import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';

const Home = () => {
	return (
		<div className={styles.Home}>
			<Head>
				<title>Reverse Recipe</title>
				<meta
					name="description"
					content="Generated by Reverse Recipe"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Image
				src="/rr-logo-light.svg"
				width="400"
				height="100%"
				layout="intrinsic"
				alt="Reverse Recipe Logo"
			/>
		</div>
	);
};

export default Home;