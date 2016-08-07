"use strict";

const express = require("express");
const router = express.Router({ mergeParams: true });
const multer = require("multer");

router.post("/:slug2", multer({ dest: "./uploads" }).single("file"), require("./create"));

// Error handlers
if (process.env.NODE_ENV === "development") {
  router.use(require("../../../middlewares/development-error-handler"));
}
router.use(require("../../../middlewares/error-handler"));

module.exports = router;
