import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import RecipesPage from "./pages/RecipesPage";
import recipesArray from "./data/recipes.json";
import FormPage from "./pages/FormPage";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://aiyzzjbjaeirqtbcheio.supabase.co",
  import.meta.env.VITE_SUPABASE_KEY
);

function App() {
  const [recipes, setRecipes] = useState([]);
  const [originalRecipes] = useState(recipesArray);

  const getData = async () => {
    const { data, error } = await supabase.from("recipes").select();
    if (error) {
      console.log("Error fetching data:", error.message);
      return;
    }
    console.log("Data fetched successfully:", data);
    setRecipes(data);
  };

  return (
    <>
      <button onClick={getData}>Get Data</button>
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
