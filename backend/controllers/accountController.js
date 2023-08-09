const db = require('../config/db');

// exports.getAccountDetails = (req, res) => {
//   const query = 'SELECT * FROM fixed_deposits';
//   db.query(query, (err, result) => {
//     if (err) {
//       console.error(err);
//       res.status(500).json({ message: 'Error fetching account details.' });
//     } else {
//       res.status(200).json(result);
//     }
//   });
// };

exports.getAccountDetailsByUsername = (req, res) => {
    const { username } = req.params; // Assuming you pass the username as a URL parameter
    const query = 'SELECT * FROM fixed_deposits WHERE username = ?';
    db.query(query, [username], (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json({ message: 'Error fetching account details.' });
      } else if (result.length === 0) {
        res.status(404).json({ message: 'Account not found.' });
      } else {
        res.status(200).json(result);
      }
    });
  };
  