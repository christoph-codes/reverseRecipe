import { useState } from 'react';
import { RealmAppProvider } from '../providers/RealmAppProvider';
import { ServerProvider } from '../providers/ServerProvider';
import PageTemplate from '../templates/PageTemplate';
import Section from '../components/Section';
import SubtractTag from '../components/SubtractTag';
import AddInput from '../components/AddInput';
import Button from '../components/Button';
import styles from '../styles/Home.module.scss';
import Link from 'next/link';
import * as dotenv from 'dotenv';
import { PublicAccess } from '../utils/PublicAccess';

dotenv.config({ path: '../.env' });

export function Home() {
    const [ingredient, setIngredient] = useState('');
    const [ingredients, setIngredients] = useState([]);

    function removeIngredient(value) {
        const updated = ingredients.filter((ingredient) => ingredient !== value);
        setIngredients(updated);
    }

	// figure out how to ensure the ingredients the user can enter come from valid ingredients
	// TODO: make sure the explore page gets the ingredients we are searching for
	// also need a click function for findRecipe button. should navigate to a different page with results...

	return (
		<RealmAppProvider appId={process.env.APP_ID}>
			<ServerProvider>
				<PublicAccess>
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
						</Section>
					</PageTemplate>
				</PublicAccess>
			</ServerProvider>
		</RealmAppProvider>
	);
}
