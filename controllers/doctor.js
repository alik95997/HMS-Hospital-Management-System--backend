import Doctor from "../models/Doctor.js";
import bcrypt from "bcryptjs";
export const createDoctor = async (req, res) => {
  try {
    const body = req.body;
    const { email, password } = body;
    const isEmail = await Doctor.findOne({ email });
    if (isEmail) {
      return res.status(400).json("Doctor already exist");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const obj = { ...body, password: hashedPassword };
    const user = await Doctor.create(obj);
    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    res.status(400).json(error.message);
  }
};
export const getAllDoctors = async (req, res) => {
  try {
    const resDoctor = await Doctor.find();
    res.status(201).json({
      message: "fetched All Doctors",
      resDoctor,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
export const getOneDoctor = async (req, res) => {
  try {
    const doctorId = req.params.id;
    console.log(doctorId);
    const resDoctor = await Doctor.findById(doctorId);
    res.status(201).json({
      message: "fetched The Doctor",
      resDoctor,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
