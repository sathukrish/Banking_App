require('dotenv').config(); // Load environment variables from .env file

const mysql = require('mysql');

const db = mysql.createConnection({
  host: "localhost",
  user: "sathukrish",
  password: "sathu0530A.",
  database: "signup",
});

db.connect((err) => {
  if (err) throw err;
  console.log('MySQL connected');
});

module.exports = db;
