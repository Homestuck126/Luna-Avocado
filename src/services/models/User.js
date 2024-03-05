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
  macros: {
    type: Number,
    required: false
  },
  bio: {
    type: String,
    required: false
  },
  Friends:{
    type: Array,
    required: false
  },
}, { versionKey: false });

const User = mongoose.model('User', userSchema);

module.exports = User;