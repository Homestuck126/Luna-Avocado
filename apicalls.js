let connectedClient, db;

const server = require("./server.js");

const testdb= server.connectToMDB();

console.log(testdb.users);
//console.log(server.users);
//db.listCollections();
console.log("a")