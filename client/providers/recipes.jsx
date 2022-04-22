import { useState, createContext, useContext, useEffect } from 'react';
import axios from 'axios';
export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
	const [recipes, setRecipes] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const getAllRecipes = async () => {
		console.log('running');
		setLoading(true);
		const axiosData = await axios
			.get(
				'https://us-west-2.aws.data.mongodb-api.com/app/reverserecipeapplication-aogyb/endpoint/getRecipes'
			)
			.catch((err) => {
				console.log('err', err);
			});
		console.log('axiosdata', axiosData.data);
		if (axiosData === undefined) {
			setError('Issue accessing recipes');
		} else {
			setRecipes(axiosData.data);
		}
		setLoading(false);
		return;
	};
	const getRecipesByIngredients = (ingredients) => {
		const ids = ingredients.map((i) => ingredientMap.get(i.toLowerCase()));
		const queryParam = ids.join(',');
		if (queryParam) {
			axios
				.get(
					`https://us-west-2.aws.data.mongodb-api.com/app/reverserecipeapplication-aogyb/endpoint/getRecipesFromIngredients?ingredients=${queryParam}`
				)
				.then((data) => {
					return data;
				})
				.catch((err) => {
					console.log('err', err);
				});
		} else {
			throw new Error('no ingredients were provided.');
		}
	};
	useEffect(async () => {
		await getAllRecipes();
	}, []);
	return (
		<RecipeContext.Provider
			value={{
				recipes,
				getRecipesByIngredients,
				getAllRecipes,
				loading,
				error,
			}}
		>
			{children}
		</RecipeContext.Provider>
	);
};

export const useRecipes = () => {
	const context = useContext(RecipeContext);
	if (context === undefined) {
		throw new Error('useRecipes must be used within a CountProvider');
	}
	return context;
};
