const express = require("express");
const router1 = express.Router();

router1.get("/", (req, res) => {
  res.status(200).send("INDEX page");
});

module.exports = router1;
