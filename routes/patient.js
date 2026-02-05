import express from "express";
import User from "../models/User.js";
const router = express.Router();

router.get("/patients", async (req, res) => {
  try {
    const resPatient = await User.find({ role: "patient" });
    res.status(201).json({
      message: "fetched All Patients",
      resPatient,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
export default router;
