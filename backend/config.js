"use strict";

const config = {
  db: {
    url: process.env.MONGO_URL || "mongodb://localhost/cliches"
  },
  cors: {
    origin: "*"
  },
  logger: {
    format: "dev"
  }
};

module.exports = config;
