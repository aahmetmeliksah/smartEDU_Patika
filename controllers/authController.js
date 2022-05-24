const bcrypt = require("bcrypt");
const User = require("../models/User");
const Category = require("../models/Category");
const Course = require("../models/Course");

// create a user
const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);

    res.status(201).redirect("/login");
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};

// login user
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    // if such user exists compare entered password and hashed password
    if (user) {
      bcrypt.compare(password, user.password, (err, same) => {
        if (same) {
          /* we created a new variable in req.session object and assigned its value as user._id */
          req.session.userID = user._id;
          res.status(200).redirect("/users/dashboard");
        }
      });
    }
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};

// logout user
const logoutUser = async (req, res) => {
  req.session.destroy(() => {
    res.redirect("/");
  });
};

const dashboardPage = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.session.userID });
    const categories = await Category.find();
    const courses = await Course.find({ user: req.session.userID });

    res.status(200).render("dashboard", {
      page_name: "dashboard",
      user,
      categories,
      courses,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};

module.exports = { createUser, loginUser, logoutUser, dashboardPage };
