import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_URL = "https://glorious-goggles-wr67r5x5gw5vhvg77-5050.app.github.dev";

export default function RecipeDetails() {
  const [recipe, setRecipe] = useState(null);
  const params = useParams();

  useEffect(() => {
    async function getRecipe() {
      const response = await fetch(`${API_URL}/recipe/${params.id}`);

      if (!response.ok) {
        window.alert(`An error occurred: ${response.statusText}`);
        return;
      }

      const recipe = await response.json();
      setRecipe(recipe);
    }

    getRecipe();
  }, [params.id]);

  if (!recipe) {
    return <p>Select a recipe to view details.</p>;
  }

  return (
    <div className="card p-4">
      <h3>{recipe.name}</h3>
      <p><strong>Category:</strong> {recipe.category}</p>
      <p><strong>Cook Time:</strong> {recipe.cookTime}</p>
      <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
      <p><strong>Instructions:</strong> {recipe.instructions}</p>
    </div>
  );
}