const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  password: { type: String },
  address: { type: String },
  country: { type: String },
  city: { type: String },
  gender: { type: String },
  contact: { type: String },
  dob: { type: String },
  role: { type: String },
  adminNo: { type: String },
  _createdAt: { type: String },
});

const adminModel = mongoose.model("adminAuth", adminSchema);

module.exports = adminModel;
