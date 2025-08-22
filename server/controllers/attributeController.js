import AttributeDef from "../models/attributeDefModel.js";

export const createAttributeDef = async (req, res) => {
  try {
    const { name, value_type } = req.body;
    if (!name) return res.status(400).json({ error: "name is required" });

    const id = await AttributeDef.create(name, value_type || "text");
    res.json({ message: "Attribute definition created", id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getAttributes = async (req, res) => {
  try {
    const attributes = await AttributeDef.findAll();
    res.json(attributes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
