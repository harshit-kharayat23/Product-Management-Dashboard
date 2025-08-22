import pool from "../config/database.js";

const AttributeDef = {
  async create(name, value_type = "text") {
    const [result] = await pool.query(
      `INSERT INTO attribute_defs (name, value_type) 
       VALUES (?, ?) 
       ON DUPLICATE KEY UPDATE value_type = VALUES(value_type)`,
      [name, value_type]
    );
    return result.insertId;
  },

  async findAll() {
    const [rows] = await pool.query("SELECT * FROM attribute_defs");
    return rows;
  }
};

export default AttributeDef;
