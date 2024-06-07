const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  country: { type: String, required: true },
  city: { type: String, required: true },
  gender: { type: String, required: true },
  contact: { type: String, required: true },
  dob: { type: String, required: true },
  disease: { type: [String], required: true },
  maritalStatus: { type: [String], required: true },
  onGoingMedicines: { type: [String], required: true },
  discontinuedMedicines: { type: [String], required: true },
  upcomingAppointment: { type: String, required: true },
  lastAppointment: { type: String, required: true },
  _MR_No: { type: String, required: true },
  _createdAt: { type: String, required: true },
});

const patientModel = mongoose.model("patient", patientSchema);

module.exports = patientModel;
