import { ProductPhoto, VariantPhoto } from "../models/photoModel.js";

export const uploadPhoto = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: "No file uploaded" });

    // in real production -> upload to S3 and store URL
    const fileUrl = `/uploads/${req.file.filename}`;

    res.json({ url: fileUrl });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const addProductPhoto = async (req, res) => {
  try {
    const { product_id, url, is_primary, alt_text } = req.body;
    if (!product_id || !url) return res.status(400).json({ error: "product_id and url are required" });

    const id = await ProductPhoto.create(product_id, url, is_primary, alt_text);
    res.json({ message: "Product photo added", id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const addVariantPhoto = async (req, res) => {
  try {
    const { variant_id, url, is_primary, alt_text } = req.body;
    if (!variant_id || !url) return res.status(400).json({ error: "variant_id and url are required" });

    const id = await VariantPhoto.create(variant_id, url, is_primary, alt_text);
    res.json({ message: "Variant photo added", id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
