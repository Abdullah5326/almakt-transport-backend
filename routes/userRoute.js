const express = require("express");
const {
  signup,
  login,
  protect,
  getMe,
  updateMe,
  deleteMe,
  logout,
} = require("../controllers/authController");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/logout", logout);

router.use(protect);

router.get("/me", getMe);
router.patch("/updateMe", updateMe);
router.delete("/deleteMe", deleteMe);

module.exports = router;
