const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  receiver: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  amount: Number,
  timestamp: { type: Date, default: Date.now },
  protocal: String,
  token: String,
  status: String // Ex: 'pending', 'completed', 'failed'
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
