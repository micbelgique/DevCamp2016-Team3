"use strict";

const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  mission: {
    ref: "Mission",
    required: true,
    type: mongoose.Schema.Types.ObjectId
  },
  name: {
    required: true,
    type: String
  },
  completed: [ { type: mongoose.Schema.Types.ObjectId } ]
}, {
  timestamps: true,
  toObject: {
    versionKey: false,
    virtuals: true
  }
});

schema.plugin(require("mongoose-slug-hero"), {
  doc: "Exploration",
  field: "name"
});

module.exports = schema;
