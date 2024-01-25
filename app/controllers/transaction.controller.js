const Transaction = require('../models/transaction.model');

const createTransaction = async (req, res) => {
  try {
    const newTransaction = new Transaction({
      sender: req.body.sender, 
      receiver: req.body.receiver, 
      amount: req.body.amount,
      status: 'pending' // Initial status, could be updated based on transaction processing
    });

    await newTransaction.save();
    res.status(201).json(newTransaction);
  } catch (error) {
    res.status(500).json({ message: 'Error creating transaction', error });
  }
};

const getTransactions = async (req, res) => {
  try {
    const userId = req.params.userId; 
    const transactions = await Transaction.find({
      $or: [{ sender: userId }, { receiver: userId }]
    }).sort({ timestamp: -1 });

    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving transactions', error });
  }
};

module.exports = {
  createTransaction,
  getTransactions
};
