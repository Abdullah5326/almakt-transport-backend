const Vehicle = require("../models/vehicleModal");
const { getAll, createOne, updateOne, deleteOne } = require("./handleFactory");

exports.getAllVehicles = getAll(Vehicle);
exports.createVehicle = createOne(Vehicle);
exports.updateVehicle = updateOne(Vehicle);
exports.deleteVehicle = deleteOne(Vehicle);
