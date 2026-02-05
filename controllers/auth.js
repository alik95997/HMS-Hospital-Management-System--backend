import express from "express";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
export const signup = async (req, res) => {
  try {
    const body = req.body;
    const { email, password } = body;
    const isEmail = await User.findOne({ email });
    if (isEmail) {
      return res.status(400).json("user already exist");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);
    const obj = { ...body, password: hashedPassword };
    const user = await User.create(obj);
    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    res.status(400).json(error.message);
  }
};
