let connectedClient, db;

const server = require("./server.js");

async function main() {
    const db = await server.connectToMDB(); // Await the async function to get the database object
    const users = await db.collection('users').find().toArray(); // Fetch all documents from 'users' collection
    if (users.length === 0) {
        console.log('No documents found.');
    } else {
        console.log(users);
    }
}

main().catch(console.error);
