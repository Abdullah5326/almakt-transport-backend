const express = require("express");
const {
  getAllVehicles,
  createVehicle,
  updateVehicle,
  deleteVehicle,
} = require("../controllers/vehicleController");

const router = express.Router();

router.route("/").get(getAllVehicles).post(createVehicle);
router.route("/:id").patch(updateVehicle).delete(deleteVehicle);

module.exports = router;
