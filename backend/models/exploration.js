"use strict";

const mongoose = require("mongoose");
const model = mongoose.model("Exploration", require("./schemas/exploration"));

module.exports = model;
