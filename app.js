const express = require("express");
const app = express();

// import router
const router1 = require("./routes/Routes");

// template engine
app.set("view engine", "ejs");

// Middlewares
app.use(express.static("public"));
app.use("/", router1);

// Listen to port
const PORT = 5555;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
