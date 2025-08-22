import pool from "../config/database.js";

const Vendor = {
  async create(vendor_code, name, gstin, contact_info = null, rating = null, active = true) {
    const [result] = await pool.query(
      `INSERT INTO vendors (vendor_code, name, gstin, contact_info, rating, active)
       VALUES (?, ?, ?, ?, ?, ?)
       ON DUPLICATE KEY UPDATE 
         name = VALUES(name),
         gstin = VALUES(gstin),
         contact_info = VALUES(contact_info),
         rating = VALUES(rating),
         active = VALUES(active)`,
      [vendor_code, name, gstin, contact_info, rating, active]
    );
    return result.insertId;
  },

  async findAll() {
    const [rows] = await pool.query("SELECT * FROM vendors");
    return rows;
  }
};

export default Vendor;
