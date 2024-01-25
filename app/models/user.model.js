const mongoose = require('mongoose');

//Declare User Attributes
const userSchema = new mongoose.Schema({
  phoneNumber: String,
  username: String,
  password: String,
  bio: String,
  link: String,
  avatar: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
