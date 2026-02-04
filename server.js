import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT;
const URI = process.env.MONGODB_URI;
connectDB(URI);
app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(PORT, () => {
  console.log(`server running on http://localhost:5000`);
});
