import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from './routes/user.route.js'


dotenv.config();
mongoose
  .connect(process.env.MONGO_URL)
  .then((msg) => console.log("Database Connection Success"))
  .catch((err) => console.log(err));
const app = express();

app.use("/api/user",userRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
