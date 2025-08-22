import express from "express";
import { createVendorListing, getVendorListings } from "../controllers/vendorListingController.js";

const vendorListingRouter = express.Router();

vendorListingRouter.post("/", createVendorListing);
vendorListingRouter.get("/variant/:variantId", getVendorListings);

export default vendorListingRouter;
