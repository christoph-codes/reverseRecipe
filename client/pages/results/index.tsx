import React, { useEffect } from 'react';
import Section from '../../components/Section';
import RecipeList from '../../components/RecipeList';
import RecipeCard from '../../components/RecipeCard';
import PageTemplate from '../../templates/PageTemplate';
import styles from './Results.module.scss';
import { useIngredientsContext } from '../../providers/IngredientProvider';
import { Recipe, RecipeSortByInput, useRecipesLazyQuery } from '../api/graphql/generated/graphql';

export default function Results(): JSX.Element {
	const { searchNames } = useIngredientsContext();

	// for some reasone $limit is required even though a default is specified in the resolver.
	const [getRecipes, { error, loading, data }] = useRecipesLazyQuery();


	useEffect(() => {
		if (searchNames) {
			getRecipes({
				variables: { 
					sortBy: RecipeSortByInput.NameAsc,
					query: { ingredients_in: searchNames as [string] },
					limit: 20
				}
			});
		}
	}, [searchNames]);

	return (
		<PageTemplate
			title="Recipe Results | Reverse Recipe"
			className={styles.Results}
		>
			<Section>
				<React.Fragment>
					<h1 className="text-center">Recipe's For Your Ingredients</h1>
					{loading && <h1>Loading</h1>}
					{!loading && error && <h1>There was an error getting your Recipe's</h1>}
					{!loading && data && 
						<React.Fragment>
							<p className="text-center">
								Here is what we found for your list of ingredients.
							</p>
							{data?.recipes[0] && <RecipeCard featured recipe={data.recipes[0]} />}
							{data?.recipes && data?.recipes.length > 1 && <RecipeList recipes={data.recipes.slice(1)} />}
						</React.Fragment>
					}
				</React.Fragment>
			</Section>
		</PageTemplate>
	);
}