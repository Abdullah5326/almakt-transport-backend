const express = require("express");
const {
  deleteClient,
  getAllClients,
  createClient,
  updateClient,
} = require("../controllers/clientController");
const { protect } = require("../controllers/authController");

const router = express.Router();

router.route("/").get(protect, getAllClients).post(protect, createClient);
router.patch("/:id", updateClient);
router.delete("/:id", deleteClient);

module.exports = router;
