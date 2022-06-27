import React from 'react';
import PageTemplate from '../../templates/PageTemplate';
import Section from '../../components/Section';
import SubtractTag from '../../components/SubtractTag';
import AddInput from '../../components/AddInput';
import Button from '../../components/Button';
import styles from '../../styles/Home.module.scss';
import Link from 'next/link';
import { useIngredientsContext } from '../../providers/IngredientProvider';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
    const router = useRouter();
    const { queryInfo, updateQueryInfo } = useIngredientsContext();

    const [ingredient, setIngredient] = React.useState<string>('');
    const [ingredients, setIngredients] = React.useState<string[]>([]);

    const addIngredient = () => {
            setIngredients([ ...ingredients, ingredient.toLowerCase() ]);
        }

    const removeIngredient = (value: string) => {
        const updated = ingredients.filter((ingredient) => ingredient !== value);
        setIngredients(updated);
    }

    const findRecipes = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (ingredients.length) {
            updateQueryInfo({
                names: ingredients,
                ids: queryInfo ? queryInfo.ids : []
            });
        }
        router.push(ingredients.length ? '/results' : '/explore');
    }

    return (
        <PageTemplate title="Home | Reverse Recipe" className={styles.Home}>
            <Section containerClass={styles.HomeContainer}>
                <>
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
                                {ingredient}
                            </SubtractTag>
                            );
                        })}
                    </div>
                    <Button
                        disabled={!ingredients.length}
                        className={styles.HomeRecipeButton}
                        onClick={(e: React.MouseEvent<HTMLButtonElement>) => findRecipes(e)}
                    >
                        {!ingredients.length ? 'Explore Recipe' : ingredients.length > 1 ? 'Find Recipes' : 'Find Recipe'}
                    </Button>
                    <hr />
                    <p>
                        Wanna explore our recipe list?{' '}
                        <Link href="/explore">Explore Now</Link>
                    </p>
                </>
            </Section>
        </PageTemplate>
    );
}

export default Home;
