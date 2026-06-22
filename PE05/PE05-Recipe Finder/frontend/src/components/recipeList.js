import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

const API_URL = "https://glorious-goggles-wr67r5x5gw5vhvg77-5050.app.github.dev";

export default function RecipeList() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function getRecipes() {
      const response = await fetch(`${API_URL}/recipe`);

      if (!response.ok) {
        window.alert(`An error occurred: ${response.statusText}`);
        return;
      }

      const recipes = await response.json();
      setRecipes(recipes);
    }

    getRecipes();
  }, []);

  async function deleteRecipe(id) {
    await fetch(`${API_URL}/recipe/${id}`, {
      method: "DELETE"
    });

    const newRecipes = recipes.filter((recipe) => recipe._id !== id);
    setRecipes(newRecipes);
  }

  return (
    <div className="container mt-4">
      <h2>Recipe List</h2>

      <div className="list-group mb-4">
        {recipes.map((recipe) => (
          <div
            className="list-group-item d-flex justify-content-between align-items-center"
            key={recipe._id}
          >
            <Link to={`/recipe/${recipe._id}`}>{recipe.name}</Link>

            <div>
              <Link className="btn btn-sm btn-primary me-2" to={`/edit/${recipe._id}`}>
                Edit
              </Link>

              <button
                className="btn btn-sm btn-danger"
                onClick={() => deleteRecipe(recipe._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <Outlet />
    </div>
  );
}