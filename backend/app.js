"use strict";

const express = require("express");
const router = express.Router();
const logger = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const debug = require("debug")("cliches:backend");

// Middlewares
app.use(logger("dev"));
app.use(cors({ origin: "http://localhost:3000" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
router.use("/missions", require("./routes/missions"));
router.use("/explorations", require("./routes/explorations"));
router.all("*", (req, res) => {
  res.status(404).send("Not Found");
});
app.use("/", router);

// Mongo connection
mongoose.connect("mongodb://localhost/cliches", { server: { auto_reconnect: true } });

process.on("SIGINT", () => {
  debug("SIGINT received, closing mongo connection and exiting process.");
  mongoose.connection.close(() => {
    process.exit(0);
  });
});

// Seed the database
mongoose.connection.on("connected", () => {
  require("./seed")();
});

// Error handling
app.use((req, res, next) => {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

if (app.get("env") === "development") {
  app.use((err, req, res, next) => {
    debug(err);
    res.status(err.status || 500);
  });
}

app.use((err, req, res, next) => {
  res.status(err.status || 500);
});

module.exports = app;
