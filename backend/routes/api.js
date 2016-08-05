"use strict";

const express = require("express");
const router = express.Router();

router.use("/missions", require("./missions"));
router.use("/explorations", require("./explorations"));
router.all("*", (req, res) => {
  res.status(404).send("Not Found");
});

module.exports = router;
