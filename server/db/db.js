// db.js
const mysql = require('mysql2');
require('dotenv').config(); // Load environment variables from .env file

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost', // Fallback to localhost
  user: process.env.DB_USER || 'root', // Fallback to root
  password: process.env.DB_PASSWORD || '0000', // Fallback to default password
  database: process.env.DB_NAME || 'food', // Fallback to rating database
});

// Test the connection to the database
pool.getConnection((err, connection) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
  connection.release(); // Release the connection back to the pool
});



module.exports = pool;
