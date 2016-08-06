"use strict";

const httpErrors = require("../../http-errors");

function updateExploration (req, res, next) {
  return next(new httpErrors.NotImplemented());
}

module.exports = updateExploration;
