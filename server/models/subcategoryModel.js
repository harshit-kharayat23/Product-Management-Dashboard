import pool from "../config/database.js";

const Subcategory = {
  async create(category_id, name) {
    const [result] = await pool.query(
      `INSERT INTO subcategories (category_id, name) 
       VALUES (?, ?) 
       ON DUPLICATE KEY UPDATE name=VALUES(name)`,
      [category_id, name]
    );
    return result.insertId;
  },

  async findAll() {
    const [rows] = await pool.query(
      `SELECT s.id, s.name, c.name AS category_name 
       FROM subcategories s
       JOIN categories c ON s.category_id = c.id`
    );
    return rows;
  }
};

export default Subcategory;
