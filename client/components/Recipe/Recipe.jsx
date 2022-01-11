import { string, arrayOf, shape } from 'prop-types';
import Button from '../Button';
import Col from '../Col';
import Row from '../Row';
import Tag from '../Tag';
import styles from './Recipe.module.scss';

const Recipe = ({ data, className, ...rest }) => {
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
							Ingredients:{' '}
							<strong>{data.ingredients.length}</strong>
						</p>
					</Col>
					<Col xs={12} md={6}>
						<p className={styles.RecipeIcons}>
							<img src="/icon-clock.svg" alt="carrot" />
							Cook Time: <strong>~{data.cookTime}min.</strong>
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
};

export default Recipe;

Recipe.propTypes = {
	data: shape({
		name: string.isRequired,
		imgSrc: string.isRequired,
		description: string.isRequired,
		category: string.isRequired,
		ingredients: arrayOf(string).isRequired,
		cookTime: string.isRequired,
		url: string.isRequired,
	}).isRequired,
	className: string,
};

Recipe.defaultProps = {
	className: '',
};
