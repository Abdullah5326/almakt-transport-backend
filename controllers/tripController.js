const Trip = require("../models/tripModel");
const {
  createOne,
  getAll,
  updateOne,
  deleteOne,
  getOne,
} = require("./handleFactory");

exports.createTrip = createOne(Trip);
exports.getAllTrips = getAll(Trip);
exports.getTrip = getOne(Trip, { path: "driver client" });
exports.updateTrip = updateOne(Trip);
exports.deleteTrip = deleteOne(Trip);
