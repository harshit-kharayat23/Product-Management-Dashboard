import pool from "../config/database.js";

const ProductVariant = {
  async create(product_id, variant_sku) {
    const [result] = await pool.query(
      `INSERT INTO product_variants (product_id, variant_sku) 
       VALUES (?, ?) 
       ON DUPLICATE KEY UPDATE variant_sku=variant_sku`,
      [product_id, variant_sku]
    );
    return result.insertId;
  },

  async findAllByProduct(product_id) {
    const [rows] = await pool.query(
      `SELECT * FROM product_variants WHERE product_id = ?`,
      [product_id]
    );
    return rows;
  }
};

export default ProductVariant;
