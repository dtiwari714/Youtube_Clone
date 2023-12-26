import React from "react";
import "./Navbar.css";
import logo from "../Navbar/logo.ico";
import SearchBar from "./SearchBar/SearchBar";
import { RiVideoAddLine } from "react-icons/ri";
import { IoIosNotifications } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";

function NavBar() {
  return (
    <div className="Container_Navbar">
      <div className="Burger_Logo_Navbar">
      <div className="burger">
          <p></p>
          <p></p>
          <p></p>
        </div>

        <div className="logo_div_Navbar">
          <img src={logo} alt="" />
          <p className="logo_title_navbar">YouTube</p>
        </div>
      </div>
      {/* <div className="Header_Search"> */}
        <SearchBar />
      {/* </div> */}
      <div className="Header_icons">
        <RiVideoAddLine size={22} className={"vid_bell_Navbar"} />
        <IoIosNotifications size={22} className={"notification_Navbar"} />
        <FaUserCircle size={22} className={"user_Navbar"} />
      </div>
    </div>
  );
}

export default NavBar;
