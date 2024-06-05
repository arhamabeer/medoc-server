import { generateRandomString } from "../helpers/randoms";

const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const _authDocterModel = require("../models/authDocterSchema");

const DocterSignUp = async (req: any, res: any) => {
  let checkUser = await _authDocterModel.findOne({ email: req.body.email });
  console.log(checkUser);
  if (checkUser) {
    res
      .status(403)
      .send({ result: checkUser, message: "User already Registered." });
  } else {
    let hash_pass = await bcrypt.hash(req.body.password, 12);
    let _registrationNo = generateRandomString(13);
    let create_user = new _authDocterModel({
      email: req.body.email,
      password: hash_pass,
      address: req.body.address,
      specialization: req.body.specialization,
      country: req.body.country,
      city: req.body.city,
      gender: req.body.gender,
      experience: req.body.experience,
      contact: req.body.contact,
      age: req.body.age,
      registrationNo: _registrationNo,
    });
    create_user
      .save()
      .then((response: any) => {
        res
          .status(200)
          .send({ result: response, message: "User Registed Successfully." });
      })
      .catch((err: any) => {
        res
          .status(400)
          .send({ result: err.message, message: "Can't register user." });
      });
  }
};

const DocterSignIn = async (req: any, res: any) => {
  var checkUser = await _authDocterModel.findOne({ email: req.body.email });
  if (!checkUser) {
    res.status(404).send({ result: checkUser, message: "User not Found." });
  } else {
    let check_pass = await bcrypt.compare(
      req.body.password,
      checkUser.password
    );

    if (check_pass) {
      var token = jwt.sign(
        {
          user: checkUser._id,
          email: checkUser.email,
          _regNo: checkUser.registrationNo,
        },
        process.env.JWT_SECRET
      );

      res.status(200).send({ message: "Login Successful.", token });
    } else {
      res.status(401).send({ message: "your credentials are wrong." });
    }
  }
};

module.exports = { DocterSignUp, DocterSignIn };
