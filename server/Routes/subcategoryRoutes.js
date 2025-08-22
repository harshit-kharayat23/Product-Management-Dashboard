import express from "express";
import { createSubcategory, getSubcategories } from "../controllers/subcategoryController.js";

const subCategoryRouter = express.Router();

subCategoryRouter.post("/", createSubcategory);
subCategoryRouter.get("/", getSubcategories);

export default subCategoryRouter;
