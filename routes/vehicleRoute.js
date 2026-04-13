const express = require("express");
const {
  getAllVehicles,
  createVehicle,
  updateVehicle,
  deleteVehicle,
} = require("../controllers/vehicleController");
const { protect } = require("../controllers/authController");

const router = express.Router();

router.use(protect);
router.route("/").get(getAllVehicles).post(createVehicle);
router.route("/:id").patch(updateVehicle).delete(deleteVehicle);

module.exports = router;
