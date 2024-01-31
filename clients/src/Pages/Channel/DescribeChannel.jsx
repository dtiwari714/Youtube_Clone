import React from "react";
import { FaEdit, FaUpload } from "react-icons/fa";
import "./DescribeChannel.css";
import { useSelector } from "react-redux";

function DescribeChannel({ setEditCreateChanelBtn, Cid }) {
  const channels = useSelector((state) => state?.chanelReducers);
//   console.log(channels);
  const currentChanel = channels.filter((c) => c._id === Cid)[0];
//   console.log(currentChanel);
  const CurrentUser = useSelector((state) => state?.currentUserReducer);
  //   console.log(CurrentUser);
  return (
    <div className="container3_chanel">
      <div className="chanel_logo_chanel">
        <b>{currentChanel?.name.charAt(0).toUpperCase()}</b>
      </div>
      <div className="description_chanel">
        <b> {currentChanel?.name} </b>
        <p> {currentChanel?.desc} </p>
      </div>
      {CurrentUser?.result._id === currentChanel?._id && (
        <>
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
      </>
       )}
    </div>
  );
}

export default DescribeChannel;
