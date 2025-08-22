import Vendor from "../models/vendorModel.js";

export const createVendor = async (req, res) => {
  try {
    const { vendor_code, name, gstin, contact_info, rating, active } = req.body;
    if (!vendor_code || !name) return res.status(400).json({ error: "vendor_code and name required" });

    const id = await Vendor.create(vendor_code, name, gstin, JSON.stringify(contact_info || {}), rating, active ?? true);
    res.json({ message: "Vendor created", id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getVendors = async (req, res) => {
  try {
    const vendors = await Vendor.findAll();
    res.json(vendors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
