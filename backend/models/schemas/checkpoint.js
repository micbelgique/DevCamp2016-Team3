"use strict";

const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  title: {
    required: true,
    type: String
  },
  description: {
    required: true,
    type: String
  },
  placeholder: {
    required: true,
    type: String
  }
});

schema.plugin(require("mongoose-slug-hero"), {
  doc: "Checkpoint",
  field: "title"
});

module.exports = schema;
