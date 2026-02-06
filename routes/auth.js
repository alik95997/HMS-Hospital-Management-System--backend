import express from "express";
import User from "../models/Patient.js";
import { signup, login } from "../controllers/auth.js";
const router = express.Router();

//create user
router.post("/login", login);

//get user
// router.get();
// // update user
// router.patch;

// //delete user
// router.delete();

export default router;
