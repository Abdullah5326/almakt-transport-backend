const Trip = require("../models/tripModel");
const { createOne, getAll, updateOne, deleteOne } = require("./handleFactory");

exports.createTrip = createOne(Trip);
exports.getAllTrips = getAll(Trip);
exports.updateTrip = updateOne(Trip);
exports.deleteTrip = deleteOne(Trip);
