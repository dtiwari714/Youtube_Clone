import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

const DB_URL = process.env.CONNECTION_URL;
mongoose
  .connect(DB_URL, {})
  .then(() => {
    console.log("MongoDB database connected");
  })
  .catch((error) => {
    console.log(error);
  });

const PORT = process.env.PORT;
// console.log(PORT);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
