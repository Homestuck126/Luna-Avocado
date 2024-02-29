// src/services/server.js

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const port = 3000;
const cors = require("cors");
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
  .connect("mongodb+srv://puckerfishy:tamagachi@cluster0.kbfgpln.mongodb.net/", {
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
  console.log("Server is running on port 27017");
});

const User = require("./models/User.js");

app.post("/addUser", async (req, res) => {
  try {
    const { name, password, username, macro } = req.body;

    // Create a new user
    const newUser = new User({
      name,
      password,
      username,
      macro
    });

    await newUser.save();

    res
      .status(201)
      .json({ message: "Employee saved successfully", employee: newEmployee });
  } catch (error) {
    console.log("Error creating employee", error);
    res.status(500).json({ message: "Failed to add an employee" });
  }
});

//endpoint to fetch all the users
app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve the users" });
  }
});

app.listen(port, () => {
  console.log("Server is running on port 27017");
});

// const express = require("express");
// const {MongoClient} = require("mongodb");
// const dotenv = require("dotenv");

// dotenv.config()
// const app = express();

// const uri = 'mongodb+srv://puckerfishy:tamagachi@cluster0.kbfgpln.mongodb.net/?retryWrites=true&w=majority'

// const client = new MongoClient(uri);

// let connectedClient, db;

// async function connectToMDB() {
//     try {
//         connectedClient = await client.connect();
//         console.log("Connected to MongoDB");
//     } catch(e) {
//         console.log(e)
//     }   finally {
//         db = connectedClient.db("VirtualPetDatabase");
//     }

// }

// app.listen(3000, () => {
//     console.log("app is listening on port 3000")
// })

// connectToMDB();

// //Test API Endpoint

// app.get("/users", async (req, res) => {

//     try {
//         let collection = await db.collection("users");
//         let users = await collection.find().toArray();

//         res.status(200).json(users);

//     } catch(e) {
//         res.status(500).json({ error: "Users could not be returned"})
//     }

// });