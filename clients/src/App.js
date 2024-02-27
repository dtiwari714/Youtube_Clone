import { useState, useEffect } from "react";
import "./App.css";
import AllRoutes from "./components/AllRoutes";
import { useDispatch } from "react-redux";
import DrawerSideBar from "./components/LeftSideBar/DrawerSideBar";
import NavBar from "./components/Navbar/NavBar";
import { BrowserRouter as Router } from "react-router-dom";
import CreateEditChannel from "./Pages/Channel/CreateEditChannel";
import { fetchAllChanel } from "./Actions/channelUser";
import { getAllVideo } from "./Actions/video";
import { getAlllikedVideo } from "./Actions/likedVideo";

import VideoUpload from "./Pages/VideoUpload/VideoUpload";
import { getAllwatchLater } from "./Actions/watchLater";
import { getAllHistory } from "./Actions/History";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllChanel());
    dispatch(getAllVideo());
    dispatch(getAlllikedVideo());
    dispatch(getAllwatchLater());
    dispatch(getAllHistory());
  }, [dispatch]);

  const [toggleDrawerSidebar, setToggleDrawerSidebar] = useState({
    display: "none",
  });
  const toggleDrawer = () => {
    if (toggleDrawerSidebar.display === "none") {
      setToggleDrawerSidebar({
        display: "flex",
      });
    } else {
      setToggleDrawerSidebar({
        display: "none",
      });
    }
  };
  const [vidUploadPage, setVidUploadPage] = useState(false);
  const [EditCreateChanelBtn, setEditCreateChanelBtn] = useState(false);
  return (
    <div className="App">
      <Router>
      {vidUploadPage && <VideoUpload  setVidUploadPage={setVidUploadPage}/>}
        {EditCreateChanelBtn && (
          <CreateEditChannel setEditCreateChanelBtn={setEditCreateChanelBtn} />
        )}
        <NavBar
          setEditCreateChanelBtn={setEditCreateChanelBtn}
          toggleDrawer={toggleDrawer}
        />
        <DrawerSideBar
          toggleDrawer={toggleDrawer}
          toggleDrawerSidebar={toggleDrawerSidebar}
        />

        <AllRoutes setVidUploadPage={setVidUploadPage} setEditCreateChanelBtn={setEditCreateChanelBtn} />
      </Router>
    </div>
  );
}

export default App;
