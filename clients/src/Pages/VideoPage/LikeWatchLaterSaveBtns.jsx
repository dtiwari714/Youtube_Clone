import React, { useState,useEffect } from "react";
import { BsThreeDots } from "react-icons/bs";
import "./LikeWatchLaterSaveBtns.css";
import { likeVideo } from "../../Actions/video";
import {
  AiFillDislike,
  AiFillLike,
  AiOutlineDislike,
  AiOutlineLike,
} from "react-icons/ai";

import { useDispatch, useSelector } from "react-redux";

import { MdPlaylistAddCheck } from "react-icons/md";
import {
  RiHeartAddFill,
  RiPlayListAddFill,
  RiShareForwardLine,
} from "react-icons/ri";
import { addTolikedVideo } from "../../Actions/likedVideo";

function LikeWatchLaterSaveBtns({ vv, vid }) {
  const CurrentUser = useSelector((state) => state?.currentUserReducer);
  const dispatch = useDispatch();
  const [SaveVideo, setSaveVideo] = useState(false);
  const [DislikeBtn, setDislikeBtn] = useState(false);
  const [LikeBtn, setLikeBtn] = useState(false);

  const likedVideoList = useSelector((state) => state.likedVideoReducer);

  useEffect(() => {
    likedVideoList?.data
      .filter(
        (q) => q?.videoId === vid && q?.Viewer === CurrentUser?.result._id
      )
      .map((m) => setLikeBtn(true));
  }, []);

  const toggleSavedVideo = () => {
    if (SaveVideo) {
      setSaveVideo(false);
    } else {
      setSaveVideo(true);
    }
  };
  const toggleLikeBtn = (e, lk) => {
    if (CurrentUser) {
      if (LikeBtn) {
        setLikeBtn(false);
      dispatch(
        likeVideo({
          id: vid,
          Like: Math.max(lk - 1, 0),
        })
      );
      } else {
        setLikeBtn(true);
      dispatch(
        likeVideo({
          id: vid,
          Like: lk + 1,
        })
        );
        dispatch(
          addTolikedVideo({
            videoId: vid,
            Viewer: CurrentUser?.result._id,
          })
        );
        setDislikeBtn(false);
      }
    } else {
      alert("Plz Login To give a like");
    }
  };

  const toggleDislikeBtn = (e, lk) => {
    if (CurrentUser) {
      if (DislikeBtn) {
        setDislikeBtn(false);
      } else {
        setDislikeBtn(true);
        if (LikeBtn) {
          dispatch(
            likeVideo({
              id: vid,
              Like: lk - 1,
            })
          );
        }
        setLikeBtn(false);
      }
    } else {
      alert("Plz Login To give a like");
    }
  };
  return (
    <div className="btns_cont_videoPage">
      <div className="btn_VideoPage">
        <BsThreeDots />
      </div>
      <div className="btn_VideoPage">
        <div
          className="like_videoPage"
          onClick={(e) => toggleLikeBtn(e, vv.Like)}
        >
          {LikeBtn ? (
            <>
              <AiFillLike size={22} className="btns_videoPage" />
            </>
          ) : (
            <>
              <AiOutlineLike size={22} className="btns_videoPage" />
            </>
          )}
          <b>{vv.Like}</b>
        </div>
        <div
          className="like_videoPage"
          onClick={(e) => toggleDislikeBtn(e, vv.Like)}
        >
          {DislikeBtn ? (
            <>
              <AiFillDislike size={22} className="btns_videoPage" />
            </>
          ) : (
            <>
              <AiOutlineDislike size={22} className="btns_videoPage" />
            </>
          )}
          <b>DisLike</b>
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
