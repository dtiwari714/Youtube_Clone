import axios from "axios";

const api = axios.create({ baseURL: `http://localhost:5500/` });

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
