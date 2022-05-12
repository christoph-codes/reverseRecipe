import Button from '../Button';
import Col from '../Col';
import Row from '../Row';
import Tag from '../Tag';
import styles from './Recipe.module.scss';
import { Recipe } from '../../graphql/generated/Generated';

interface IRecipe extends React.AllHTMLAttributes<HTMLElement>{
	recipe: Recipe;
	className?: string;
}

export default function RecipeInfo({ 
	recipe, 
	className, 
	...rest 
}: IRecipe): JSX.Element {
	
	return (
		<Row className={`${styles.Recipe} ${className}`} {...rest}>
			<>
				<Col sm={2} xs={12}>
					<img
						className={styles.RecipeImage}
						src={recipe.imgSrc}
						alt={recipe.name}
					/>
				</Col>
				<Col>
					<>
						<h3>
							{recipe.name} <Tag className="MB-0 ML-H">{recipe.category}</Tag>
						</h3>
						<p>{recipe.recipeDescription ?? 'no description'}</p>
						<Row>
							<>
								<Col xs={12} md={6}>
									<p className={styles.RecipeIcons}>
										<img src="/icon-carrot.svg" alt="carrot" />
										Ingredients: &nbsp;
										<strong>{recipe.ingredients.length}</strong>
									</p>
								</Col>
								<Col xs={12} md={6}>
									<p className={styles.RecipeIcons}>
										<img src="/icon-clock.svg" alt="carrot" />
										Cook Time:&nbsp;
										<strong>~{recipe.cookTime}min.</strong>
									</p>
								</Col>
							</>
						</Row>
					</>
				</Col>
				<Col md={3} xs={12}>
					<Button className={styles.RecipeButton} href={'#'}>
						View Recipe
					</Button>
				</Col>
			</>
		</Row>
	);
}
