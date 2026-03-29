const mongoose = require("mongoose");
const fs = require("fs");
const Trip = require("../models/tripModel");
const Client = require("../models/clientModel");

mongoose.connect("mongodb://127.0.0.1:27017/almakt-transport").then(() => {
  console.log("Local database is successfully connected.");
});

const clients = JSON.parse(fs.readFileSync("./client.json"));

async function importItems() {
  await Client.insertMany(clients);
  console.log("The item is uploaded successfully");
  process.exit();
}

importItems();
