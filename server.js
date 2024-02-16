const express = require("express");
const {MongoClient} = require("mongodb");
const dotenv = require("dotenv");

dotenv.config()
const app = express();

const uri = 'mongodb+srv://puckerfishy:tamagachi@cluster0.kbfgpln.mongodb.net/?retryWrites=true&w=majority'

const client = new MongoClient(uri);

let connectedClient, db;

async function connectToMDB() {
    const client = new MongoClient(uri);
    try {
        await client.connect();
        console.log('Connected to MongoDB');
        return client.db("VirtualPetDatabase");
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
        throw err;
    }
}

app.listen(3000, () => {
    console.log("app is listening on port 3000")
});


async function getUsers() {
    try {
        const db = await connectToMDB();
        const usersCollection = db.collection('users');
        return usersCollection.find().toArray();
    } catch (err) {
        console.error('Error getting users:', err);
        throw err;
    }
}

app.get("/users", async (req, res) => {
    try {
        const db = await connectToMDB();
        let users = await db.collection("users").find().toArray();
        res.status(200).json(users);
    } catch(e) {
        console.error('Error getting users:', e);
        res.status(500).json({ error: "Users could not be returned" })
    }
});


const users = getUsers();


module.exports = {connectToMDB, users};
console.log("a");
