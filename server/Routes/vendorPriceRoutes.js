import express from "express";
import { createVendorPrice, getCurrentPrices } from "../controllers/vendorPriceController.js";

const vendorPriceRouter = express.Router();

vendorPriceRouter.post("/", createVendorPrice);
vendorPriceRouter.get("/variant/:variantId", getCurrentPrices);

export default vendorPriceRouter;
