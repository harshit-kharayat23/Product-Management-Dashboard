import pool from "../config/database.js";

const VendorPrice = {
  async create(vendor_listing_id, price, effective_from) {
    const [result] = await pool.query(
      `INSERT INTO vendor_prices (vendor_listing_id, price, effective_from)
       VALUES (?, ?, ?)
       ON DUPLICATE KEY UPDATE price = VALUES(price)`,
      [vendor_listing_id, price, effective_from]
    );
    return result.insertId;
  },

  async getCurrentPricesByVariant(variant_id) {
    const [rows] = await pool.query(
      `SELECT v.id AS vendor_id, v.name AS vendor_name, vl.vendor_sku,
              vp.price, vl.pack_size, (vp.price / vl.pack_size) AS price_per_unit
       FROM vendor_listings vl
       JOIN vendors v ON v.id = vl.vendor_id
       JOIN vendor_prices vp ON vp.vendor_listing_id = vl.id
       WHERE vl.variant_id = ?
         AND vp.effective_from = (
            SELECT MAX(vp2.effective_from)
            FROM vendor_prices vp2
            WHERE vp2.vendor_listing_id = vl.id AND vp2.effective_from <= CURDATE()
         )
       ORDER BY price_per_unit ASC`,
      [variant_id]
    );
    return rows;
  }
};

export default VendorPrice;
