const express = require("express");
const router = express.Router();

// controllers
const {
  indexPage,
  aboutPage,
  registerPage,
  loginPage,
} = require("../controllers/pageController");

// middlewares
const redirectMiddleware = require("../middlewares/redirectMiddleware");

// routes
router.route("/").get(indexPage);
router.route("/about").get(aboutPage);
router.route("/register").get(redirectMiddleware, registerPage);
router.route("/login").get(redirectMiddleware, loginPage);

module.exports = router;
