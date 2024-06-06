const _saltModel = require("../models/salts");

const AddSalt = async (req, res) => {
  let _checkSalt = await _saltModel.findOne({
    name: req.body.name.toLowerCase(),
  });
  console.log(_checkSalt, req.body.name.toLowerCase());
  if (_checkSalt) {
    res.status(403).send({
      result: _checkSalt,
      message: `Salt Named ${req.body.name} already exists.`,
    });
  } else {
    const response = new _saltModel({
      name: req.body.name.toLowerCase(),
      useFor: req.body.useFor,
      _createdAt: new Date(),
    });
    const _res = await response.save();
    console.log(_res);
  }
};

module.exports = { AddSalt };
