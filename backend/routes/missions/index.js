"use strict";

const express = require("express");
const router = express.Router();

router.post("/", require("./create"));
router.get("/", require("./list"));
router.get("/:slug", require("./get"));

// Error handlers
if (process.env.NODE_ENV === "development") {
  router.use(require("../../middlewares/development-error-handler"));
}
router.use(require("../../middlewares/error-handler"));

module.exports = router;
