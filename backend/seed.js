"use strict";

const config = require("./config");
const mongoose = require("mongoose");
const Mission = require("./models/mission");

// Mongo connection
mongoose.connect(config.db.url, { server: { auto_reconnect: true } }, () => {
  mongoose.connection.db.dropDatabase();
});

createBastogneMission()
  .then(createBruxellesMission)
  .then(createOvifatMission)
  .then(createGrandCanyonMission)
  .then(createGugenheimMission)
  .then(createArchitectureMission)
  .then(() => {
    mongoose.connection.close(() => {
      process.exit(0);
    });
  })
  .catch(err => {
    console.error(err);
  })
;

function createOvifatMission () {
  return new Mission({
    "description": "L’hôtel-restaurant « Domaine des Hautes Fagnes » vous invite au cœur des Ardennes, dans la Réserve Naturelle des Hautes Fagnes. Situé dans un parc verdoyant, il dispose de 71 chambres, 9 salles de réunion, un centre wellness « Vita Natura », 3 salles de restaurant, 1 lounge bar, 2 terrasses, 1 parking gratuit et un large choix d’activités.",
    "discovery": "Des lieux reposants et relaxants afin de vous resourcer.",
    "difficulty": 2,
    "name": "Ovifat Wellness",
    "introduction": "Petit parcours dans le domaine à la recherche des endroits les plus Zen des Hautes Fagnes",
    "place": "Ovifat",
    "rating": 4,
    "sponsor": "Domaines des Hautes Fagnes",
    "category": "zen",
    "checkpoints":
    [
        {
            "title": "Step #1",
            "description": "Bla bla...",
            "trivia": "C'est Martine qui a posée pour réaliser cette oeuvre d'art en 2012 lors de la première édition du DevCamp.",
            "placeholder": "001.jpg"
        },
        {
            "title": "Step #2",
            "description": "Bla bla...",
            "trivia": "C'est Martine qui a posée pour réaliser cette oeuvre d'art en 2012 lors de la première édition du DevCamp.",
            "placeholder": "002.jpg"
        },
        {
            "title": "Step #3",
            "description": "Bla bla...",
            "trivia": "C'est Martine qui a posée pour réaliser cette oeuvre d'art en 2012 lors de la première édition du DevCamp.",
            "placeholder": "003.jpg"
        }
    ],
    "illustration": "ovifat.jpg"
  }).save();
}

function createBastogneMission () {
  return new Mission({
    "description": "TODO",
    "discovery": "TODO",
    "difficulty": 2,
    "name": "Bastogne Flight Museum",
    "introduction": "TODO",
    "place": "Bastogne",
    "rating": 4,
    "sponsor": "TODO",
    "category": "wwii",
    "checkpoints": [],
    "illustration": "bastogne.jpg"
  }).save();
}

function createBruxellesMission () {
  return new Mission({
    "description": "TODO",
    "discovery": "TODO",
    "difficulty": 2,
    "name": "Bruxelles Center",
    "introduction": "TODO",
    "place": "Bruxelles",
    "rating": 4,
    "sponsor": "TODO",
    "category": "new_art",
    "checkpoints": [],
    "illustration": "brussels.jpg"
  }).save();
}

function createGrandCanyonMission () {
  return new Mission({
    "description": "TODO",
    "discovery": "TODO",
    "difficulty": 2,
    "name": "Grand Canyon",
    "introduction": "TODO",
    "place": "Arizona",
    "rating": 4,
    "sponsor": "TODO",
    "category": "snake",
    "checkpoints": [],
    "illustration": "grand-canyon.jpg"
  }).save();
}

function createGugenheimMission () {
  return new Mission({
    "description": "TODO",
    "discovery": "TODO",
    "difficulty": 2,
    "name": "New York Museum: Gugenheim",
    "introduction": "TODO",
    "place": "New York",
    "rating": 4,
    "sponsor": "TODO",
    "category": "gugenheim",
    "checkpoints": [],
    "illustration": "new-york-museum.jpg"
  }).save();
}

function createArchitectureMission () {
  return new Mission({
    "description": "TODO",
    "discovery": "TODO",
    "difficulty": 2,
    "name": "New York Architecture Tour",
    "introduction": "TODO",
    "place": "New York",
    "rating": 4,
    "sponsor": "TODO",
    "category": "vandelay",
    "checkpoints": [],
    "illustration": "new-york-architecture.jpg"
  }).save();
}
