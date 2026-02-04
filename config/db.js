import mongoose from "mongoose";
const MONGODB_URI = process.env.MONGODB_URI;
const connectDB = async (URI) => {
  try {
    const isConnected = await mongoose.connect(URI);
    if (isConnected) {
      console.log("MongoDB Connected");
    }
  } catch (error) {
    console.log(error.message);
  }
};
export default connectDB;
