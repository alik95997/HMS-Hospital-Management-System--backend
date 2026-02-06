import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    enum: ["male", "female"],
  },
  createdAt: { type: Date, default: Date.now },
});
const Patient = mongoose.model("patient", patientSchema);
export default Patient;
