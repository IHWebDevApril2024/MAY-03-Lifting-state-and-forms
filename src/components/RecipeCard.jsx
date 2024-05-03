import "./RecipeCard.css";
import { useState } from "react";

function RecipeCard({ recipe, setRecipes, recipes }) {
  const { name, image, servings, calories, id } = recipe;
  const [blur, setBlur] = useState(true);

  const deleteRecipe = (recipeId) => {
    // We need to create a filter that returns the array of recipes without the recipe that we pass
    const filteredRecipes = recipes.filter((recipe) => recipe.id !== recipeId);

    setRecipes(filteredRecipes);
  };

  return (
    <div className="recipe-card-container">
      <h4>{name}</h4>
      <img
        onClick={() => setBlur(!blur)}
        className={blur ? "blurry" : ""}
        src={image}
        alt={name}
      />
      <p>Calories: {calories}</p>
      <p>Servings: {servings}</p>
      <button onClick={() => deleteRecipe(id)}>Delete</button>
    </div>
  );
}

export default RecipeCard;
