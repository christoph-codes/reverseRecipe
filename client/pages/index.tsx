import { useState } from 'react';

const Home = () => {
    const [ingredient, setIngredient] = useState('');
    const [ingredients, setIngredients] = useState([]);

    // TODO: Make query for getting recipes from list of ingredients
    function findRecipe() {
        console.log('Ingredients:', ingredients);
    }

    function removeIngredient(value) {
        const newIngredients = ingredients
            .filter((ingredient) => ingredient !== value);
        setIngredients(newIngredients);
    }

    return (
        <PageTemplate title="Home | Reverse Recipe" className={styles.Home}>
			<Section containerClass={styles.HomeContainer}>
				<h1 className="MB-1">Find A Recipe</h1>
				<p className="MB-1H">
					Enter all of your ingredients and we will find the top
					recipe(s) that might interest you!
				</p>
				<AddInput
					label="Enter Ingredients"
					value={ingredient}
					setValue={setIngredient}
					addCallback={() =>
						setIngredients([
							...ingredients,
							ingredient.toLowerCase(),
						])
					}
				/>
				<div className={styles.HomeIngredientsList}>
					{ingredients.length > 0 &&
						ingredients.map((ingredient, index) => {
							return (
								<SubtractTag
									key={index}
									onClick={() => removeIngredient(ingredient)}
								>
									{ingredient}
								</SubtractTag>
							);
						})}
				</div>
				<Button
					onClick={(e) => findRecipe(e)}
					className={styles.HomeRecipeButton}
				>
					Find Recipe
				</Button>
				<hr />
				<p>
					Wanna explore our recipe list?{' '}
					<Link href="/explore">Explore Now</Link>
				</p>
			</Section>
		</PageTemplate>
    );
}

export default Home;