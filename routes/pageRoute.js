const express = require("express");
const router = express.Router();

// controllers
const { indexPage, aboutPage } = require("../controllers/pageController");

router.route("/").get(indexPage);

router.route("/about").get(aboutPage);

module.exports = router;
