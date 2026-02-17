const Driver = require("../models/driverModel");
const { getAll, updateOne, deleteOne, createOne } = require("./handleFactory");

exports.getAllDrivers = getAll(Driver);
exports.createDriver = createOne(Driver);
exports.updateDriver = updateOne(Driver);
exports.deleteDriver = deleteOne(Driver);
