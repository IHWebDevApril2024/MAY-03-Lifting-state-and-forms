import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ recipes, setRecipes }) {
  
  function filterRecipes(query) {
    const filteredRecipes = recipes.filter((recipe) =>
      recipe.name.includes(query)
    );
    setRecipes(filteredRecipes);
  }

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <input
            onChange={(e) => filterRecipes(e.target.value)}
            placeholder="🔍"
            type="text"
          />
        </li>
        <li>
          <Link to="/form">Form page</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
