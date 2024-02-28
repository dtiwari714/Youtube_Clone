import React from "react";
import "./WHLcss.css";
import { useDispatch, useSelector } from "react-redux";
import WHLVideoList from "./WHLVideoList";
import LeftSideBar from "../LeftSideBar/LeftSideBar";
import { clearHistory } from "../../Actions/History";

function WHL({ page, videoList }) {
  console.log(videoList);
  const CurrentUser = useSelector((state) => state?.currentUserReducer);
  const dispatch = useDispatch();
  const handleClearHistory=()=>{
    if(CurrentUser){
      dispatch(clearHistory({
        userId:CurrentUser?.result._id
      }))
    }
  }
  return (
    <div className="container_Pages_App">
      <LeftSideBar />
      <div className="container2_Pages_App">
        <p className="conatiner_whl">
          <div className="box_WHL leftside_whl">
            <b>Your {page} Shown Here </b>
            {page === "History" && (
              <div
                className="clear_History_btn"
                onClick={() => handleClearHistory()}
              >
                Clear History
              </div>
            )}
          </div>
          <div className="rightSide_whl">
            <h1>{page}</h1>
            <div className="whl_list">
              <WHLVideoList
                page={page}
                CurrentUser={CurrentUser?.result._id}
                videoList={videoList}
              />
            </div>
          </div>
        </p>
      </div>
    </div>
  );
}

export default WHL;
