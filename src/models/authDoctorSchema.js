const mongoose = require("mongoose");

const authDoctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  address: { type: String, required: true },
  specialization: { type: String, required: true },
  country: { type: String, required: true },
  city: { type: String, required: true },
  gender: { type: String, required: true },
  experience: { type: Number, required: true },
  contact: { type: String, required: true },
  dob: { type: String, required: true },
  role: { type: String, required: true },
  registrationNo: { type: String, required: true },
  _createdAt: { type: String, required: true },
});

const authDoctorModel = mongoose.model(
  "authenticationDoctor",
  authDoctorSchema
);

module.exports = authDoctorModel;
