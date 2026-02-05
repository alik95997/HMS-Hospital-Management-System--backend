import mongoose, { Schema } from "mongoose";
import User from "./User.js";

const appointmentsSchema = new mongoose.Schema({
  doctorId: { type: Schema.Types.ObjectId, ref: User },
  patientId: { type: Schema.Types.ObjectId, ref: User },
  date: Date,
});
const Appointments = mongoose.model("appointment", appointmentsSchema);

export default Appointments;
