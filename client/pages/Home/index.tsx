import React from 'react';
import PageTemplate from '../../templates/PageTemplate';
import Section from '../../components/Section';
import SubtractTag from '../../components/SubtractTag';
import AddInput from '../../components/AddInput';
import Button from '../../components/Button';
import styles from '../../styles/Home.module.scss';
import Link from 'next/link';
import { useRealmContext } from '../../providers/RealmProvider';
import { IngredientSortByInput, IngredientsQuery, useIngredientsLazyQuery } from '../../graphql/generated/graphql';

const Home = () => {
    const { logOut } = useRealmContext();
    
    const [ingredient, setIngredient] = React.useState<string>('');
    const [ingredients, setIngredients] = React.useState<string[]>([]);

    const [getTestIngredients, { data, error, loading }] = useIngredientsLazyQuery();

    const addIngredient = () => {
            setIngredients([ ...ingredients, ingredient.toLowerCase() ]);
        }

    const removeIngredient = (value: string) => {
        const updated = ingredients.filter((ingredient) => ingredient !== value);
        setIngredients(updated);
    }

    if (error) console.log(error);
    if (loading) console.log('loading');
    if (data) console.log(data);

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
                    // findRecipe
                        onClick={() => {
                            if (ingredients.length) {
                                getTestIngredients({ variables: {
                                    sortBy: IngredientSortByInput.NameAsc,
                                    query: { name_in: ingredients },
                                    limit: 50,
                                }});
                            } else {
                                console.log('none');
                            }

                            if (data) {
                                console.log(data);
                            }
                        }}
                        className={styles.HomeRecipeButton}
                    >
                        Find Recipe
                    </Button>
                    <hr />
                    <p>
                        Wanna explore our recipe list?{' '}
                        <Link href="/explore">Explore Now</Link>
                    </p>

                    <Button onClick={() => {
                        logOut();
                    }}>Log Out</Button>
                </>
            </Section>
        </PageTemplate>
    );
}

export default Home;
