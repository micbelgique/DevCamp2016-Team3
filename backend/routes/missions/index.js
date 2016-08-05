"use strict";

const express = require("express");
const router = express.Router();

router.post("/", require("./create"));
router.get("/", require("./list"));
router.get("/:slug", require("./get"));

module.exports = router;
