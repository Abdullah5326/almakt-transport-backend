const Driver = require("../models/driverModel");
const {
  getAll,
  updateOne,
  deleteOne,
  createOne,
  getOne,
} = require("./handleFactory");

exports.getAllDrivers = getAll(Driver, {
  path: "trips",
  populate: ["client", "driver"],
});
exports.createDriver = createOne(Driver);
exports.updateDriver = updateOne(Driver);
exports.deleteDriver = deleteOne(Driver);
exports.getDriver = getOne(Driver, {
  path: "trips",
  populate: [
    {
      path: "driver",
    },
    { path: "client" },
  ],
});
