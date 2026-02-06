import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
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
    type:String,
    enum: ["male", "female"],
  },
  speciality: {
    type: String,
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
});
const Doctor = mongoose.model("doctor", doctorSchema);
export default Doctor;
