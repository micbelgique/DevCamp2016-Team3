"use strict";

const Mission = require("../../models/mission");

function listMissions (req, res, next) {
  Mission.find({})
    .then(sendResponse)
    .catch(next)
  ;

  function sendResponse (missions) {
    const json = missions.map(mission => {
      return mission.toObject();
    });

    res.status(200).json(json);
  }
}

module.exports = listMissions;
