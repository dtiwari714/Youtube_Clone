import express from "express";
import { uploadVideo ,getAllvideos} from "../Controllers/Video.js";
import upload from "../Helpers/fileHelpers.js";
import {likeController} from '../Controllers/like.js'
import { likeVideoController ,getAlllikeVideoController, deleteLikeVideoController} from "../Controllers/likeVideo.js";
import { deletewatchLaterController, getAllwatchLaterController, watchLaterController } from "../Controllers/watchLater.js";
import { HistoryController, deleteHistoryController, getAllHistoryController } from "../Controllers/History.js";
import { viewController } from "../Controllers/views.js";
import auth from "../Middleware/auth.js";

const routes = express.Router();

routes.post("/uploadVideo",auth,upload.single("file"), uploadVideo);
routes.get("/getvideos",getAllvideos);
routes.patch('/like/:id',auth,likeController)
routes.patch('/view/:id',viewController)

routes.post('/likeVideo',auth,likeVideoController)
routes.get('/getAlllikeVideo',getAlllikeVideoController)
routes.delete('/deleteLikedVideo/:videoId/:Viewer',auth,deleteLikeVideoController)

routes.post('/watchLater',auth,watchLaterController)
routes.get('/getAllwatchLater',getAllwatchLaterController)
routes.delete('/deleteWatchlater/:videoId/:Viewer',auth,deletewatchLaterController)

routes.post('/History',auth,HistoryController)
routes.get('/getAllHistory',getAllHistoryController)
routes.delete('/deleteHistory/:userId',auth,deleteHistoryController)

export default routes;
