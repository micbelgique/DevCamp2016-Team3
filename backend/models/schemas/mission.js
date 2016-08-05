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
  }
}, {
  timestamps: true,
  toObject: {
    versionKey: false,
    virtuals: true
  }
});

module.exports = schema;
