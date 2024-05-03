import { useState } from "react";
import "./FormPage.css";
import { useNavigate } from "react-router-dom";

function FormPage({ recipes, setRecipes }) {
  const [displayModal, setDisplayModal] = useState(false);
  const [name, setName] = useState("");
  const [calories, setCalories] = useState("");
  const [servings, setServings] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    const newRecipe = {
      name,
      calories,
      servings,
      image,
      id: recipes.length + Math.floor(Math.random() * 999999999999),
    };

    setRecipes([newRecipe, ...recipes]);
    // recipes.unshift(newRecipe); this works but we should create copies.
    // setRecipes(recipes);

    setName("");
    setCalories("");
    setImage("");
    setServings("");

    setDisplayModal(true);
  }

  return (
    <>
      <h2>This is the form page</h2>
      <form onSubmit={(event) => handleSubmit(event)}>
        <label htmlFor="name">Name</label>
        <input
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Banana pie"
          name="name"
          type="text"
        />
        <label htmlFor="calories">Calories</label>
        <input
          required
          value={calories}
          onChange={(event) => setCalories(event.target.value)}
          placeholder="100"
          name="calories"
          type="number"
        />
        <label htmlFor="servings">Servings</label>
        <input
          required
          value={servings}
          onChange={(event) => setServings(event.target.value)}
          placeholder="1"
          name="servings"
          type="number"
        />
        <label htmlFor="image">Image</label>
        <input
          required
          value={image}
          onChange={(event) => setImage(event.target.value)}
          placeholder="http://www.images.com/banana"
          name="image"
          type="text"
        />
        <button type="submit">Submit</button>
      </form>
      {displayModal && (
        <>
          <div className="blurred-background">
            <div className="modal">
              <p>Your recipe has been created!</p>
              <button
                onClick={() => {
                  setDisplayModal(false);
                  navigate("/");
                }}
              >
                Ok
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default FormPage;
