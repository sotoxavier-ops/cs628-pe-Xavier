import React from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar";
import RecipeList from "./components/recipeList";
import CreateRecipe from "./components/createRecipe";
import EditRecipe from "./components/editRecipe";
import RecipeDetails from "./components/recipeDetails";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<RecipeList />}>
          <Route path="recipe/:id" element={<RecipeDetails />} />
        </Route>
        <Route path="/create" element={<CreateRecipe />} />
        <Route path="/edit/:id" element={<EditRecipe />} />
      </Routes>
    </div>
  );
}

export default App;