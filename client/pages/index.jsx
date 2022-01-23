import { useState } from 'react';
import PageTemplate from '../templates/PageTemplate';
import Section from '../components/Section';
import SubtractTag from '../components/SubtractTag';
import AddInput from '../components/AddInput';
import Button from '../components/Button';
import styles from '../styles/Home.module.scss';
import Link from 'next/link';
import { AppProvider } from '../graphql/serverApp';
import ServerProvider from '../graphql/serverProvider';

const Home = () => {
	const [ingredient, setIngredient] = useState('');
	const [ingredients, setIngredients] = useState([]);
	const findRecipe = () => {
		console.log('Ingredients:', ingredients);
		// TODO: Make query to call to find recipes based on ingredients
	};
	const removeIngredient = (value) => {
		const newIngredients = ingredients.filter(
			(ingredient) => ingredient !== value
		);
		setIngredients(newIngredients);
	};

	return (
        <AppProvider appID={"reverserecipeapplication-aogyb"}>
            <ServerProvider>
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
            </ServerProvider>
        </AppProvider>
	);
};

export default Home;
