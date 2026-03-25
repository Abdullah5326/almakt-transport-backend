const express = require("express");
const {
  getAllDrivers,
  createDriver,
  updateDriver,
  deleteDriver,
  getDriver,
} = require("../controllers/driverController");
const { protect } = require("../controllers/authController");

const router = express.Router();

// router.use(protect);

router.route("/").get(getAllDrivers).post(createDriver);
router.route("/:id").patch(updateDriver).delete(deleteDriver).get(getDriver);

module.exports = router;
