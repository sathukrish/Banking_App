// backend/app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fixedDepositRoutes = require('./routes/fixedDepositRoutes');
const loginRoutes = require('./routes/loginRoutes');
const signupRoutes = require('./routes/signupRoutes');
const accountRoutes = require('./routes/accountRoutes');



const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());


// Routes
app.use(fixedDepositRoutes);
app.use(loginRoutes);
app.use(signupRoutes);
app.use(accountRoutes);



// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
