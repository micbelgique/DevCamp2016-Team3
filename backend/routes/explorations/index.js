"use strict";

const express = require("express");
const router = express.Router();

router.get("/", require("./list"));
router.post("/", require("./create"));
router.get("/:id", require("./get"));
router.put("/:id", require("./update"));

// Error handlers
if (process.env.NODE_ENV === "development") {
  router.use(require("../../middlewares/development-error-handler"));
}
router.use(require("../../middlewares/error-handler"));

module.exports = router;
