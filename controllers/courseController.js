const Course = require("../models/Course");

// add a course
const createCourse = async (req, res) => {
  try {
    const course = await Course.create(req.body);

    res.status(201).json({
      status: "success",
      course,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};

// get all courses
const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();

    res.status(200).render("courses", {
      courses,
      page_name: "courses",
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};

// get a course
const getCourse = async (req, res) => {
  try {
    const course = await Course.findById({ _id: req.params.id });

    res.status(200).json({
      status: "success",
      course,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};

module.exports = {
  createCourse,
  getAllCourses,
  getCourse,
};
