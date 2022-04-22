import Tag from '../Tag';
import Button from '../Button';
import Row from '../Row';
import Col from '../Col';
import styles from './RecipeCard.module.scss';

const RecipeCard = ({ recipe, className, featured, ...rest }) => {
	return (
		<Row
			className={`${styles.RecipeCard} ${
				featured ? styles.featured : ''
			} ${className}`}
		>
			<Col xs={12} md="" className={styles.RecipeCardImage}>
				{featured && (
					<Tag
						variant="green"
						className={styles.RecipeCardImageFeaturedTag}
					>
						Featured
					</Tag>
				)}
				<img
					src={recipe.imgSrc || '/empty-recipe-image.png'}
					alt={recipe.name}
				/>
			</Col>
			<Col md="">
				<div className={styles.RecipeCardContent}>
					<Tag>{recipe.category}</Tag>
					<h3>{recipe.name}</h3>
					{recipe.recipeDescription && (
						<p>{recipe.recipeDescription}</p>
					)}
					<p className={styles.RecipeCardIcon}>
						<img src="/icon-carrot.svg" alt="carrot" />
						Ingredients:&nbsp;
						<strong>{recipe.ingredients.length}</strong>
					</p>
					<p className={styles.RecipeCardIcon}>
						<img src="/icon-clock.svg" alt="carrot" />
						Cook Time:&nbsp;<strong>~{recipe.cookTime}min.</strong>
					</p>
					<Button
						className={styles.RecipeCardButton}
						variant={featured ? 'primary' : 'secondary'}
						href={recipe.url}
					>
						View Recipe
					</Button>
				</div>
			</Col>
		</Row>
	);
};

export default RecipeCard;
