import axios from "axios";

//const api = axios.create({ baseURL: `http://localhost:5500/` });
const api = axios.create({ baseURL: `https://youtube-clone-du4m.vercel.app/` });


api.interceptors.request.use((req) => {
  if (localStorage.getItem("Profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("Profile")).token
    }`;
  }
  return req;
});

export const login = (authData) => api.post("/user/login", authData);

export const updateChanelData = (id, updateData) =>
  api.patch(`/user/update/${id}`, updateData);

export const fetchAllChanel = () => api.get("/user/getAllChannels");

export const uploadVideo = (fileData, fileOptions) =>
  api.post("/video/uploadVideo", fileData, fileOptions);
export const getVideos = () => api.get("/video/getvideos");
export const likeVideo = (id, Like) => api.patch(`/video/like/${id}`, { Like });
export const viewsVideo = (id) => api.patch(`/video/view/${id}`);

export const addToLikedVideo = (likedVideoData) =>
  api.post("/video/likeVideo", likedVideoData);
export const getAlllikedVideo = () => api.get("/video/getAlllikeVideo");
export const deletelikedVideo = (videoId, Viewer) =>
  api.delete(`/video/deleteLikedVideo/${videoId}/${Viewer}`);

export const addTowatchLater = (watchLaterData) =>
  api.post("/video/watchLater", watchLaterData);
export const getAllwatchLater = () => api.get("/video/getAllwatchLater");
export const deleteWatchLater = (videoId, Viewer) =>
  api.delete(`/video/deleteWatchlater/${videoId}/${Viewer}`);

export const addToHistory = (HistoryData) =>
  api.post("/video/History", HistoryData);
export const getAllHistory = () => api.get("/video/getAllHistory");
export const deleteHistory = (userId) =>
  api.delete(`/video/deleteHistory/${userId}`);

export const postComment=(CommentData)=>api.post('/comment/post',CommentData)
export const deleteComment=(id)=>api.delete(`/comment/delete/${id}`)
export const editComment=(id,commentBody)=>api.patch(`/comment/edit/${id}`,{commentBody})
export const getAllComment=()=>api.get('/comment/get')
