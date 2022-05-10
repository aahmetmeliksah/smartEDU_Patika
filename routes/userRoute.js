const express = require("express");
const router = express.Router();

// controllers
const { createUser } = require("../controllers/authController");

// routes
router.route("/signup").post(createUser); // add a User

module.exports = router;
