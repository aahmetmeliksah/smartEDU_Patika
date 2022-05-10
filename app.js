const express = require("express");
const app = express();

const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// import router
const pageRoute = require("./routes/pageRoute");
const courseRoute = require("./routes/courseRoute");
const categoryRoute = require("./routes/categoryRoute");
const userRoute = require("./routes/userRoute");

// template engine
app.set("view engine", "ejs");

// connect DB
mongoose
  .connect("mongodb://localhost/smartedu-db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`DB connected`))
  .catch((err) => console.log(err));

// Middlewares
app.use(express.static("public"));
// Must use these two middlewares for POST requests
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// routes
app.use("/", pageRoute);
app.use("/courses", courseRoute);
app.use("/categories", categoryRoute);
app.use("/users", userRoute);

// Listen to port
const PORT = 5555;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
