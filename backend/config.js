"use strict";

const config = {
  db: {
    url: process.env.MONGO_URL || "mongodb://localhost/cliches"
  },
  cors: {
    origin: "http://localhost:3000"
  },
  logger: {
    format: "dev"
  }
};

module.exports = config;
