const express = require("express");
const router = express.Router();

// controllers
const {
  createCourse,
  getAllCourses,
  getCourse,
  enrollCourse,
} = require("../controllers/courseController");

// middlewares
const roleMiddleware = require("../middlewares/roleMiddleware");

// routes
router.route("/").post(roleMiddleware(["admin", "teacher"]), createCourse); // add a course
router.route("/").get(getAllCourses); // get all courses
router.route("/:slug").get(getCourse); // get a course
router.route("/enroll").post(enrollCourse); // enroll course

module.exports = router;
