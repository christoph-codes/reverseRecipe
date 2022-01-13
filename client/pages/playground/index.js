import { useState } from 'react';
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
import SaveStar from '../../components/SaveStar/SaveStar';
import Checkbox from '../../components/Checkbox';

import styles from './Playground.module.scss';
import Footer from '../../components/Footer';
import Dropdown from '../../components/Dropdown';
import AddInput from '../../components/AddInput';
import Recipe from '../../components/Recipe';
import RecipeList from '../../components/RecipeList/RecipeList';

import recipes from '../../data/recipes';
import RecipeCard from '../../components/RecipeCard';

const Playground = () => {
	const [checklist, setChecklist] = useState({
		'4 skinless, boneless chicken breasts halves': false,
		'1/2 cup of chicken broth': false,
		'1/2 cup of water': false,
		'1/2 cup of cornstarch': false,
		'1/2 cup of flour': false,
	});
	const [category, setCategory] = useState('');
	const [ingredient, setIngredient] = useState('');
	const [ingredients, setIngredients] = useState([]);
	const removeIngredient = (value) => {
		const newIngredients = ingredients.filter(
			(ingredient) => ingredient !== value
		);
		setIngredients(newIngredients);
	};
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
			<Section>
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
						<Col xs={4} className="bg-primary-bright">
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
					<h2 className="MT-1">Checkbox</h2>
					{Object.entries(checklist).map(([line, value]) => {
						return (
							<Checkbox
								key={line}
								value={value}
								setValue={() =>
									setChecklist({
										...checklist,
										[line]: !value,
									})
								}
								name={line}
								label={line}
							/>
						);
					})}
					<h2 className="MT-1">Dropdown</h2>
					<Dropdown
						label="Dropdown"
						value={category}
						setValue={setCategory}
						options={[
							'option 1',
							'option 2',
							'option 3',
							'option 4',
						]}
					/>
					<h2 className="MT-1">Add Input</h2>
					<AddInput
						name="ingredient-adder"
						label="Enter Ingredient"
						value={ingredient}
						setValue={setIngredient}
						addCallback={() =>
							setIngredients([...ingredients, ingredient])
						}
					/>
					{ingredients.length > 0 &&
						ingredients.map((ingredient, index) => {
							return (
								<SubtractTag
									key={index}
									onClick={() => removeIngredient(ingredient)}
								>
									{ingredient}
								</SubtractTag>
							);
						})}
					<h2 className="MT-1">Recipe</h2>
					<Recipe data={recipes[0]} />
					<h2 className="MT-1">Recipe List</h2>
					<RecipeList recipes={recipes} />
					<h2 className="MT-1">Recipe Card</h2>
					<RecipeCard recipe={recipes[1]} featured />
					<RecipeCard recipe={recipes[3]} />
				</Container>
			</Section>
			<h2 className="MT-1">Footer</h2>
			<Footer />
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
