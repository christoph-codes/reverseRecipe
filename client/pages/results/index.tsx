import React, { useEffect } from 'react';
import Section from '../../components/Section';
import RecipeList from '../../components/RecipeList';
import RecipeCard from '../../components/RecipeCard';
import PageTemplate from '../../templates/PageTemplate';
import styles from './Results.module.scss';
import { useIngredientsContext } from '../../providers/IngredientProvider';
import { Recipe, RecipeSortByInput, useRecipesLazyQuery } from '../../graphql/generated/graphql';
import { useRecipesContext } from '../../providers/RecipesProvider';

export default function Results(): JSX.Element {
	const { queryInfo } = useIngredientsContext();
	const { updateRecipes } = useRecipesContext();

	const [recipes, setRecipes] = React.useState<Recipe[]>(() => {
		const recipesItem = sessionStorage.getItem('recipes');
		return recipesItem ? JSON.parse(recipesItem) : [];
	});
	const [getRecipes, { loading, error, data}] = useRecipesLazyQuery();


	useEffect(() => {
		if (!!recipes.length && queryInfo?.names) {
			getRecipes({
				variables: { 
					sortBy: RecipeSortByInput.NameAsc,
					query: { ingredients_in: queryInfo.names as [string] },
					limit: 20
				}
			});
		}
	}, [queryInfo?.names]);

	const showLoadingContent = () => {
		return (<h1> Loading Recipes for you...</h1>);
	};

	const showErrorContent = () => {
		return (<h1>Oops... There was an error getting your Recipes...</h1>);
	};

	const showRecipeContent = () => {
		if (data?.recipes) {
			updateRecipes(data.recipes);
		}
		return (
			<React.Fragment>
				<p className="text-center">
					Here is what we found for your list of ingredients.
				</p>
				{data?.recipes[0] && <RecipeCard featured recipe={data.recipes[0]} />}
				{data?.recipes && data?.recipes.length > 1 && <RecipeList recipes={data.recipes.slice(1)} />}
			</React.Fragment>
		)
	};

	return (
		<PageTemplate
			title="Recipe Results | Reverse Recipe"
			className={styles.Results}
		>
			<Section>
				<React.Fragment>
					<h1 className="text-center">Recipe's For Your Ingredients</h1>
					{loading && showLoadingContent()}
					{!loading && error && showErrorContent()}
					{!loading && data && showRecipeContent()}
				</React.Fragment>
			</Section>
		</PageTemplate>
	);
}