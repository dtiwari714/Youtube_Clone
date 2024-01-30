import React from 'react'
import LeftSidebar from '../../components/LeftSideBar/LeftSideBar';
import vid from "../../components/Video/video.mp4";
import ShowVideoGrid from '../../components/ShowVideoGrid/ShowVideoGrid';
import DescribeChannel from './DescribeChannel';

function Channel({setEditCreateChanelBtn}) {
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
  return (
    <div className="container_Pages_App">
          <LeftSidebar />
          <div className="container2_Pages_App">
            
            <DescribeChannel 
            setEditCreateChanelBtn={setEditCreateChanelBtn}/>
            <ShowVideoGrid vids={vids} />
          </div>
        </div>
  )
}

export default Channel