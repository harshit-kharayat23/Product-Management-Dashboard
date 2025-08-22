import express from "express";
import { createVendor, getVendors } from "../controllers/vendorController.js";

const vendorRouter = express.Router();

vendorRouter.post("/", createVendor);
vendorRouter.get("/", getVendors);

export default vendorRouter;
