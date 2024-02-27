import { combineReducers } from "redux";
import authReducer from "./auth";
import currentUserReducer from "./currentUser";
import chanelReducers from "./Channel";
import videoReducer from "./Video";
import likedVideoReducer from "./likedVideo";
import watchLaterReducer from "./watchLater";
import HistoryReducer from "./history";

export default combineReducers({
  authReducer,
  currentUserReducer,
  chanelReducers,
  videoReducer,
  likedVideoReducer,
  watchLaterReducer,
  HistoryReducer
});
