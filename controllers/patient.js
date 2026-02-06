import express from "express";
import Patient from "../models/Patient.js";
export const createPatient = async (req, res) => {
  try {
    const body = req.body;
    const { email, password } = body;
    const isEmail = await Patient.findOne({ email });
    if (isEmail) {
      return res.status(400).json("Doctor already exist");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const obj = { ...body, password: hashedPassword };
    const user = await Patient.create(obj);
    res.status(201).json({ message: "Patient is created successfully.", user });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

export const getAllPatient = async (req, res) => {
  try {
    const resPatient = await User.find({ role: "patient" });
    res.status(201).json({
      message: "fetched All Patients",
      resPatient,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
export const getOnePatient = async (req, res) => {
  try {
    const patientId = req.params.id;
    console.log(patientId);
    const resPatient = await User.findById(patientId);
    res.status(201).json({
      message: "fetched The patient",
      resPatient,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
