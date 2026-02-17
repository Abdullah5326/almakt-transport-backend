const express = require("express");
const {
  deleteTrip,
  getAllTrips,
  createTrip,
  updateTrip,
} = require("../controllers/tripController");

const router = express.Router();

router.route("/").get(getAllTrips).post(createTrip);
router.route("/:id").patch(updateTrip).delete(deleteTrip);

module.exports = router;
