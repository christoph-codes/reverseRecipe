import React, { useEffect, useState } from 'react';
import PageTemplate from '../../templates/PageTemplate';
import Section from '../../components/Section';
import SubtractTag from '../../components/SubtractTag';
import AddInput from '../../components/AddInput';
import Button from '../../components/Button';
import styles from '../../styles/Home.module.scss';
import Link from 'next/link';
import { useGetIngredientLazyQuery } from '../../graphql/generated/Generated';
import { gql, useLazyQuery } from '@apollo/client';

export default function Home(): JSX.Element {
    const [ingredient, setIngredient] = React.useState('');
	const [ingredients, setIngredients] = useState([]);
	// const [getIngredient, { data }] = useGetIngredientLazyQuery();
	// const [getIngredient, { data, error, loading }] = useGetIngredientLazyQuery();

	// const handler = () => {
	// 	getIngredient({
	// 		variables: {
	// 			a: { name: 'salt' }
	// 		}
	// 	})
	// }
	
	const GETSHIT = gql`
		query {
			Ingredient( query: { name: "salt" }) {
				_id
				name
			}
		}
	`;
	const [getQuery, { error, loading, data}] = useLazyQuery(GETSHIT);

	function testGet() {
		getQuery();
		console.log(loading);
		console.log(error);
		console.log(data);
	};

	useEffect(() => {
		testGet();
	}, [])
	

	// function addInputCallback() {
	// 	getIngredient({
	// 		variables: { a: { name: ingredient }
	// 	}});

	// 	console.log('data: ', data);

	// 	if (!ingredients) {
	// 		setIngredients([data.ingredient]);
	// 	} else {
	// 		setIngredients([...ingredients, data.ingredient]);
	// 	}
	// }

	const addIngredient = () => {
		setIngredients([ ...ingredients, ingredient.toLowerCase() ]);
	}

    const removeIngredient = (value: string) => {
        const updated = ingredients.filter((ingredient) => ingredient.name !== value);
        setIngredients(updated);
    }

	// figure out how to ensure the ingredients the user can enter come from valid ingredients
	// TODO: make sure the explore page gets the ingredients we are searching for
	// also need a click function for findRecipe button. should navigate to a different page with results...

	return (
		<PageTemplate title="Home | Reverse Recipe" className={styles.Home}>
					<Section containerClass={styles.HomeContainer}>
						<React.Fragment>
							<h1 className="MB-1">Find A Recipe</h1>
							<p className="MB-1H">
								Enter all of your ingredients and we will find the top
								recipe(s) that might interest you!
							</p>
							<AddInput
								name="Enter Ingredients"
								value={ingredient}
								setValue={setIngredient}
								addCallback={addIngredient}
							/>
							<div className={styles.HomeIngredientsList}>
								{ingredients && ingredients.length > 0 &&
									ingredients.map((ingredient, index) => {
										return (
											<SubtractTag
												key={index}
												onClick={() => removeIngredient(ingredient.toLowerCase())}
											>
												{ingredient.name}
											</SubtractTag>
										);
									})}
							</div>
							<Button
							// findRecipe
								onClick={(e) => console.log('clicked button', e)}
								className={styles.HomeRecipeButton}
							>
								Find Recipe
							</Button>
							<hr />
							<p>
								Wanna explore our recipe list?{' '}
								<Link href="/explore">Explore Now</Link>
							</p>

							<Button onClick={()=> console.log('test')}>Test Me</Button>
						</React.Fragment>
					</Section>
				</PageTemplate>
	);
}