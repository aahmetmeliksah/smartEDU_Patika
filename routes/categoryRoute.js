const express = require("express");
const router = express.Router();

// controllers
const { createCategory } = require("../controllers/categoryController");

// routes
router.route("/").post(createCategory); // add a course

module.exports = router;
