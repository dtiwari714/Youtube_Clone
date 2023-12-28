import { useState } from "react";
import "./App.css";
import AllRoutes from "./components/AllRoutes";
import DrawerSideBar from "./components/LeftSideBar/DrawerSideBar";
import NavBar from "./components/Navbar/NavBar";
import { BrowserRouter as Router } from "react-router-dom";
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
  return (
    <div className="App">
      <Router>
        <NavBar toggleDrawer={toggleDrawer} />

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
