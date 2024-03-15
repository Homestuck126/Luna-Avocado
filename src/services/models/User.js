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
  bio: {
    type: String,
    required: false
  },
  Friends:{
    type: Array,
    required: false
  },
  lastReset: {
    type: Date,
    default: Date.now,
    required: false
  },
  calories: {
    type: Number,
    required: false
  },
  protein: {
    type: Number,
    required: false
  },
  carbohydrate: {
    type: Number,
    required: false
  },
  fats: {
    type: Number,
    required: false
  },
  calorieGoal: {
    type: Number,
    required: false
  },
  proteinGoal: {
    type: Number,
    required: false
  },
  carbGoal: {
    type: Number,
    required: false
  },
  fatsGoal: {
    type: Number,
    required: false
  }, 
  FoodItems:{
    type: Array,
    required: false
  }
}, { versionKey: false });

const User = mongoose.model('User', userSchema);

module.exports = User;