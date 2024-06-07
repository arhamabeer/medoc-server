const mongoose = require("mongoose");

const medicineSchema = new mongoose.Schema({
  name: { type: String, required: true },
  power: { type: String, required: true },
  salts: { type: [String], required: true },
  useFor: { type: [String], required: true },
  _createdAt: { type: String, required: true },
});

const medicineModel = mongoose.model("medicine", medicineSchema);

module.exports = medicineModel;
