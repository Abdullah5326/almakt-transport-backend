const express = require("express");
const {
  deleteTrip,
  getAllTrips,
  createTrip,
  updateTrip,
  getTrip,
  getLastMonthTrips,
  getLastYearTrips,
} = require("../controllers/tripController");
const { protect } = require("../controllers/authController");

const router = express.Router();

// router.use(protect);

router.route("/").get(getAllTrips).post(createTrip);
router.get("/last-month-trips", getLastMonthTrips);
router.get("/last-year-trips", getLastYearTrips);
router.route("/:id").patch(updateTrip).delete(deleteTrip).get(getTrip);

module.exports = router;
