const express = require("express");
const router = express.Router();
const logger = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

app.use(logger("dev"));
app.use(cors({ origin: "http://localhost:3000" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

router.use("/missions", require("./routes/missions"));
router.all("*", (req, res) => {
  res.status(404).send("Not Found");
});
app.use("/", router);

app.use((req, res, next) => {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

if (app.get("env") === "development") {
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
  });
}

app.use((err, req, res, next) => {
  res.status(err.status || 500);
});

module.exports = app;
