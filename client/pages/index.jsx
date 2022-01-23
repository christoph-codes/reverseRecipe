import { useState, useEffect } from 'react';
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
    // key: name (lower case), value: _id
    const [ingredientMap, setIngredientMap] = useState(null);

	const findRecipe = () => {
		const ids = ingredients.map(i => ingredientMap.get(i.toLowerCase()));
        const queryParam = ids.join(',');
        console.log(queryParam);

        if (queryParam) {
            fetch(`https://us-west-2.aws.data.mongodb-api.com/app/reverserecipeapplication-aogyb/endpoint/getRecipesFromIngredients?ingredients=${queryParam}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => response.json())
            .then((data) => {
                // do something with the retrieved recipies
                console.log(data);
            })
        }
	};

	const removeIngredient = (value) => {
		const newIngredients = ingredients.filter(
			(ingredient) => ingredient !== value
		);
		setIngredients(newIngredients);
	};

    useEffect(() => {
        if (!ingredientMap) {
            fetch('https://us-west-2.aws.data.mongodb-api.com/app/reverserecipeapplication-aogyb/endpoint/getIngredients',
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => response.json())
            .then((data) => {
                const dataMap = new Map();
                data.forEach(d => dataMap.set(d.name, d._id));
                setIngredientMap(dataMap);
            });
        }
    }, [ingredientMap])

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
                            onClick={() => findRecipe()}
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
