"use strict";

const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  name: {
    required: true,
    type: String
  },
  description: {
    required: true,
    type: String
  },
  place: {
    required: true,
    type: String
  },
  sponsor: {
    required: true,
    type: String
  },
  rating: {
    required: true,
    type: Number
  },
  difficulty: {
    required: true,
    type: Number
  },
  steps: [ require("./step") ]
}, {
  timestamps: true,
  toObject: {
    versionKey: false,
    virtuals: true
  }
});

schema.plugin(require("mongoose-slug-hero"), {
  doc: "Mission",
  field: "name"
});

module.exports = schema;
