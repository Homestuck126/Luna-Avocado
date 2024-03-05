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

const User = require("./models/User.js");

//endpoint to register a employee
app.post("/addUser", async (req, res) => {
    try {
      console.log("a");
      const {
        name,
        password,
        username,
        macros,
        bio,
        friends,
      } = req.body;
  
      //create a new user
      const newUser = new User({
        name,
        password,
        username,
        macros,
        bio,
        friends,
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