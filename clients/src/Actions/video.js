import * as api from "../Api";

export const uploadVideo = (videoData) => async (dispatch) => {
    try {
      const { fileData, fileOptions } = videoData;
    } catch (error) {
      alert(error.response.data.message)
    }
  };
  