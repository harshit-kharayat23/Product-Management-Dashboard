import pool from "../config/database.js";

const VariantAttribute = {
  async create(variant_id, attribute_def_id, value_text) {
    const [result] = await pool.query(
      `INSERT INTO variant_attributes (variant_id, attribute_def_id, value_text)
       VALUES (?, ?, ?)
       ON DUPLICATE KEY UPDATE value_text = VALUES(value_text)`,
      [variant_id, attribute_def_id, value_text]
    );
    return result.insertId;
  },

  async findByVariant(variant_id) {
    const [rows] = await pool.query(
      `SELECT va.id, ad.name AS attribute_name, va.value_text
       FROM variant_attributes va
       JOIN attribute_defs ad ON va.attribute_def_id = ad.id
       WHERE va.variant_id = ?`,
      [variant_id]
    );
    return rows;
  }
};

export default VariantAttribute;
