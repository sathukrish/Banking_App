const db = require('../config/db');

exports.createFixedDeposit = (req, res) => {
  const { amount, duration, username, Nicnum, Address, Phonenum } = req.body;
  const interest = amount * 0.15 * duration;

  const query = 'INSERT INTO fixed_deposits (amount, duration, interest, username, Nicnum, Address, Phonenum) VALUES (?, ?, ?, ?, ?, ?, ?)';
  db.query(query, [amount, duration, interest, username, Nicnum, Address, Phonenum], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: 'Error creating fixed deposit.' });
    } else {
      res.status(201).json({ message: 'Fixed deposit created successfully.' });
    }
  });
};

exports.getFixedDeposits = (req, res) => {
  const query = 'SELECT * FROM fixed_deposits';
  db.query(query, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: 'Error fetching fixed deposits.' });
    } else {
      res.status(200).json(result);
    }
  });
};
