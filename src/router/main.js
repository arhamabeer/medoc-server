const express = require("express");
const router = express.Router();

router.use("/", require("./authRouter"));
router.use("/", require("./pharmaRouter"));
router.use("/", require("./patientRouter"));
router.use("/", require("./adminRouter"));

module.exports = router;
