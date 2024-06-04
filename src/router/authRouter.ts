import express from "express";
const router = express.Router();
const { DocterSignIn, DocterSignUp } = require("../controllers/auth.ts");

router.post("/signupDocter", DocterSignUp);
router.post("/signinDocter", DocterSignIn);

module.exports = router;
