import express from "express";
import Appointments from "../models/Appointment.js";
const router = express.Router();

router.post("/create-appointment", async (req, res) => {
  try {
    const body = req.body;
    const resAppointment = await Appointments.create(body);
    res.status(201).json({
      message: "Appointment created",
      resAppointment,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
export default router