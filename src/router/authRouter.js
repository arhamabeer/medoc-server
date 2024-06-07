const express = require("express");
const router = express.Router();
const { DoctorSignIn, DoctorSignUp } = require("../controllers/auth");

router.post("/signupDoctor", DoctorSignUp);
router.post("/signinDoctor", DoctorSignIn);

module.exports = router;
