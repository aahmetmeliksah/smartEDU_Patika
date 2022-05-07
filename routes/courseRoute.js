const express = require("express");
const router = express.Router();

// controllers
const { createCourse } = require("../controllers/courseController");

router.route("/").post(createCourse);

module.exports = router;
