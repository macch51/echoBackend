const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transaction.controller');

router.post('/create', transactionController.createTransaction);
router.get('/user/:userId', transactionController.getTransactions);

module.exports = router;
