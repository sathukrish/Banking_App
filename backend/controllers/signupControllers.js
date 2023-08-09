// Assuming you have a database connection established as 'db'
const db = require('../config/db');


exports.signup = (req, res) => {
    const { username, password, email } = req.body;
  
    // Check if the username or email already exists in the database
    const checkQuery = 'SELECT * FROM users WHERE username = ? OR email = ?';
    db.query(checkQuery, [username, email], (checkErr, checkResults) => {
      if (checkErr) {
        console.error(checkErr);
        res.status(500).json({ message: 'An error occurred while checking for existing user.' });
      } else {
        if (checkResults.length > 0) {
          // User with the same username or email already exists
          res.status(409).json({ message: 'Username or email already exists. Please choose a different one.' });
        } else {
          // Insert the new user data into the database
          const insertQuery = 'INSERT INTO users (username, password, email) VALUES (?, ?, ?)';
          db.query(insertQuery, [username, password, email], (insertErr, insertResult) => {
            if (insertErr) {
              console.error(insertErr);
              res.status(500).json({ message: 'Error creating user.' });
            } else {
              res.status(201).json({ message: 'User registration successful.' });
            }
          });
        }
      }
    });
  };
  