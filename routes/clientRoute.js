const express = require("express");
const {
  deleteClient,
  getAllClients,
  createClient,
  updateClient,
  getClient,
} = require("../controllers/clientController");
const { protect } = require("../controllers/authController");

const router = express.Router();

router.use(protect);

router.route("/").get(getAllClients).post(createClient);
router.route("/:id").patch(updateClient).delete(deleteClient).get(getClient);

module.exports = router;
