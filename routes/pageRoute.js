const express = require("express");
const router = express.Router();

// controllers
const {
  indexPage,
  aboutPage,
  registerPage,
  loginPage,
} = require("../controllers/pageController");

// routes
router.route("/").get(indexPage);
router.route("/about").get(aboutPage);
router.route("/register").get(registerPage);
router.route("/login").get(loginPage);

module.exports = router;
