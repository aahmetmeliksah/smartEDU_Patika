const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slugify = require("slugify");

const CourseSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },

  description: {
    type: String,
    required: true,
    trim: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },

  slug: {
    type: String,
    unique: true,
  },

  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

// pre method makes sure the code runs before the document is created
CourseSchema.pre("validate", function (next) {
  this.slug = slugify(this.name, {
    lower: true,
    strict: true,
  });
  next(); // this is a middleware, so if there's no next(), request will get stuck here
});

const Course = mongoose.model("Course", CourseSchema);

module.exports = Course;
