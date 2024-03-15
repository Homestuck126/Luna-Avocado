// Implemented this as a trigger in mongoDB Atlas to reset the macro values of all users to 0 at the end of the day
exports = function() {
    const mongodb = context.services.get("Cluster0"); 
    const db = mongodb.db("VirtualPetDatabase"); 
    const collection = db.collection("users"); 
  
    collection.updateMany(
      {},
      { $set: { "calories": 0, "protein": 0, "carbohydrates": 0, "fat": 0 } }
    )
    .then(result => {
      // Handle the success scenario
      console.log("Documents updated", result);
    })
    .catch(err => {
      // Handle errors
      console.error("Error updating documents", err);
    });
  };