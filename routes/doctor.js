import express from "express";
import User from "../models/User.js";
const router = express.Router();

router.get("/doctors", async (req, res) => {
  try {
    const resDoctor = await User.find({ role: "doctor" });
    res.status(201).json({
      message: "fetched All Doctors",
      resDoctor,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
export default router;
