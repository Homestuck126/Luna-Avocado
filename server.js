const express = require("express");
const {MongoClient} = require("mongodb");
const dotenv = require("dotenv");

dotenv.config()
const app = express();

const uri = 'mongodb+srv://puckerfishy:tamagachi@cluster0.kbfgpln.mongodb.net/?retryWrites=true&w=majority'

const client = new MongoClient(uri);

let connectedClient, db;

async function connectToMDB() {
    try {
        connectedClient = await client.connect();
        console.log("Connected to MongoDB");
    } catch(e) {
        console.log(e)
    }   finally {
        db = connectedClient.db("VirtualPetDatabase");
    }

}

app.listen(3000, () => {
    console.log("app is listening on port 3000")
})

connectToMDB();

//Test API Endpoint

app.get("/users", async (req, res) => {

    try {
        let collection = await db.collection("users");
        let users = await collection.find().toArray();

        res.status(200).json(users);

    } catch(e) {
        res.status(500).json({ error: "Users could not be returned"})
    }

});