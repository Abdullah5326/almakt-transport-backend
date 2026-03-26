const mongoose = require("mongoose");
const fs = require("fs");
const Trip = require("../models/tripModel");

mongoose.connect("mongodb://127.0.0.1:27017/almakt-transport").then(() => {
  console.log("Local database is successfully connected.");
});

const trips = JSON.parse(fs.readFileSync("./trips.json"));

function importItems() {
  Trip.insertMany(trips);
  console.log("The item is uploaded successfully");
}
