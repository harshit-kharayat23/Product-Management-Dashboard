import VendorPrice from "../models/vendorPriceModel.js";

export const createVendorPrice = async (req, res) => {
  try {
    const { vendor_listing_id, price, effective_from } = req.body;

    if (!vendor_listing_id || !price || !effective_from) {
      return res.status(400).json({ error: "vendor_listing_id, price, and effective_from are required" });
    }

    const id = await VendorPrice.create(vendor_listing_id, price, effective_from);
    res.json({ message: "Vendor Price added", id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getCurrentPrices = async (req, res) => {
  try {
    const { variantId } = req.params;
    const prices = await VendorPrice.getCurrentPricesByVariant(variantId);
    res.json(prices);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
