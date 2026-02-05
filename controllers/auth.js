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
    const obj = { ...body, password: hashedPassword };
    const user = await User.create(obj);
    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User does not exist" });
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({ message: "Invalid credential" });
    }
    return res.status(200).json({ message: "loggedin successfully", user });
  } catch (error) {}
};
