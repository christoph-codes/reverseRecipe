import Tag from '../Tag';
import Button from '../Button';
import Row from '../Row';
import Col from '../Col';
import styles from './RecipeCard.module.scss';
import { Recipe } from '../../utils/graphql/generated/generated-types';

// TODO: fix generated shit...
interface IRecipeCard {
	recipe: Recipe;
	className?: string;
	featured?: boolean;
}

const RecipeCard = ({ 
	recipe, 
	className, 
	featured
}: IRecipeCard) => {

	console.log(recipe.imgSrc);
	return (
		<Row
			className={`${styles.RecipeCard} ${
				featured ? styles.featured : ''
			} ${className}`}
		>
			<>
				<Col xs={12} md={5} className={styles.RecipeCardImage}>
					<>
						{featured && (
							<Tag
								variant="green"
								className={styles.RecipeCardImageFeaturedTag}
							>
								Featured
							</Tag>
						)}
						<img src={recipe.imgSrc ?? ''} alt={recipe.name ?? ''} />
					</>
				</Col>
				<Col>
					<div className={styles.RecipeCardContent}>
						<Tag>{recipe.category ?? ''}</Tag>
						<h3>{recipe.name}</h3>
						<p className={styles.RecipeCardIcon}>
							<img src="/icon-carrot.svg" alt="carrot" />
							Ingredients:&nbsp;
							<strong>{recipe.ingredients?.length}</strong>
						</p>
						<p className={styles.RecipeCardIcon}>
							<img src="/icon-clock.svg" alt="carrot" />
							Cook Time:&nbsp;<strong>~{recipe.cookTime}min.</strong>
						</p>
						<Button
							className={styles.RecipeCardButton}
							variant={featured ? 'primary' : 'secondary'}
							href={'#'}
						>
							View Recipe
						</Button>
					</div>
				</Col>
			</>
		</Row>
	);
}

export default RecipeCard;
