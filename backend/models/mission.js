"use strict";

const mongoose = require("mongoose");
const model = mongoose.model("Mission", require("./schemas/mission"));

module.exports = model;
