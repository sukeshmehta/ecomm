import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

if (!process.env.MONGODB_URL) {
  throw new Error("please provide mongodb url");
}

async function mongoDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("connect to DB");
  } catch (err) {
    console.log("mongoDB error", err);
    process.exit(1);
  }
}

export default mongoDB;
