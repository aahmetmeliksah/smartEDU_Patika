const express = require("express");
const router1 = express.Router();

// controllers
const { indexPage, aboutPage } = require("../controllers/pageController");

router1.get("/", indexPage);

router1.get("/about", aboutPage);

module.exports = router1;
