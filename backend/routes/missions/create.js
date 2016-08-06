"use strict";

const Mission = require("../../models/mission");
const httpErrors = require("../../http-errors");

function createMission (req, res, next) {
  const mission = new Mission(req.body);

  mission.save()
    .then(sendResponse)
    .catch(onError)
  ;

  function sendResponse (mission) {
    res.status(201).json(mission.toObject());
  }

  function onError (err) {
    if (err.name === "ValidationError") {
      return next(new httpErrors.BadRequest(null, err));
    }

    next(err);
  }
}

module.exports = createMission;
