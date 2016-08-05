var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send("It works!");
});

app.use(function (req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

if (app.get("env") === "development") {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
  });
}

app.use(function (err, req, res, next) {
  res.status(err.status || 500);
});

module.exports = app;
