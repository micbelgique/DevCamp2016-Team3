const debug = require("debug")("cliches:seed");
const Mission = require("./models/mission");


function seed () {
  const firstMission = {
    "name": "First Mission",
    "description": "This is our first and best mission so far!",
    "place": "Ovifat",
    "sponsor": "Microsoft Innovation Center",
    "rating": 4,
    "difficulty": 2
  };
  const secondMission = {
    "name": "Strike back",
    "description": "A long time ago...",
    "place": "... in a galaxy far, far away",
    "sponsor": "The Empire",
    "rating": 5,
    "difficulty": 5
  };

  Mission.findOneAndUpdate(firstMission, firstMission, { upsert: true }, (err, doc) => {
    if (err) {
      debug(err);
    }
  });

  Mission.findOneAndUpdate(secondMission, secondMission, { upsert: true }, (err, doc) => {
    if (err) {
      debug(err);
    }
  });
}

module.exports = seed;
