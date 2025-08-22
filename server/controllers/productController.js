import Product from "../models/productModel.js";

export const createProduct = async (req, res) => {
  try {
    const { subcategory_id, product_code, name, description, default_uom } = req.body;

    if (!subcategory_id || !product_code || !name) {
      return res.status(400).json({ error: "subcategory_id, product_code, and name are required" });
    }

    const id = await Product.create(subcategory_id, product_code, name, description, default_uom);
    res.json({ message: "Product created", id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) return res.status(404).json({ error: "Product not found" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
