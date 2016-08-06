"use strict";

const express = require("express");
const router = express.Router();

router.get("/", require("./list"));
router.post("/", require("./create"));
router.get("/:slug", require("./get"));
router.put("/:slug", require("./update"));
router.use("/:slug/checkpoints", require("./checkpoints"));

// Error handlers
if (process.env.NODE_ENV === "development") {
  router.use(require("../../middlewares/development-error-handler"));
}
router.use(require("../../middlewares/error-handler"));

module.exports = router;
