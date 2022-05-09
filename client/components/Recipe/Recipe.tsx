import Button from '../Button';
import Col from '../Col';
import Row from '../Row';
import Tag from '../Tag';
import styles from './Recipe.module.scss';

interface IRecipe {
	data: any; // TODO: change to generated type from codegen (import)
	className?: string;
	rest?: React.HTMLProps<HTMLElement>;
}

export default function Recipe({ 
	data, 
	className, 
	...rest 
}: IRecipe): React.ReactNode {
	
	return (
		<Row className={`${styles.Recipe} ${className}`} {...rest}>
			<Col sm={2} xs={12}>
				<img
					className={styles.RecipeImage}
					src={data.imgSrc}
					alt={data.name}
				/>
			</Col>
			<Col>
				<h3>
					{data.name} <Tag className="MB-0 ML-H">{data.category}</Tag>
				</h3>
				<p>{data.description}</p>
				<Row>
					<Col xs={12} md={6}>
						<p className={styles.RecipeIcons}>
							<img src="/icon-carrot.svg" alt="carrot" />
							Ingredients: &nbsp;
							<strong>{data.ingredients.length}</strong>
						</p>
					</Col>
					<Col xs={12} md={6}>
						<p className={styles.RecipeIcons}>
							<img src="/icon-clock.svg" alt="carrot" />
							Cook Time:&nbsp;
							<strong>~{data.cookTime}min.</strong>
						</p>
					</Col>
				</Row>
			</Col>
			<Col md={3} xs={12}>
				<Button className={styles.RecipeButton} href={data.url}>
					View Recipe
				</Button>
			</Col>
		</Row>
	);
}
