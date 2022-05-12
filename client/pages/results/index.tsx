import React from 'react';
import Section from '../../components/Section';
import RecipeList from '../../components/RecipeList';
import RecipeCard from '../../components/RecipeCard';
import PageTemplate from '../../templates/PageTemplate';
import styles from './Results.module.scss';

export default function Results(): JSX.Element {
	// TODO set recipes unused
	const [recipeResults, setRecipeResults] = React.useState([]);

	return (
		<PageTemplate
			title="Recipe Results | Reverse Recipe"
			className={styles.Results}
		>
			<Section>
				<React.Fragment>
					<h1 className="text-center">Recipe's For Your Ingredients</h1>
					<p className="text-center">
						Here is what we found for your list of ingredients.
					</p>
					<RecipeCard featured recipe={recipeResults[0]} />
					<RecipeList recipes={recipeResults.slice(1)} />
				</React.Fragment>
			</Section>
		</PageTemplate>
	);
}