import Head from 'next/head';
import Image from 'next/image';
import Row from '../../components/Row';
import Col from '../../components/Col';
import Container from '../../components/Container/Container';
import styles from './Playground.module.scss';
import Section from '../../components/Section';

const Playground = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Reverse Recipe</title>
				<meta
					name="description"
					content="Generated by Reverse Recipe"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Section className="bg-primary">
				<Container>
					<h1>
						<Image
							src="/rr-logo-light.svg"
							width="100%"
							height="100%"
							layout="intrinsic"
							alt="Reverse Recipe Logo"
						/>
					</h1>
					<Row>
						<Col xs={6} className="text-white">
							Hello
						</Col>
						<Col xs={6}>Hello2</Col>
						<Col xs={6}>Hello3</Col>
					</Row>
				</Container>
			</Section>
			<Image
				src="/rr-logo-dark.svg"
				width="100%"
				height="100%"
				layout="intrinsic"
				alt="Reverse Recipe Logo"
			/>

			<p className="P-2 text-red">What's good!</p>
		</div>
	);
};

export default Playground;