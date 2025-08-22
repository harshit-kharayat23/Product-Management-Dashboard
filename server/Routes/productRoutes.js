import express from "express";
import { createProduct, getProducts, getProductById } from "../controllers/productController.js";

const productRouter = express.Router();

productRouter.post("/", createProduct);
productRouter.get("/", getProducts);
productRouter.get("/:id", getProductById);

export default productRouter;
