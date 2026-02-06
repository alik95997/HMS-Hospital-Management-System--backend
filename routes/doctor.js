import express from "express";
import {
  getAllDoctors,
  getOneDoctor,
  createDoctor,
} from "../controllers/doctor.js";
const router = express.Router();

router.route("/").get(getAllDoctors).post(createDoctor);

router.get("/:id", getOneDoctor);

export default router;
