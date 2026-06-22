import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";

const router = express.Router();

// Get all recipes
router.get("/", async (req, res) => {
  const collection = db.collection("recipes");
  const results = await collection.find({}).toArray();

  res.status(200).send(results);
});

// Get one recipe by ID
router.get("/:id", async (req, res) => {
  const collection = db.collection("recipes");

  const query = {
    _id: new ObjectId(req.params.id)
  };

  const result = await collection.findOne(query);

  if (!result) {
    res.status(404).send("Recipe not found");
  } else {
    res.status(200).send(result);
  }
});

// Create a recipe
router.post("/", async (req, res) => {
  const newRecipe = {
    name: req.body.name,
    ingredients: req.body.ingredients,
    instructions: req.body.instructions,
    category: req.body.category,
    cookTime: req.body.cookTime
  };

  const collection = db.collection("recipes");
  const result = await collection.insertOne(newRecipe);

  res.status(201).send(result);
});

// Update a recipe
router.patch("/:id", async (req, res) => {
  const query = {
    _id: new ObjectId(req.params.id)
  };

  const updates = {
    $set: {
      name: req.body.name,
      ingredients: req.body.ingredients,
      instructions: req.body.instructions,
      category: req.body.category,
      cookTime: req.body.cookTime
    }
  };

  const collection = db.collection("recipes");
  const result = await collection.updateOne(query, updates);

  res.status(200).send(result);
});

// Delete a recipe
router.delete("/:id", async (req, res) => {
  const query = {
    _id: new ObjectId(req.params.id)
  };

  const collection = db.collection("recipes");
  const result = await collection.deleteOne(query);

  res.status(200).send(result);
});

export default router;