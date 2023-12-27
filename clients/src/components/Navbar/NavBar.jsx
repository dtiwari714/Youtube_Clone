import React from "react";
import "./Navbar.css";
import logo from "../Navbar/logo.ico";
import SearchBar from "./SearchBar/SearchBar";
import { RiVideoAddLine } from "react-icons/ri";
import { IoIosNotifications } from "react-icons/io";
// import { FaUserCircle } from "react-icons/fa";
import { IoApps } from "react-icons/io5";
import { BiUserCircle } from "react-icons/bi";

function NavBar() {
  // const CurrentUser = null;
  const CurrentUser = {
    result: {
      name:"Durgesh Tiwari",
      email: "dtiwari714@rku.ac.in",
      joinedOn: "2222-07-15T09:57:23.489Z",
    },
  };
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
        <IoApps size={22} className={"app_navbar"} />
        <IoIosNotifications size={22} className={"notification_Navbar"} />
        {/* <FaUserCircle size={22} className={"user_Navbar"} /> */}
      </div>

      <div className="Auth_cont_Navbar">
        {CurrentUser ? (
          <>
            <div className="Chanel_logo_App">
              <p className="fstChar_logo_App">
                {CurrentUser?.result.name ? (
                  <>{CurrentUser?.result.name.charAt(0).toUpperCase()}</>
                ) : (
                  <>{CurrentUser?.result.email.charAt(0).toUpperCase()}</>
                )}
              </p>
            </div>
          </>
        ) : (
          <>
            <p className="Auth_Btn">
              <BiUserCircle size={22} className={"user_navbar"} />
              <b className="button_signIn">Sign In</b>
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default NavBar;
