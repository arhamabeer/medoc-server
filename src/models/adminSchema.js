const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  address: { type: String, required: true },
  country: { type: String, required: true },
  city: { type: String, required: true },
  gender: { type: String, required: true },
  contact: { type: String, required: true },
  dob: { type: String, required: true },
  role: { type: String, required: true },
  adminNo: { type: String, required: true },
  _createdAt: { type: String, required: true },
});

const adminModel = mongoose.model("adminAuth", adminSchema);

module.exports = adminModel;
