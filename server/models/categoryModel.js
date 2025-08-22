import pool from "../config/database.js";

const Category = {
  async create(name) {
    const [result] = await pool.query(
      "INSERT INTO categories (name) VALUES (?) ON DUPLICATE KEY UPDATE name=name",
      [name]
    );
    return result.insertId;
  },

  async findAll() {
    const [rows] = await pool.query("SELECT * FROM categories");
    return rows;
  },

  async findById(id) {
    const [rows] = await pool.query("SELECT * FROM categories WHERE id = ?", [id]);
    return rows[0];
  }
};

export default Category;
