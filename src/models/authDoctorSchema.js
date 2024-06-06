const mongoose = require("mongoose");

const authDoctorSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  password: { type: String },
  address: { type: String },
  specialization: { type: String },
  country: { type: String },
  city: { type: String },
  gender: { type: String },
  experience: { type: Number },
  contact: { type: String },
  age: { type: Number },
  role: { type: String },
  registrationNo: { type: String },
  _createdAt: { type: String },
});

const authDoctorModel = mongoose.model(
  "authenticationDoctor",
  authDoctorSchema
);

module.exports = authDoctorModel;
