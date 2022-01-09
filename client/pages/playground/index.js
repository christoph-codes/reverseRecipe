import Head from 'next/head';
import Image from 'next/image';
import Row from '../../components/Row';
import Col from '../../components/Col';
import Button from '../../components/Button';
import Container from '../../components/Container/Container';
import Section from '../../components/Section';
import Navbar from '../../components/Navbar';
import SubtractTag from '../../components/SubtractTag';
import Tag from '../../components/Tag';

import styles from './Playground.module.scss';
import SaveStar from '../../components/SaveStar/SaveStar';

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
			<h2>Navbar</h2>
			<Navbar />
			<Section className="bg-primary-bright">
				<Container>
					<h2>Logos</h2>
					<Image
						src="/rr-logo-dark.svg"
						width="100%"
						height="100%"
						layout="intrinsic"
						alt="Reverse Recipe Logo"
					/>
					<Image
						src="/rr-logo-light.svg"
						width="100%"
						height="100%"
						layout="intrinsic"
						alt="Reverse Recipe Logo"
					/>
					<h2 className="MT-1">Rows & Columns</h2>
					<Row>
						<Col xs={4} className="text-white">
							Column 1
						</Col>
						<Col xs={4}>Column 2</Col>
						<Col xs={4}>Column 3</Col>
					</Row>
					<h2 className="MT-1">Buttons</h2>
					<Button>Find Recipe</Button>
					<Button>Find Recipe</Button>
					<hr />
					<Button variant="secondary">Find Recipe</Button>
					<hr />
					<Button variant="tertiary">Find Recipe</Button>
					<h2 className="MT-1">Subtract Tag</h2>
					<SubtractTag>Broccoli</SubtractTag>
					<h2 className="MT-1">Tag</h2>
					<Tag>Italian</Tag>
					<Tag>American</Tag>
					<h2 className="MT-1">Save Star</h2>
					<SaveStar />
					<SaveStar />
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
