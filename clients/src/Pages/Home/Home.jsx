import React from "react";
import LeftSideBar from "../../components/LeftSideBar/LeftSideBar";
import ShowVideoGrid from "../../components/ShowVideoGrid/ShowVideoGrid";
import vid from "../../components/Video/video.mp4";
import "./Home.css";
function Home() {
  // console.log(videosFile)
  const vids = [
    {
      _id: 1,
      video_src: vid,
      Chanel: "62bafe6752cea35a6c30685f",
      title: "video 1",
      Uploder: "abc",
      description: "description of  video 1",
    },
    {
      _id: 2,
      video_src: vid,
      Chanel: "cdd",
      title: "video 2",
      Uploder: "abc",
      description: "description of  video 2",
    },
    {
      _id: 3,
      video_src: vid,
      Chanel: "add",
      title: "video 3",
      Uploder: "abc",
      description: "description of  video 3",
    },
    {
      _id: 4,
      video_src: vid,
      Chanel: "add",
      title: "video 3",
      Uploder: "abc",
      description: "description of  video 3",
    },
  ];

  // const NavList = [
  //   "All",
  //   "Python",
  //   "Java",
  //   "C++",
  //   "Movies",
  //   "Science",
  //   "Animation",
  //   "Gaming",
  //   "Comedy",
  // ];
  return (
    <div className="container_Pages_App">
      <LeftSideBar />
      <div className="container2_Pages_App">
        <ShowVideoGrid vids={vids} />
      </div>
    </div>
  );
}

export default Home;
