import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import CrudRouter from "./routes/staffreg.js";
import SCrouter from "./routes/subcon.js";
import departmentRouter from "./routes/dep.js";



dotenv.config();

const app = express();

app.use(express.json());
app.use('/staff',CrudRouter);
app.use('/subcon',SCrouter);
app.use('/api/',departmentRouter);





const connectDB = async()=>{
  try {
    await mongoose.connect(process.env.mongodb_url)
    console.log("db connected");
  } catch (error) {
    throw error;
  }
}

app.listen(process.env.port, () => {
  connectDB();
  console.log("server connected port no 5000");
});
