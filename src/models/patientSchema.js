const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  address: { type: String },
  country: { type: String },
  city: { type: String },
  gender: { type: String },
  contact: { type: String },
  dob: { type: String },
  disease: { type: [String] },
  maritalStatus: { type: [String] },
  onGoingMedicines: { type: [String] },
  discontinuedMedicines: { type: [String] },
  upcomingAppointment: { type: String },
  lastAppointment: { type: String },
  _MR_No: { type: String },
  _createdAt: { type: String },
});

const patientModel = mongoose.model("patient", patientSchema);

module.exports = patientModel;
