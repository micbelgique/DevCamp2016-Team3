"use strict";

const Exploration = require("../../models/exploration");

function listExplorations (req, res, next) {
  Exploration.find({})
    .then(sendResponse)
    .catch(next)
  ;

  function sendResponse (explorations) {
    const json = explorations.map(exploration => {
      return exploration.toObject();
    });

    res.status(200).json(json);
  }
}

module.exports = listExplorations;
