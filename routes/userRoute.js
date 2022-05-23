const express = require("express");
const router = express.Router();

// controllers
const {
  createUser,
  loginUser,
  logoutUser,
  dashboardPage,
} = require("../controllers/authController");

// middlewares
const authMiddleware = require("../middlewares/authMiddleware");

// routes
router.route("/signup").post(createUser); // add a User
router.route("/login").post(loginUser); // login User
router.route("/logout").get(logoutUser); // logout User
router.route("/dashboard").get(authMiddleware, dashboardPage); // go to User dashboard

module.exports = router;
