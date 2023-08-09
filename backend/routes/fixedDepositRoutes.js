// backend/routes/fixedDepositRoutes.js
const express = require('express');
const router = express.Router();
const fixedDepositController = require('../controllers/fixedDepositController');

router.post('/fixed-deposit', fixedDepositController.createFixedDeposit);
router.get('/fixed-deposit', fixedDepositController.getFixedDeposits);

module.exports = router;
