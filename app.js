const express = require("express");
const app = express();

const mongoose = require("mongoose");

// import router
const pageRoute = require("./routes/pageRoute");
const courseRoute = require("./routes/courseRoute");

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
// routes
app.use("/", pageRoute);
app.use("/courses", courseRoute);

// Listen to port
const PORT = 5555;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
