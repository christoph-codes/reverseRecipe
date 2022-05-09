import Recipe from '../Recipe';
import styles from './RecipeList.module.scss';

interface IRecipeList {
	className?: string;
	recipes?: any[]; // import recipe from generated
}

export default function RecipeList({ 
	recipes, 
	className
}: IRecipeList): React.ReactNode {
	return (
		<div className={`${styles.RecipeList} ${className}`}>
			{recipes.map((recipe) => (
				<Recipe key={recipe.id} data={recipe} />
			))}
		</div>
	);
}
