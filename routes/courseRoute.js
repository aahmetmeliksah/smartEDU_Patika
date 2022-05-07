const express = require("express");
const router = express.Router();

// controllers
const {
  createCourse,
  getAllCourses,
} = require("../controllers/courseController");

// routes
router.route("/").post(createCourse);
router.route("/").get(getAllCourses);

module.exports = router;
