import express from "express";
import User from "../models/Patient.js";
import {
  getAllPatient,
  getOnePatient,
  createPatient,
} from "../controllers/patient.js";
const router = express.Router();
router.route("/").get(getAllPatient).post(createPatient);

router.get("/:id", getOnePatient);

export default router;
