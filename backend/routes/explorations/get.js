"use strict";

const Exploration = require("../../models/exploration");
const httpErrors = require("../../http-errors");

function getExploration (req, res, next) {
  Exploration.findBySlug({ slug: req.params.slug })
    .populate("mission")
    .then(ensureExplorationExists)
    .then(sendResponse)
    .catch(next)
  ;

  function ensureExplorationExists (exploration) {
    if (!exploration) {
      throw new httpErrors.NotFound();
    }

    return exploration;
  }

  function sendResponse (exploration) {
    res.status(200).json(exploration.toObject());
  }
}

module.exports = getExploration;
