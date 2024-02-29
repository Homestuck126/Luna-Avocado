const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const moment = require("moment");

const app = express();
const port = 8000;
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
  console.log("Server is running on port 8000");
});

const User = require("./models/employee");

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