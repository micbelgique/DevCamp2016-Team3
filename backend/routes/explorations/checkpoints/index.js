"use strict";

const express = require("express");
const router = express.Router({ mergeParams: true });

router.post("/:slug2", require("./create"));

// Error handlers
if (process.env.NODE_ENV === "development") {
  router.use(require("../../../middlewares/development-error-handler"));
}
router.use(require("../../../middlewares/error-handler"));

module.exports = router;
