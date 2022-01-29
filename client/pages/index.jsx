import { useState, useEffect } from 'react';
import Link from 'next/link';
import PageTemplate from '../templates/PageTemplate';
import Section from '../components/Section';
import SubtractTag from '../components/SubtractTag';
import AddInput from '../components/AddInput';
import Button from '../components/Button';
import { useRecipes } from '../providers/recipes';
import styles from '../styles/Home.module.scss';

const Home = () => {
	const [ingredient, setIngredient] = useState('');
	const [ingredients, setIngredients] = useState([]);
	// key: name (lower case), value: _id
	const [ingredientMap, setIngredientMap] = useState(null);

	const removeIngredient = (value) => {
		const newIngredients = ingredients.filter(
			(ingredient) => ingredient !== value
		);
		setIngredients(newIngredients);
	};
	const { getAllRecipes } = useRecipes();
	return (
		<PageTemplate title="Home | Reverse Recipe" className={styles.Home}>
			<Section containerClass={styles.HomeContainer}>
				<h1 className="MB-1">Find A Recipe</h1>
				<p className="MB-1H">
					Enter all of your ingredients and we will find the top
					recipe(s) that might interest you!
				</p>
				<AddInput
					name="ingredient-input"
					label="Enter Ingredients"
					value={ingredient}
					setValue={setIngredient}
					addCallback={() =>
						setIngredients([
							...ingredients,
							ingredient.toLowerCase(),
						])
					}
				/>
				<div className={styles.HomeIngredientsList}>
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
				</div>
				<Button
					onClick={() => getRecipesByIngredients()}
					className={styles.HomeRecipeButton}
				>
					Find Recipe
				</Button>
				<hr />
				<p>
					Wanna explore our recipe list?{' '}
					<Link href="/explore">Explore Now</Link>
				</p>
			</Section>
		</PageTemplate>
	);
};

export default Home;
