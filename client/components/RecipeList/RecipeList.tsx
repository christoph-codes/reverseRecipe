import { Recipe } from '../../graphql/generated/graphql';
import RecipeInfo from '../RecipeInfo';
import styles from './RecipeList.module.scss';

// TODO: fix generated shit...
interface IRecipeList {
	className?: string;
	recipes?: (Recipe | null)[];
}

const RecipeList = ({ 
	recipes, 
	className
}: IRecipeList) => {
	return (
		<div className={`${styles.RecipeList} ${className}`}>
			{recipes && recipes.map((recipe) => {
				if (recipe) {
					return <RecipeInfo key={recipe._id} recipe={recipe} />
				}
			})}
		</div>
	);
}

export default RecipeList;
