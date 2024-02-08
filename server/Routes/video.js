import express from "express";
import { uploadVideo ,getAllvideos} from "../Controllers/Video.js";
import upload from "../Helpers/fileHelpers.js";
import {likeController} from '../Controllers/like.js'

const routes = express.Router();

routes.post("/uploadVideo", upload.single("file"), uploadVideo);
routes.get("/getvideos",getAllvideos);
routes.patch('/like/:id',likeController)

export default routes;
