import { arrayOf, object, string } from 'prop-types';
import Recipe from '../Recipe';
import styles from './RecipeList.module.scss';

const RecipeList = ({ recipes, className, ...rest }) => {
	return (
		<div className={`${styles.RecipeList} ${className}`}>
			{recipes.map((recipe) => (
				<Recipe key={recipe.id} data={recipe} />
			))}
		</div>
	);
};

export default RecipeList;

RecipeList.propTypes = {
	recipes: arrayOf(object).isRequired,
	className: string,
};

RecipeList.defaultProps = {
	className: '',
};
