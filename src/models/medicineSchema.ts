import mongoose from "mongoose";

const medicineSchema = new mongoose.Schema({
  name: { type: String },
  power: { type: String },
  salt: { type: [String] },
  useFor: { type: [String] },
  _createdAt: { type: String },
});

const medicineModel = mongoose.model("medicine", medicineSchema);

module.exports = medicineModel;
