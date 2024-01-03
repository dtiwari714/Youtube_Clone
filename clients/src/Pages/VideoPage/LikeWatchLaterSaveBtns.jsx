import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import "./LikeWatchLaterSaveBtns.css";
import {
  AiFillDislike,
  AiFillLike,
  AiOutlineDislike,
  AiOutlineLike,
} from "react-icons/ai";

import { MdPlaylistAddCheck } from "react-icons/md";
import {
  RiHeartAddFill,
  RiPlayListAddFill,
  RiShareForwardLine,
} from "react-icons/ri";

function LikeWatchLaterSaveBtns() {
  const [SaveVideo, setSaveVideo] = useState(false);
  const [DislikeBtn, setDislikeBtn] = useState(false);
  const [LikeBtn, setLikeBtn] = useState(false);

  const toggleSavedVideo = () => {
    if(SaveVideo){
        setSaveVideo(false)
    }else{
        setSaveVideo(true)
    }
  };
  const toggleLikeBtn = () => {
    if(LikeBtn){
        setLikeBtn(false)
    }else{
        setLikeBtn(true)
    }
  };
  const toggleDislikeBtn = () => {
    if(DislikeBtn){
        setDislikeBtn(false)
    }else{
        setDislikeBtn(true)
    }
  };
  return (
    <div className="btns_cont_videoPage">
      <div className="btn_VideoPage">
        <BsThreeDots />
      </div>
      <div className="btn_VideoPage">
        <div className="like_videoPage" onClick={(e) => toggleLikeBtn()}>
          {LikeBtn ? (
            <>
              <AiFillLike size={22} className="btns_videoPage" />
            </>
          ) : (
            <>
              <AiOutlineLike size={22} className="btns_videoPage" />
            </>
          )}
          <b>Like</b>
        </div>
        <div className="like_videoPage" onClick={(e) => toggleDislikeBtn()}>
          {DislikeBtn ? (
            <>
              <AiFillDislike size={22} className="btns_videoPage" />
            </>
          ) : (
            <>
              <AiOutlineDislike size={22} className="btns_videoPage" />
            </>
          )}
          {/* <b>DisLike</b> */}
        </div>
        <div className="like_videoPage" onClick={() => toggleSavedVideo()}>
          {SaveVideo ? (
            <>
              <MdPlaylistAddCheck size={22} className="btns_videoPage" />
              <b>Saved</b>
            </>
          ) : (
            <>
              <RiPlayListAddFill size={22} className="btns_videoPage" />
              <b>Save</b>
            </>
          )}
        </div>
        <div className="like_videoPage">
          <>
            <RiHeartAddFill size={22} className="btns_videoPage" />
            <b>Thanks</b>
          </>
        </div>
        <div className="like_videoPage">
          <>
            <RiShareForwardLine size={22} className="btns_videoPage" />
            <b>Share</b>
          </>
        </div>
      </div>
    </div>
  );
}

export default LikeWatchLaterSaveBtns;
