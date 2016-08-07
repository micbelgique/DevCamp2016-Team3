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
            "title": "L'innocence du plaisir",
            "description": "Instantané du plaisir des vacances retrouvées. Un moment de détente sur l'embrun d'une eau s'apaisant",
            "trivia": "Les carpes s'en souviennent.",
            "placeholder": "001.jpg"
        },
        {
            "title": "En équilibre",
            "description": "L'expérience forge le caractère et la chance sourit aux audacieux.",
            "trivia": "On ne saura jamais s'il y avait des ortilles.",
            "placeholder": "002.jpg"
        },
        {
            "title": "Vive le sport",
            "description": "Rien de telle que le soleil matinal sur une rosée naissante pour se balader sur des sentiers boisés.",
            "trivia": "Mens sana in corpore sano.",
            "placeholder": "003.jpg"
        },
        {
            "title": "Hésitation",
            "description": "Est-ce que j'avance ou je recule? Le sport n'est peut-être qu'un prétexte.",
            "trivia": "Le vélo s'en souvient.",
            "placeholder": "004.jpg"
        },
        {
            "title": "Entre danse et Tai Chi",
            "description": "Les étendues verdoyantes sont toujours propices à l'élégance d'une danse champêtre",
            "trivia": "Le centre du monde.",
            "placeholder": "005.jpg"
        },
        {
            "title": "Le vertige",
            "description": "Cet équilibre qui étourdit la raison sur un plaisir des sens retrouvés.",
            "trivia": "La chute d'Icare n'est qu'un prémisse d'une vie trépidante",
            "placeholder": "006.jpg"
        },
        {
            "title": "L'attente bien-être",
            "description": "Savoir que le temps peut se figer sur le bien que l'on se fait est d'une richesse intense",
            "trivia": "Massage ou Sauna?",
            "placeholder": "007.jpg"
        },
        {
            "title": "L'éveil",
            "description": "Le temps et l'écoute que l'on s'octroie redécouvre nos sens.",
            "trivia": "Jamais sans moi.",
            "placeholder": "008.jpg"
        },
        {
            "title": "Pour Démo",
            "description": "Merci au Microsoft Innovation Center et aux participants pour ce Learning path.",
            "trivia": "Semper Melius",
            "placeholder": "pour-demo.jpg"
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
