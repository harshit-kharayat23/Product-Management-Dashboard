import pool from "../config/database.js";

const VendorListing = {
  async create(variant_id, vendor_id, vendor_sku, pack_size, currency = "INR", min_order_qty = 0, lead_time_days = 0) {
    const [result] = await pool.query(
      `INSERT INTO vendor_listings (variant_id, vendor_id, vendor_sku, pack_size, currency, min_order_qty, lead_time_days)
       VALUES (?, ?, ?, ?, ?, ?, ?)
       ON DUPLICATE KEY UPDATE 
         vendor_sku = VALUES(vendor_sku),
         pack_size = VALUES(pack_size),
         currency = VALUES(currency),
         min_order_qty = VALUES(min_order_qty),
         lead_time_days = VALUES(lead_time_days)`,
      [variant_id, vendor_id, vendor_sku, pack_size, currency, min_order_qty, lead_time_days]
    );
    return result.insertId;
  },

  async findByVariant(variant_id) {
    const [rows] = await pool.query(
      `SELECT vl.*, v.name AS vendor_name, v.vendor_code 
       FROM vendor_listings vl
       JOIN vendors v ON vl.vendor_id = v.id
       WHERE vl.variant_id = ?`,
      [variant_id]
    );
    return rows;
  }
};

export default VendorListing;
