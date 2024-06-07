const { generateRandomString } = require("../helpers/randoms");

const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const _adminModel = require("../models/adminSchema");
const { isAdminExists } = require("../middlewares/mrNoCheck");

const AdminSignUp = async (req, res) => {
  let checkUser = await _adminModel.findOne({ email: req.body.email });
  if (checkUser) {
    res
      .status(403)
      .send({ result: checkUser, message: "User already Registered." });
  } else {
    let hash_pass = await bcrypt.hash(req.body.password, 12);
    let _adminNo;
    let regExists = true;

    // Generate a unique MR_No
    while (regExists) {
      _adminNo = generateRandomString(13);
      regExists = await isAdminExists(_adminNo);
    }

    let create_user = new _adminModel({
      name: req.body.name,
      email: req.body.email,
      password: hash_pass,
      address: req.body.address,
      adminNo: _adminNo,
      country: req.body.country,
      city: req.body.city,
      gender: req.body.gender,
      contact: req.body.contact,
      dob: req.body.dob,
      role: "ADMIN",
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

const AdminSignIn = async (req, res) => {
  var checkUser = await _adminModel.findOne({ email: req.body.email });
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
          role: checkUser.role,
          _adminNo: checkUser.adminNo,
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

module.exports = { AdminSignUp, AdminSignIn };
