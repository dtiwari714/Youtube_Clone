import * as api from "../Api";

export const addTolikedVideo=(likedVideoData)=>async(dispatch)=>{
    try {
        const { data } = await api.addToLikedVideo(likedVideoData);
        dispatch({ type: "POST_LIKEDVIDEO", data });
        // dispatch(getAlllikedVideo())
      } catch (error) {
        console.log(error);
      }
}