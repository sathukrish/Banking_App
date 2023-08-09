const jwt = require('jsonwebtoken');
const db = require('../config/db');

exports.login = (req, res) => {
  const { username, password } = req.body;
  const query = 'SELECT * FROM users WHERE username = ? AND password = ?';

  db.query(query, [username, password], (err, results) => {
    if (err) {
      res.status(500).json({ error: 'An error occurred' });
    } else {
      if (results.length > 0) {
        // Generate a JWT token using the environment variable for the secret key
        const token = jwt.sign({ username: results[0].username }, "461eec55d20ea39dba7ff781f5cba08823b0e58b6e5079613d4e20b4312cfe88");
        res.json({ message: 'Login successful', token: token });
      } else {
        res.status(401).json({ error: 'Invalid credentials' });
      }
    }
  });
};

