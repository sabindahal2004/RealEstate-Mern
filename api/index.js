import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Database Connection Success"))
  .catch((err) => console.log(err));
const app = express();

app.get("/", function (req, res) {
  res.send("Home page");
});
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
