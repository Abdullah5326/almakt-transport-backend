const express = require("express");
const {
  deleteTrip,
  getAllTrips,
  createTrip,
  updateTrip,
  getTrip,
} = require("../controllers/tripController");
const { protect } = require("../controllers/authController");

const router = express.Router();

// router.use(protect);

router.route("/").get(getAllTrips).post(createTrip);
router.route("/:id").patch(updateTrip).delete(deleteTrip).get(getTrip);

module.exports = router;
