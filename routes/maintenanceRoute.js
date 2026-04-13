const express = require("express");
const {
  getAllMaintenanceAmounts,
  createMaintenanceAmount,
  getMaintenance,
  deleteMaintenanceAmount,
  updateMaintenanceAmount,
} = require("../controllers/maintenanceController");

const router = express.Router();

router.route("/").get(getAllMaintenanceAmounts).post(createMaintenanceAmount);
router
  .route("/:id")
  .get(getMaintenance)
  .delete(deleteMaintenanceAmount)
  .patch(updateMaintenanceAmount);

module.exports = router;
