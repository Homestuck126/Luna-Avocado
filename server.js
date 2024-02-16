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
        return client.db(); // Return the database object
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
        throw err;
    }
}


// async function connectToMDB() {
//     try {
//         connectedClient = await client.connect();
//         console.log("Connected to MongoDB");
//     } catch(e) {
//         console.log(e)
//         throw e;
//     }   finally {
//         db = connectedClient.db("VirtualPetDatabase");
//         return db;
//     }

// };

app.listen(3000, () => {
    console.log("app is listening on port 3000")
});



//Test API Endpoint

// async function getUsers(db) {
//     const users = await db.collection('users');
//     return users.find().toArray();
// }

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
    console.log("b");
    try {
        let collection = await db.collection("users");
        let users = await collection.find().toArray();

        res.status(200).json(users);
    } catch(e) {
        res.status(500).json({ error: "Users could not be returned"})
    }

});


const users = getUsers();


module.exports = {connectToMDB, users};
console.log("a");
