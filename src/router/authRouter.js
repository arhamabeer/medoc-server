const express = require("express");
const router = express.Router();
const { DocterSignIn, DocterSignUp } = require("../controllers/auth");

router.post("/signupDocter", DocterSignUp);
router.post("/signinDocter", DocterSignIn);

module.exports = router;
