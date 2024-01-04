import React from "react";
import vid from "../../components/Video/video.mp4";
import "./VideoPage.css";
import Comments from "../../components/Comments/Comments";
import LikeWatchLaterSaveBtns from "./LikeWatchLaterSaveBtns";

function VideoPage() {
  return (
    <>
      <div className="container_videoPage">
        <div className="container2_videoPage">
          <div className="video_display_screen_videoPage">
            <video
              src={vid}
              className={"video_ShowVideo_videoPage"}
              controls
              // autoPlay
            ></video>
            <div className="video_details_videoPage">
              <div className="video_btns_title_VideoPage_cont">
                <p className="video_title_VideoPage">Title</p>
                <div className="views_date_btns_VideoPage">
                <div className="views_videoPage">
                {/* {vv?.Views}  */}
                5 views 
                <div className="dot"></div>{" "}
                    {/* {moment(vv?.createdAt).fromNow()} */}
                    upload 1 year ago
                </div>
                <LikeWatchLaterSaveBtns/>
                </div>
              </div>
              
              <div
                // to={`/chanel/${vv?.videoChanel}`}
                className="chanel_details_videoPage"
              >
                <b className="chanel_logo_videoPage">
                  <p>
                    {/* {vv?.Uploder.charAt(0).toUpperCase()} */}
                    C
                    </p>
                </b>
                <p className="chanel_name_videoPage">
                    {/* {vv?.Uploder} */}
                    Channel Name
                    </p>
              </div>
              <div className="comments_VideoPage">
                <h2>
                  <u>Comments</u>
                </h2>

                <Comments  
                // videoId={vv._id}
                />
              </div>
            </div>
          </div>
          <div className="moreVideoBar">More video</div>
        </div>
      </div>
    </>
  );
}

export default VideoPage;
