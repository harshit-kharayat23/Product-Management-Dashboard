import express from "express";
import { createAttributeDef, getAttributes } from "../controllers/attributeController.js";

const attributeRouter = express.Router();

attributeRouter.post("/", createAttributeDef);
attributeRouter.get("/", getAttributes);

export default attributeRouter;
