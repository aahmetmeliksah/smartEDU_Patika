const express = require("express");
const router = express.Router();

// controllers
const {
  createUser,
  loginUser,
  logoutUser,
} = require("../controllers/authController");

// routes
router.route("/signup").post(createUser); // add a User
router.route("/login").post(loginUser); // login User
router.route("/logout").get(logoutUser); // logout User

module.exports = router;
