import express from "express";
import dotenv from "dotenv";
import { dbConfig } from "./config/database.js";

dotenv.config();
const app = express();


app.get("/", (req, res) => {
  res.send("Hello world");
});

const PORT = process.env.PORT_NUMBER || 7777;
console.log("PORT:", process.env.PORT_NUMBER);

dbConfig()
  .then(() => {
    console.log("✅ Database connected");
    app.listen(PORT, () => {
      console.log(`🚀 Server listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Database connection failed:", err.message);
  });
