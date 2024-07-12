import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import userRoutes from "./Routes/user.js";
import videoRoutes from "./Routes/video.js";
import commentsRoutes from './Routes/comments.js'

import path from "path";
import fs from 'fs';

dotenv.config();
const app = express();
app.use(cors({origin: 'https://youtube-clone-five-phi.vercel.app'}));
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(bodyParser.json());
//app.use("/uploads", express.static(path.join("uploads")));
const uploadsDirectory = path.join(__dirname, 'uploads');

// Ensure uploads directory exists
try {
  fs.accessSync(uploadsDirectory);
  console.log('Uploads directory exists');
} catch (error) {
  console.log('Uploads directory does not exist. Creating...');
  fs.mkdirSync(uploadsDirectory);
  console.log('Uploads directory created');
}
app.use("/uploads", express.static(uploadsDirectory));


app.get("/", (req, res) => {
  res.send("Hello World");
});


app.use("/user", userRoutes);
app.use("/video", videoRoutes);
app.use('/comment',commentsRoutes)

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
