const express = require("express");
const router1 = express.Router();

router1.get("/", (req, res) => {
  res.status(200).render("index", {
    page_name: "index",
  });
});

router1.get("/about", (req, res) => {
  res.status(200).render("about", {
    page_name: "about",
  });
});

module.exports = router1;
