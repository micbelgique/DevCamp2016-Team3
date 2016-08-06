"use strict";

const Exploration = require("../../../models/exploration");
const httpErrors = require("../../../http-errors");

function createExplorationCheckpoint (req, res, next) {
  Exploration.findBySlug({ slug: req.params.slug })
    .then(ensureExplorationExists)
    .then(completeCheckpoint)
    .then(sendResponse)
    .catch(next)
  ;

  function ensureExplorationExists (exploration) {
    require("debug")("cliches:backend")("ok", req.params.slug2);
    if (!exploration) {
      throw new httpErrors.NotFound();
    }

    return exploration;
  }

  function completeCheckpoint (exploration) {
    // TODO: we should validate that this checkpoint exists
    exploration.completed.push(req.params.slug2);

    return exploration.save();
  }

  function sendResponse (exploration) {
    res.status(200).json(exploration.toObject());
  }
}

module.exports = createExplorationCheckpoint;
