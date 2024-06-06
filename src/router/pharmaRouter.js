const express = require("express");
const { AddSalt, AddMedicine } = require("../controllers/pharma");
const router = express.Router();

router.post("/AddSalt", AddSalt);
router.post("/AddMedicine", AddMedicine);

module.exports = router;
