const express = require("express");
const router = express.Router();
const { AdminSignIn, AdminSignUp } = require("../controllers/admin");

router.post("/signupAdmin", AdminSignUp);
router.post("/signinAdmin", AdminSignIn);

module.exports = router;
