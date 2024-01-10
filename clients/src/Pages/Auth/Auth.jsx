import React from "react";
import "./Auth.css";
import { useDispatch } from "react-redux";
import { GoogleLogout } from "react-google-login";
import { BiLogOut } from "react-icons/bi";
import { setCurrentUser } from "../../Actions/currentUser";
// import { Link } from "react-router-dom";

function Auth({ User, setAuthBtn, setEditCreateChanelBtn }) {
  const dispatch = useDispatch();
  const onLogOutSuccess = () => {
    dispatch(setCurrentUser(null));
    alert("Log Out SuccessFully");
  };
  return (
    <>
      <div className="Auth_container" onClick={() => setAuthBtn(false)}>
        <div className="Auth_container2">
          <p className="User_Details">
            <div className="Chanel_logo_App">
              <p className="fstChar_logo_App">
                {User?.result.name ? (
                  <>{User?.result.name.charAt(0).toUpperCase()} </>
                ) : (
                  <>{User?.result.email.charAt(0).toUpperCase()} </>
                )}
              </p>
            </div>
            <div className="email_Auth">{User?.result.email}</div>
          </p>
          <div className="btns_Auth">
          {User?.result.name ? (
            <>
              {
                <div className="btn_Auth">
                  Your Chanel
                </div>
              }
            </>
          ) : (
            <>
              <input
                type="submit"
                className="btn_Auth"
                value="Create Your Chanel"
                onClick={() => setEditCreateChanelBtn(true)}
              />
            </>
          )}

            <div>
              <GoogleLogout
                clientId={
                  "350764630254-24a99f0k7r7loe703360gk8j0hk7ivhc.apps.googleusercontent.com"
                }
                onLogoutSuccess={onLogOutSuccess}
                render={(renderProps) => (
                  <div onClick={renderProps.onClick} className="btn_Auth">
                    <BiLogOut />
                    Log Out
                  </div>
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Auth;
