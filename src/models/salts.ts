import mongoose from "mongoose";

const saltSchema = new mongoose.Schema({
  name: { type: String },
  useFor: { type: [String] },
  _createdAt: { type: String },
});

const saltModel = mongoose.model("salt", saltSchema);

module.exports = saltModel;
