import { useState } from 'react';
import PageTemplate from '../../templates/PageTemplate';
import Section from '../../components/Section';
import RecipeList from '../../components/RecipeList';
import RecipeCard from '../../components/RecipeCard';
import styles from './Explore.module.scss';

export default function Explore() {
	const [recipes, setRecipes] = useState([]);

	return (
		<PageTemplate
			title="Explore Recipes with Reverse Recipe"
			className={styles.Explore}
		>
			<Section>
				<h1 className="text-center">Explore Recipes</h1>
				<p className="text-center MB-2">
					Browse our vast collection of gourmet recipe's.
				</p>
				{/* TODO: Eventually add the filter component with functionality here. */}
				<RecipeCard featured recipe={recipes[0]} />
				<RecipeList recipes={recipes.slice(1)} />
			</Section>
		</PageTemplate>
	);
}