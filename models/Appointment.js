import mongoose, { Schema } from "mongoose";
import Patient from "./Patient.js";
import Doctor from "./Doctor.js";

const appointmentsSchema = new mongoose.Schema({
  doctorId: { type: Schema.Types.ObjectId, ref: Doctor },
  patientId: { type: Schema.Types.ObjectId, ref: Patient },
  date: Date,
});
const Appointments = mongoose.model("appointment", appointmentsSchema);

export default Appointments;
