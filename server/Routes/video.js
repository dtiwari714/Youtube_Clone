import express from "express";
import { uploadVideo ,getAllvideos} from "../Controllers/Video.js";
import upload from "../Helpers/fileHelpers.js";
import {likeController} from '../Controllers/like.js'
import { likeVideoController ,getAlllikeVideoController, deleteLikeVideoController} from "../Controllers/likeVideo.js";
import { deletewatchLaterController, getAllwatchLaterController, watchLaterController } from "../Controllers/watchLater.js";
import { HistoryController, deleteHistoryController, getAllHistoryController } from "../Controllers/History.js";
import { viewController } from "../Controllers/views.js";

const routes = express.Router();

routes.post("/uploadVideo", upload.single("file"), uploadVideo);
routes.get("/getvideos",getAllvideos);
routes.patch('/like/:id',likeController)
routes.patch('/view/:id',viewController)

routes.post('/likeVideo',likeVideoController)
routes.get('/getAlllikeVideo',getAlllikeVideoController)
routes.delete('/deleteLikedVideo/:videoId/:Viewer',deleteLikeVideoController)

routes.post('/watchLater',watchLaterController)
routes.get('/getAllwatchLater',getAllwatchLaterController)
routes.delete('/deleteWatchlater/:videoId/:Viewer',deletewatchLaterController)

routes.post('/History',HistoryController)
routes.get('/getAllHistory',getAllHistoryController)
routes.delete('/deleteHistory/:userId',deleteHistoryController)

export default routes;
