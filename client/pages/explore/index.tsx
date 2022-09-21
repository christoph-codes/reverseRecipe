import React from 'react';
import PageTemplate from '../../templates/PageTemplate';
import Section from '../../components/Section';
import RecipeList from '../../components/RecipeList';
import RecipeCard from '../../components/RecipeCard';
import styles from './Explore.module.scss';
import { testRecipes } from '../../utils/test/recipes';
import { Recipe } from '../../utils/graphql/generated/generated-types';

export default function Explore(): JSX.Element {
	const [recipes, setRecipes] = React.useState<Recipe[]>(testRecipes);

	React.useEffect(() => {
		setRecipes(testRecipes);
	}, []);

	return (
		<PageTemplate
			title="Explore Recipes with Reverse Recipe"
			className={styles.Explore}
		>
			<Section>
				<React.Fragment>
					<h1 className="text-center">Explore Recipes</h1>
					<p className="text-center MB-2">
						Browse our vast collection of gourmet recipe's.
					</p>
					{/* TODO: Eventually add the filter component with functionality here. */}
					<RecipeCard featured recipe={recipes[0]} />
					<RecipeList recipes={recipes.slice(1)} />
				</React.Fragment>
			</Section>
		</PageTemplate>
	);
}