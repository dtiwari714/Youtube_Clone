import * as api from "../Api";

export const addTowatchLater=(watchLaterData)=>async(dispatch)=>{
    try {
        const { data } = await api.addTowatchLater(watchLaterData);
        console.log(watchLaterData)
        dispatch({ type: "POST_WATCHLATER", data });
        dispatch(getAllwatchLater())
    } catch (error) {
        console.log(error);
      }
}

export const getAllwatchLater=()=> async (dispatch)=>{
    try {
        const {data}= await api.getAllwatchLater();
        console.log(data)
      dispatch({type:'FETCH_ALL_WATCHLATER_VIDEOS',payload:data})
    } catch (error) {
        console.log(error)
    }
  }
