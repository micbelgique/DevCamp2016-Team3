"use strict";

const debug = require("debug")("cliches:backend");

// The parameter "next" must be present to enable the error handler
function errorHandler (err, req, res, next) {
  debug(err);
  res.status(err.status || 500).send(err.message);
}

module.exports = errorHandler;
