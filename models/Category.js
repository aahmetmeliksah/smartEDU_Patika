const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slugify = require("slugify");

const CategorySchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },

  slug: {
    type: String,
    unique: true,
  },
});

// pre method makes sure the code runs before the document is created
CategorySchema.pre("validate", function (next) {
  this.slug = slugify(this.name, {
    lower: true,
    strict: true,
  });
  next();
});

const Category = mongoose.model("Category", CategorySchema);

module.exports = Category;
