import express from "express";
import User from "../models/User.js";
import { signup } from "../controllers/auth.js";
const router = express.Router();

//create user
router.post("/create-user", signup);
//get user
// router.get();
// // update user
// router.patch;

// //delete user
// router.delete();

export default router;
