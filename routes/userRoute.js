const express = require("express");
const {
  signup,
  login,
  protect,
  getMe,
  updateMe,
  deleteMe,
} = require("../controllers/authController");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);

router.get("/me", protect, getMe);
router.patch("/updateMe", protect, updateMe);
router.delete("/deleteMe", protect, deleteMe);

module.exports = router;
