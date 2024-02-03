import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import userRoutes from "./Routes/user.js";
import videoRoutes from './Routes/video.js'

import path from "path";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.use(bodyParser.json());

app.use("/user", userRoutes);
app.use("/video", videoRoutes);

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
