const mongoose = require("mongoose");
const fs = require("fs");
const Trip = require("../models/tripModel");
const Client = require("../models/clientModel");
const Driver = require("../models/driverModel");
const Vehicle = require("../models/vehicleModal");
const Maintenance = require("../models/maintenanceModel");

mongoose.connect("mongodb://127.0.0.1:27017/almakt-transport").then(() => {
  console.log("Local database is successfully connected.");
});

// const clients = JSON.parse(fs.readFileSync("./client.json"));
// const drivers = JSON.parse(fs.readFileSync("./driver.json"));
// const trips = JSON.parse(fs.readFileSync("./trips.json"));
// const vehicles = JSON.parse(fs.readFileSync("./vehicle.json"));
const maintenances = JSON.parse(fs.readFileSync("./maintenances.json"));

async function importItems() {
  // await Client.insertMany(clients);
  // await Trip.insertMany(trips);
  // await Driver.insertMany(drivers);
  // await Vehicle.insertMany(vehicles);
  await Maintenance.insertMany(maintenances);
  console.log("The item is uploaded successfully");
  process.exit();
}

importItems();
