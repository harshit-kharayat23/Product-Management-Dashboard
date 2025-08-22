// config/db.js
import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

console.log("ENV LOADED:", {
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  pass: process.env.DATABASE_PASS,
  db: process.env.DATABASE_NAME,
});

const pool = mysql.createPool({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASS,
  database: process.env.DATABASE_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;
