import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = "https://glorious-goggles-wr67r5x5gw5vhvg77-5050.app.github.dev";

export default function CreateRecipe() {
  const [form, setForm] = useState({
    name: "",
    ingredients: "",
    instructions: "",
    category: "",
    cookTime: ""
  });

  const navigate = useNavigate();

  function updateForm(value) {
    setForm((previous) => {
      return { ...previous, ...value };
    });
  }

  async function onSubmit(event) {
    event.preventDefault();

    const newRecipe = { ...form };

    await fetch(`${API_URL}/recipe`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newRecipe)
    });

    setForm({
      name: "",
      ingredients: "",
      instructions: "",
      category: "",
      cookTime: ""
    });

    navigate("/");
  }

  return (
    <div className="container mt-4">
      <h2>Add Recipe</h2>

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

        <button type="submit" className="btn btn-success">
          Add Recipe
        </button>
      </form>
    </div>
  );
}