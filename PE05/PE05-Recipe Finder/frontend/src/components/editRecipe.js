import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const API_URL = "https://glorious-goggles-wr67r5x5gw5vhvg77-5050.app.github.dev";

export default function EditRecipe() {
  const [form, setForm] = useState({
    name: "",
    ingredients: "",
    instructions: "",
    category: "",
    cookTime: ""
  });

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchRecipe() {
      const response = await fetch(`${API_URL}/recipe/${params.id}`);

      if (!response.ok) {
        window.alert(`An error occurred: ${response.statusText}`);
        return;
      }

      const recipe = await response.json();

      setForm({
        name: recipe.name,
        ingredients: recipe.ingredients,
        instructions: recipe.instructions,
        category: recipe.category,
        cookTime: recipe.cookTime
      });
    }

    fetchRecipe();
  }, [params.id]);

  function updateForm(value) {
    setForm((previous) => {
      return { ...previous, ...value };
    });
  }

  async function onSubmit(event) {
    event.preventDefault();

    const editedRecipe = { ...form };

    await fetch(`${API_URL}/recipe/${params.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedRecipe)
    });

    navigate("/");
  }

  return (
    <div className="container mt-4">
      <h2>Edit Recipe</h2>

      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label">Recipe Name</label>
          <input
            type="text"
            className="form-control"
            value={form.name}
            onChange={(event) => updateForm({ name: event.target.value })}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Ingredients</label>
          <textarea
            className="form-control"
            value={form.ingredients}
            onChange={(event) => updateForm({ ingredients: event.target.value })}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Cooking Instructions</label>
          <textarea
            className="form-control"
            value={form.instructions}
            onChange={(event) => updateForm({ instructions: event.target.value })}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Category</label>
          <input
            type="text"
            className="form-control"
            value={form.category}
            onChange={(event) => updateForm({ category: event.target.value })}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Cook Time</label>
          <input
            type="text"
            className="form-control"
            value={form.cookTime}
            onChange={(event) => updateForm({ cookTime: event.target.value })}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Update Recipe
        </button>
      </form>
    </div>
  );
}