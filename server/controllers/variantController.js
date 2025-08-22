import ProductVariant from "../models/productVariantModel.js";
import VariantAttribute from "../models/variantAttributeModel.js";

export const createVariant = async (req, res) => {
  try {
    const { product_id, variant_sku, attributes } = req.body;

    if (!product_id || !variant_sku) {
      return res.status(400).json({ error: "product_id and variant_sku are required" });
    }

    const variantId = await ProductVariant.create(product_id, variant_sku);

    if (attributes && Array.isArray(attributes)) {
      for (const attr of attributes) {
        await VariantAttribute.create(variantId, attr.attribute_def_id, attr.value_text);
      }
    }

    res.json({ message: "Variant created", id: variantId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getVariantsByProduct = async (req, res) => {
  try {
    const { productId } = req.params;
    const variants = await ProductVariant.findAllByProduct(productId);

    // attach attributes
    for (let v of variants) {
      v.attributes = await VariantAttribute.findByVariant(v.id);
    }

    res.json(variants);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
