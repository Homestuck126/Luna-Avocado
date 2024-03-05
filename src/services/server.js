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

mongoose
  .connect("mongodb+srv://puckerfishy:tamagachi@cluster0.kbfgpln.mongodb.net/VirtualPetDatabase", {
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

//endpoint to register a users
app.post("/User", async (req, res) => {
    try {
      const {
        name,
        password,
        username,
        macro,
      } = req.body;
  
      //create a new Employee
      const newUser = new User({
        name,
        password,
        username,
        macro,
      });
  
      await newUser.save();
  
      res
        .status(201)
        .json({ message: "Employee saved successfully", employee: newUser });
    } catch (error) {
      console.log("Error creating user", error);
      res.status(500).json({ message: "Failed to add an user" });
    }
  });
  
  //endpoint to fetch all the employees
  app.get("/users", async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: "Failed to retrieve the users" });
    }
  });