import RecipeCard from "../components/RecipeCard";
import "./RecipesPage.css";
// destructuring already here {recipes}
function RecipesPage({ recipes, setRecipes }) {
  // const recipes = props.recipes
  // const { recipes } = props; // destructuring

  return (
    <>
      <h3>Recipes</h3>
      <section className="recipes-container">
        {recipes.map((recipe) => {
          return (
            <RecipeCard
              setRecipes={setRecipes}
              key={recipe.id}
              recipe={recipe}
              recipes={recipes}
            />
          );
        })}
      </section>
    </>
  );
}

export default RecipesPage;
