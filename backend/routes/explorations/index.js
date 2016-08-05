const express = require("express");
const router = express.Router();

router.get("/", require("./list"));
router.post("/", require("./create"));
router.get("/:id", require("./get"));
router.put("/:id", require("./update"));

module.exports = router;
