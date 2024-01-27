import { useState } from "react";
import "./App.css";
import AllRoutes from "./components/AllRoutes";
import DrawerSideBar from "./components/LeftSideBar/DrawerSideBar";
import NavBar from "./components/Navbar/NavBar";
import { BrowserRouter as Router } from "react-router-dom";
import CreateEditChannel from "./Pages/Channel/CreateEditChannel";
function App() {
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
  const [EditCreateChanelBtn, setEditCreateChanelBtn] = useState(false);
  return (
    <div className="App">
      <Router>
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

        <AllRoutes />
      </Router>
    </div>
  );
}

export default App;
