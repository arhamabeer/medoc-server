const express = require("express");
const { AddSalt } = require("../controllers/pharma");
const router = express.Router();

router.post("/AddSalt", AddSalt);

module.exports = router;
