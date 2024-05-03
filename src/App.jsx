import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import RecipesPage from "./pages/RecipesPage";
import recipesArray from "./data/recipes.json";
import FormPage from "./pages/FormPage";

function App() {
  const [recipes, setRecipes] = useState(recipesArray);
  const [originalRecipes] = useState(recipesArray);

  return (
    <>
      <Navbar setRecipes={setRecipes} recipes={originalRecipes} />
      <Routes>
        <Route
          path="/"
          element={<RecipesPage setRecipes={setRecipes} recipes={recipes} />}
        />
        <Route
          path="/form"
          element={<FormPage setRecipes={setRecipes} recipes={recipes} />}
        />
      </Routes>
    </>
  );
}

export default App;
