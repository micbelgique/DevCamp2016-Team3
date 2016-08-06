"use strict";

const Exploration = require("../../models/exploration");
const httpErrors = require("../../http-errors");

function createExploration (req, res, next) {
  const exploration = new Exploration(req.body);

  exploration.save()
    .then(sendResponse)
    .catch(onError)
  ;

  function sendResponse (exploration) {
    res.status(201).json(exploration.toObject());
  }

  function onError (err) {
    if (err.name === "ValidationError") {
      return next(new httpErrors.BadRequest(null, err));
    }

    next(err);
  }
}

module.exports = createExploration;
