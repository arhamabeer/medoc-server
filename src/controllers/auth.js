const generateRandomString = require("../helpers/randoms");

const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const _authDoctorModel = require("../models/authDoctorSchema");

const DoctorSignUp = async (req, res) => {
  let checkUser = await _authDoctorModel.findOne({ email: req.body.email });
  if (checkUser) {
    res
      .status(403)
      .send({ result: checkUser, message: "User already Registered." });
  } else {
    let hash_pass = await bcrypt.hash(req.body.password, 12);
    let _registrationNo = generateRandomString(13);
    let create_user = new _authDoctorModel({
      name: req.body.name,
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
      role: "DOCTOR",
      registrationNo: _registrationNo,
      _createdAt: new Date(),
    });
    create_user
      .save()
      .then((response) => {
        res
          .status(200)
          .send({ result: response, message: "User Registed Successfully." });
      })
      .catch((err) => {
        res
          .status(400)
          .send({ result: err.message, message: "Can't register user." });
      });
  }
};

const DoctorSignIn = async (req, res) => {
  var checkUser = await _authDoctorModel.findOne({ email: req.body.email });
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
          name: checkUser.name,
          email: checkUser.email,
          _regNo: checkUser.registrationNo,
          _createdAt: checkUser._createdAt,
        },
        process.env.JWT_SECRET
      );

      res.status(200).send({ message: "Login Successful.", token });
    } else {
      res.status(401).send({ message: "your credentials are wrong." });
    }
  }
};

module.exports = { DoctorSignUp, DoctorSignIn };
