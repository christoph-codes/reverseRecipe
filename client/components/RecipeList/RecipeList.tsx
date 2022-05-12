import RecipeInfo from '../RecipeInfo';
import styles from './RecipeList.module.scss';
import { Recipe } from '../../graphql/generated/Generated';

interface IRecipeList {
	className?: string;
	recipes?: Recipe[];
}

export default function RecipeList({ 
	recipes, 
	className
}: IRecipeList): JSX.Element {
	return (
		<div className={`${styles.RecipeList} ${className}`}>
			{recipes.map((recipe) => (
				<RecipeInfo key={recipe._id} data={recipe} />
			))}
		</div>
	);
}
