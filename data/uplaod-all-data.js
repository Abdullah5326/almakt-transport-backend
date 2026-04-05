const mongoose = require("mongoose");
const fs = require("fs");
const Trip = require("../models/tripModel");
const Client = require("../models/clientModel");
const Driver = require("../models/driverModel");

mongoose
  .connect(
    "mongodb+srv://abdullahweb53264189_db_user:2N1GGB7aLnVR7BtA@almakt-transport.a9ycroe.mongodb.net/almakt-transport",
  )
  .then(() => {
    console.log("Local database is successfully connected.");
  });

const clients = JSON.parse(fs.readFileSync("./client.json"));
const drivers = JSON.parse(fs.readFileSync("./driver.json"));
const trips = JSON.parse(fs.readFileSync("./trips.json"));

async function importItems() {
  await Client.insertMany(clients);
  await Trip.insertMany(trips);
  await Driver.insertMany(drivers);
  console.log("The item is uploaded successfully");
  process.exit();
}

importItems();
