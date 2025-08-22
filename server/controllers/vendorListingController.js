import VendorListing from "../models/vendorListingModel.js";

export const createVendorListing = async (req, res) => {
  try {
    const { variant_id, vendor_id, vendor_sku, pack_size, currency, min_order_qty, lead_time_days } = req.body;

    if (!variant_id || !vendor_id || !pack_size) {
      return res.status(400).json({ error: "variant_id, vendor_id, and pack_size are required" });
    }

    const id = await VendorListing.create(variant_id, vendor_id, vendor_sku, pack_size, currency, min_order_qty, lead_time_days);
    res.json({ message: "Vendor Listing created", id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getVendorListings = async (req, res) => {
  try {
    const { variantId } = req.params;
    const listings = await VendorListing.findByVariant(variantId);
    res.json(listings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
