import React from "react";
import { FaEdit, FaUpload } from "react-icons/fa";
import "./DescribeChannel.css";

function DescribeChannel(setEditCreateChanelBtn) {
  return (
    <div className="container3_chanel">
      <div className="chanel_logo_chanel">
        <b>C</b>
      </div>
      <div className="description_chanel">
        <b> ChannelName</b>
        <p> Description </p>
      </div>
      <p
        className="editbtn_chanel"
        onClick={() => {
          setEditCreateChanelBtn(true);
        }}
      >
        <FaEdit />
        <b> Edit Chanel</b>
      </p>
      <p className="uploadbtn_chanel">
        <FaUpload />
        <b> Upload Video</b>
      </p>
    </div>
  );
}

export default DescribeChannel;
