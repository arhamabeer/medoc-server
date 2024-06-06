const express = require("express");
const { AddPatient } = require("../controllers/patient");
const router = express.Router();

router.post("/AddPatient", AddPatient);

module.exports = router;
