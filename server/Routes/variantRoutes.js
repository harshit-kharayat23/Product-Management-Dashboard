import express from "express";
import { createVariant, getVariantsByProduct } from "../controllers/variantController.js";

const variantRouter = express.Router();

variantRouter.post("/", createVariant);
variantRouter.get("/product/:productId", getVariantsByProduct);

export default variantRouter;
