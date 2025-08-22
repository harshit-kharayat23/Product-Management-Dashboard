import express from "express";
import multer from "multer";
import { uploadPhoto, addProductPhoto, addVariantPhoto } from "../controllers/photoController.js";

const photoRouter = express.Router();
const upload = multer({ dest: "uploads/" });

// Upload file and return URL
photoRouter.post("/upload", upload.single("file"), uploadPhoto);

// Save photo mapping
photoRouter.post("/product", addProductPhoto);
photoRouter.post("/variant", addVariantPhoto);

export default photoRouter;
