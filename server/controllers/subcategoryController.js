import Subcategory from "../models/subcategoryModel.js";

export const createSubcategory = async (req, res) => {
  try {
    const { category_id, name } = req.body;
    if (!category_id || !name) {
      return res.status(400).json({ error: "category_id and name are required" });
    }

    const id = await Subcategory.create(category_id, name);
    res.json({ message: "Subcategory created", id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getSubcategories = async (req, res) => {
  try {
    const subcategories = await Subcategory.findAll();
    res.json(subcategories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
