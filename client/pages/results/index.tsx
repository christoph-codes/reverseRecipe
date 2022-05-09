import { useState } from 'react';
import Section from '../../components/Section';
import RecipeList from '../../components/RecipeList';
import RecipeCard from '../../components/RecipeCard';
import PageTemplate from '../../templates/PageTemplate';
import styles from './Results.module.scss';

export default function Results() {
	const [recipeResults, setRecipeResults] = useState([]);

	return (
		<PageTemplate
			title="Recipe Results | Reverse Recipe"
			className={styles.Results}
		>
			<Section>
				<h1 className="text-center">Recipe's For Your Ingredients</h1>
				<p className="text-center">
					Here is what we found for your list of ingredients.
				</p>
				<RecipeCard featured recipe={recipeResults[0]} />
				<RecipeList recipes={recipeResults.slice(1)} />
			</Section>
		</PageTemplate>
	);
}