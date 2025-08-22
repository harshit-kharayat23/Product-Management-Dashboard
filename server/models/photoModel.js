import pool from "../config/database.js";

const ProductPhoto = {
  async create(product_id, url, is_primary = false, alt_text = null) {
    const [result] = await pool.query(
      `INSERT INTO product_photos (product_id, url, is_primary, alt_text)
       VALUES (?, ?, ?, ?)`,
      [product_id, url, is_primary, alt_text]
    );
    return result.insertId;
  },

  async findByProduct(product_id) {
    const [rows] = await pool.query(
      "SELECT * FROM product_photos WHERE product_id = ?",
      [product_id]
    );
    return rows;
  }
};

const VariantPhoto = {
  async create(variant_id, url, is_primary = false, alt_text = null) {
    const [result] = await pool.query(
      `INSERT INTO variant_photos (variant_id, url, is_primary, alt_text)
       VALUES (?, ?, ?, ?)`,
      [variant_id, url, is_primary, alt_text]
    );
    return result.insertId;
  },

  async findByVariant(variant_id) {
    const [rows] = await pool.query(
      "SELECT * FROM variant_photos WHERE variant_id = ?",
      [variant_id]
    );
    return rows;
  }
};

export { ProductPhoto, VariantPhoto };
