import express, { urlencoded } from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.js";
import appointmentRoute from "./routes/appointment.js";
import doctorRoute from "./routes/doctor.js";
import patientRoute from "./routes/patient.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT;
const URI = process.env.MONGODB_URI;
connectDB(URI);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("hello");
});
app.use("/api/auth", authRoutes);
app.use("/api/appointment", appointmentRoute);
app.use("/api/doctor", doctorRoute);
app.use("/api/patient", patientRoute);
app.listen(PORT, () => {
  console.log(`server running on http://localhost:5000`);
});
