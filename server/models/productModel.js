import pool from "../config/database.js";

const Product = {
  async create(subcategory_id, product_code, name, description, default_uom = "unit") {
    const [result] = await pool.query(
      `INSERT INTO products (subcategory_id, product_code, name, description, default_uom)
       VALUES (?, ?, ?, ?, ?)
       ON DUPLICATE KEY UPDATE 
         name = VALUES(name), 
         description = VALUES(description), 
         default_uom = VALUES(default_uom)`,
      [subcategory_id, product_code, name, description, default_uom]
    );
    return result.insertId;
  },

  async findAll() {
    const [rows] = await pool.query(
      `SELECT p.id, p.product_code, p.name, p.description, p.default_uom,
              s.name AS subcategory_name, c.name AS category_name
       FROM products p
       JOIN subcategories s ON p.subcategory_id = s.id
       JOIN categories c ON s.category_id = c.id`
    );
    return rows;
  },

  async findById(id) {
    const [rows] = await pool.query(
      `SELECT p.*, s.name AS subcategory_name, c.name AS category_name
       FROM products p
       JOIN subcategories s ON p.subcategory_id = s.id
       JOIN categories c ON s.category_id = c.id
       WHERE p.id = ?`,
      [id]
    );
    return rows[0];
  }
};

export default Product;
