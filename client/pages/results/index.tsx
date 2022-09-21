import React, { useEffect } from 'react';
import Section from '../../components/Section';
import RecipeList from '../../components/RecipeList';
import RecipeCard from '../../components/RecipeCard';
import PageTemplate from '../../templates/PageTemplate';
import styles from './Results.module.scss';
import { testRecipes } from '../../utils/test/recipes';

export default function Results(): JSX.Element {
	// TODO: implement and add useQuery hook and provider for recipe results
	// TODO: remove placeholder data and update return markup
	useEffect(() => { }, []);

	return (
		<PageTemplate
			title="Recipe Results | Reverse Recipe"
			className={styles.Results}
		>
			<Section>
				<React.Fragment>
					<h1 className="text-center">Recipe's For Your Ingredients</h1>
					<React.Fragment>
						<p className="text-center">
							Here is what we found for your list of ingredients.
						</p>
						<RecipeCard featured recipe={testRecipes[0]} />
						<RecipeList recipes={testRecipes} />
					</React.Fragment>
				</React.Fragment>
			</Section>
		</PageTemplate>
	);
}