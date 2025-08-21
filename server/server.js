import express from "express";
import dotenv from "dotenv";
import pool from "./config/database.js";

dotenv.config();
const app = express();

app.use(express.json())





// app.use("/api/products",productRoutes); 
// app.use("api/import",importRoutes);

const PORT = process.env.PORT_NUMBER || 7777;
console.log("PORT:", process.env.PORT_NUMBER);

pool()
  .then(() => {
    console.log("✅ Database connected");
    app.listen(PORT, () => {
      console.log(`🚀 Server listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Database connection failed:", err.message);
  });
