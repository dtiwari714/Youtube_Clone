import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../Navbar/logo.ico";
import SearchBar from "./SearchBar/SearchBar";
import GoogleLogin from "react-google-login";
import { RiVideoAddLine } from "react-icons/ri";
import { IoIosNotifications } from "react-icons/io";
// import { FaUserCircle } from "react-icons/fa";
import { gapi } from "gapi-script";
import { IoApps } from "react-icons/io5";
import { BiUserCircle } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { login } from "../../Actions/auth";
import Auth from "../../Pages/Auth/Auth";

function NavBar({ toggleDrawer }) {
  const [AuthBtn, setAuthBtn] = useState(false)
  // const CurrentUser = null;
  const CurrentUser = {
    result: {
      name:"Durgesh Tiwari",
      email: "dtiwari714@rku.ac.in",
      joinedOn: "2222-07-15T09:57:23.489Z",
    },
  };
  // const CurrentUser = useSelector((state) => state.currentUserReducer);
  console.log(CurrentUser);
  useEffect(() => {
    function start() {
      gapi.client
        .init({
          clientId:
            "350764630254-24a99f0k7r7loe703360gk8j0hk7ivhc.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          console.log("gapi.client.init successfully executed");
        })
        .catch((error) => {
          console.error("Error initializing gapi.client:", error);
        });
    }
    gapi.load("client:auth2", start);
  }, []);

  const dispatch = useDispatch();

  const onSuccess = (response) => {
    const Email = response?.profileObj.email;
    console.log(Email);
    dispatch(login({ email: Email }));
  };

  const onFailure = (response) => {
    console.log("Failed", response);
  };
  return (
    <>
      <div className="Container_Navbar">
        <div className="Burger_Logo_Navbar">
          <div className="burger" onClick={() => toggleDrawer()}>
            <p></p>
            <p></p>
            <p></p>
          </div>

          <Link to={"/"} className="logo_div_Navbar">
            <img src={logo} alt="" />
            <p className="logo_title_navbar">YouTube</p>
          </Link>
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
              <div className="Chanel_logo_App"  onClick={()=>setAuthBtn(true)}>
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
              <GoogleLogin
                clientId={
                  "350764630254-24a99f0k7r7loe703360gk8j0hk7ivhc.apps.googleusercontent.com"
                }
                onSuccess={onSuccess}
                onFailure={onFailure}
                render={(renderProps) => (
                  <p onClick={renderProps.onClick} className="Auth_Btn">
                    <BiUserCircle size={22} className={"user_navbar"} />
                    <b className="button_signIn">Sign In</b>
                  </p>
                )}
              />
            </>
          )}
        </div>
      </div>
      {
         AuthBtn &&
        <Auth
        setAuthBtn={setAuthBtn}
        User={CurrentUser}
        />
      }
    </>
  );
}

export default NavBar;
