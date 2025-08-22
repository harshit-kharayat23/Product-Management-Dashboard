import express from "express";
import dotenv from "dotenv";
import pool from "./config/database.js";
import router from "./Routes/categoryRoutes.js";
import subCategoryRouter from "./Routes/subcategoryRoutes.js";
import productRouter from "./Routes/productRoutes.js";
import attributeRouter from "./Routes/attributeRoutes.js";
import variantRouter from "./Routes/variantRoutes.js";
import vendorRouter from "./Routes/vendorRoutes.js";
import vendorListingRouter from "./Routes/vendorListingRoutes.js";
import vendorPriceRouter from "./Routes/vendorPriceRoutes.js";
import photoRouter from "./Routes/photoRoutes.js";

dotenv.config();
const app = express();

app.use(express.json());



// Routes
app.use("/api/categories", router);
app.use("/api/subcategories",subCategoryRouter);
app.use("/api/products",productRouter);
app.use("/api/attributes", attributeRouter);
app.use("/api/variants", variantRouter);
app.use("/api/vendors", vendorRouter);
app.use("/api/vendor-listings", vendorListingRouter);
app.use("/api/vendor-prices", vendorPriceRouter);
app.use("/api/photos", photoRouter);
app.use("/uploads", express.static("uploads")); 



app.get("/test-db", async (req, res) => {
  try {
    const [rows] = await pool.query("SHOW TABLES");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT_NUMBER || 7777;
console.log("PORT:", PORT);

app.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}`);
});
