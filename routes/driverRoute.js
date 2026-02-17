const express = require("express");
const {
  getAllDrivers,
  createDriver,
  updateDriver,
  deleteDriver,
} = require("../controllers/driverController");
const { protect } = require("../controllers/authController");

const router = express.Router();

router.route("/").get(protect, getAllDrivers).post(createDriver);
router.route("/:id").patch(protect, updateDriver).delete(protect, deleteDriver);

module.exports = router;
