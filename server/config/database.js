import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

console.log("ENV LOADED:", {
  user: process.env.DATABASE_USER,
  pass: process.env.DATABASE_PASS,
  host: process.env.DATABASE_HOST,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,

});

const pool=async()=> {
  return await mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASS,
  });
}

export default pool;