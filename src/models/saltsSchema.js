const mongoose = require("mongoose");

const saltSchema = new mongoose.Schema({
  name: { type: String, required: true },
  useFor: { type: [String], required: true },
  _createdAt: { type: String, required: true },
});

const saltModel = mongoose.model("salt", saltSchema);

module.exports = saltModel;
