const Course = require("../models/Course");
const Category = require("../models/Category");

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
    // get category slug from the URL by using req.query.categories
    const category = await Category.findOne({ slug: req.query.categories });

    let filter = {};

    if (category) {
      filter = { category: category._id };
    }

    const courses = await Course.find(filter);
    const categories = await Category.find();

    res.status(200).render("courses", {
      courses,
      categories,
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
    const course = await Course.findOne({ slug: req.params.slug });

    res.status(200).render("course", {
      course,
      page_name: "courses",
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
