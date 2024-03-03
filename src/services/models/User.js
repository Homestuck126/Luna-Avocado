// src/models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  macro: {
    type: Number,
    required: false
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
