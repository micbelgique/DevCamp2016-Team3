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
    if (!exploration) {
      throw new httpErrors.NotFound();
    }

    return exploration;
  }

  function completeCheckpoint (exploration) {
    // TODO: we should validate that this checkpoint exists

    if (exploration.completed.some(item => {
      return item.checkpoint === req.params.slug2;
    }))
    {
      throw new httpErrors.Conflict();
    }

    exploration.completed.push({
      checkpoint: req.params.slug2, // TODO: we should save the ID, not the slug
      file: req.file.filename
    });

    return exploration.save();
  }

  function sendResponse (exploration) {
    res.status(200).json(exploration.toObject());
  }
}

module.exports = createExplorationCheckpoint;
