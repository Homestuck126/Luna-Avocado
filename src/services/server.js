const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const moment = require("moment");


const app = express();
const port = 3000;
const cors = require("cors");
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const MONGODB_URL = process.env.MONGODB_URL;

mongoose
  .connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB", error);
  });

app.listen(port, () => {
  console.log("Server is running on port 3000");
});

const cron = require('node-cron');
const User = require("./models/User.js");

cron.schedule('0 * * * *', async () => {
  const users = await User.find();
  const now = new Date();

  users.forEach(async (user) => {
    const hoursSinceReset = Math.abs(now - user.lastReset) / 36e5; // Convert milliseconds to hours

    if (hoursSinceReset >= 24) {
      user.calories = 0;
      user.protein = 0;
      user.carbohydrate = 0;
      user.fats = 0;
      user.lastReset = now; // Update the last reset time

      await user.save(); // Save the updated user
    }
  });
});

app.patch('/users/:username', async (req, res) => {
  try {
    console.log("a");
    const namesearch = req.params.username
    console.log(namesearch);
    const info = req.body
    console.log(namesearch);

   const updatedUser = await User.findOneAndUpdate({username: namesearch}, info, {new: true});
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: "User updated successfully", user: updatedUser });
    console.log(updatedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//endpoint to register a employee
app.post("/addUser", async (req, res) => {
    try {
      console.log("a");
      const {
        name,
        password,
        username,
        bio,
        Friends,
        calories,
        protein,
        carbohydrate,
        fats,
        calorieGoal,
        proteinGoal,
        carbGoal,
        fatsGoal,
      } = req.body;
  
      //create a new user
      const newUser = new User({
        name,
        password,
        username,
        bio,
        Friends,
        calories,
        protein,
        carbohydrate,
        fats,
        calorieGoal,
        proteinGoal,
        carbGoal,
        fatsGoal,
      });
  
      await newUser.save();
      console.log("newUser");
      res.status(201).json({ message: "User saved successfully", user: newUser });
    } catch (error) {
      console.log("Error creating user", error);
      res.status(500).json({ message: "Failed to add an user" });
    }
  });
  
  //endpoint to fetch all the users
  app.get("/users", async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).json({users});
    } catch (error) {
      res.status(500).json({ message: "Failed to retrieve the users" });
    }
  });