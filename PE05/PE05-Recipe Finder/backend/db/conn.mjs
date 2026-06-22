import { MongoClient } from "mongodb";

const connectionString = process.env.ATLAS_URI || "";
const client = new MongoClient(connectionString);

let conn;

try {
  conn = await client.connect();
  console.log("Connected to MongoDB Atlas");
} catch (error) {
  console.error("MongoDB connection error:", error);
}

let db = conn.db("pe05_recipes");

export default db;