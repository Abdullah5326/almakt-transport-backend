const Maintenance = require("../models/maintenanceModel");
const {
  getAll,
  createOne,
  updateOne,
  deleteOne,
  getOne,
} = require("../controllers/handleFactory");

exports.getAllMaintenanceAmounts = getAll(Maintenance, { path: "vehicle" });
exports.createMaintenanceAmount = createOne(Maintenance);
exports.updateMaintenanceAmount = updateOne(Maintenance);
exports.deleteMaintenanceAmount = deleteOne(Maintenance);
exports.getMaintenance = getOne(Maintenance);
