"use strict";

const Mission = require("../../models/mission");
const httpErrors = require("../../http-errors");

function getMission (req, res, next) {
  Mission.findBySlug({ slug: req.params.slug })
    .then(ensureMissionExists)
    .then(sendResponse)
    .catch(next)
  ;

  function ensureMissionExists (mission) {
    if (!mission) {
      throw new httpErrors.NotFound();
    }

    return mission;
  }

  function sendResponse (mission) {
    res.status(200).json(mission.toObject());
  }
}

module.exports = getMission;
