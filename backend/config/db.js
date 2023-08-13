require('dotenv').config(); // Load environment variables from .env file

const mysql = require('mysql');

const db = mysql.createConnection({
  host: "database-2.crobnydairfb.eu-north-1.rds.amazonaws.com",
  port:3306,
  user: "admin",
  password: "sathu0530A.",
  database: "mydb",
});

db.connect((err) => {
  if (err) throw err;
  console.log('MySQL connected');
});

module.exports = db;
