const express = require('express');
const router = express.Router();
const accountController = require('../controllers/accountController');

// GET route to fetch account details
// router.get('/account', accountController.getAccountDetails);
router.get('/account/:username', accountController.getAccountDetailsByUsername);


module.exports = router;
