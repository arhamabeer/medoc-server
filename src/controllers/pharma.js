const _saltModel = require("../models/saltsSchema");
const _medModel = require("../models/medicineSchema");

const AddSalt = async (req, res) => {
  let _checkSalt = await _saltModel.findOne({
    name: req.body.name.toLowerCase(),
  });
  console.log(_checkSalt, req.body.name.toLowerCase());
  if (_checkSalt) {
    res.status(403).send({
      result: _checkSalt,
      message: `Salt named ${req.body.name} already exists.`,
    });
  } else {
    const response = new _saltModel({
      name: req.body.name.toLowerCase(),
      useFor: req.body.useFor,
      _createdAt: new Date(),
    });
    response
      .save()
      .then((result) => {
        res
          .status(200)
          .send({ result: result, message: "Salt Added Successfully." });
      })
      .catch((err) => {
        res
          .status(400)
          .send({ result: err.message, message: "Can't add new salt." });
      });
  }
};

const AddMedicine = async (req, res) => {
  let _checkMed = await _medModel.findOne({
    name: req.body.name.toUpperCase(),
  });
  console.log(_checkMed, req.body.name.toUpperCase());
  if (_checkMed) {
    res.status(403).send({
      result: _checkMed,
      message: `Medicine named ${req.body.name} already exists.`,
    });
  } else {
    const response = new _medModel({
      name: req.body.name.toUpperCase(),
      useFor: req.body.useFor,
      power: req.body.power,
      salts: req.body.salts,
      _createdAt: new Date(),
    });
    response
      .save()
      .then((result) => {
        res
          .status(200)
          .send({ result: result, message: "Medicine Added Successfully." });
      })
      .catch((err) => {
        res
          .status(400)
          .send({ result: err.message, message: "Can't add new Medicine." });
      });
  }
};

module.exports = { AddSalt, AddMedicine };
