import Tag from '../Tag';
import Button from '../Button';
import Row from '../Row';
import Col from '../Col';
import styles from './RecipeCard.module.scss';

interface IRecipeCard {
	recipe: any; //import from generated
	className?: string;
	featured?: boolean;
}

export default function RecipeCard({ 
	recipe, 
	className, 
	featured
}: IRecipeCard): React.ReactNode {

	return (
		<Row
			className={`${styles.RecipeCard} ${
				featured ? styles.featured : ''
			} ${className}`}
		>
			<Col xs={12} md={5} className={styles.RecipeCardImage}>
				{featured && (
					<Tag
						variant="green"
						className={styles.RecipeCardImageFeaturedTag}
					>
						Featured
					</Tag>
				)}
				<img src={recipe.imgSrc} alt={recipe.name} />
			</Col>
			<Col>
				<div className={styles.RecipeCardContent}>
					<Tag>{recipe.category}</Tag>
					<h3>{recipe.name}</h3>
					<p>{recipe.description}</p>
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
}
