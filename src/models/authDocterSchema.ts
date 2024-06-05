import mongoose from "mongoose";

const authDocterSchema = new mongoose.Schema({
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
  registrationNo: { type: String },
  _createdAt: { type: String },
});

const authDocterModel = mongoose.model(
  "authenticationDocter",
  authDocterSchema
);

module.exports = authDocterModel;
