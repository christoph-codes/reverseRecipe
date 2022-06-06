import RecipeInfo from '../RecipeInfo';
import styles from './RecipeList.module.scss';
import { Recipe } from '../../graphql/generated/Generated';

// TODO: fix generated shit...
interface IRecipeList {
	className?: string;
	recipes?: Recipe[];
}

const RecipeList = ({ 
	recipes, 
	className
}: IRecipeList) => {
	return (
		<div className={`${styles.RecipeList} ${className}`}>
			{recipes && recipes.map((recipe) => (
				<RecipeInfo key={recipe._id} data={recipe} />
			))}
		</div>
	);
}

export default RecipeList;
