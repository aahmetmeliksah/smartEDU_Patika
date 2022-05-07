const express = require("express");
const router = express.Router();

// controllers
const {
  createCourse,
  getAllCourses,
  getCourse,
} = require("../controllers/courseController");

// routes
router.route("/").post(createCourse); // add a course
router.route("/").get(getAllCourses); // get all courses
router.route("/:slug").get(getCourse); // get a course

module.exports = router;
