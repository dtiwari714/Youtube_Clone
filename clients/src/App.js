import "./App.css";
import AllRoutes from "./components/AllRoutes";
import NavBar from "./components/Navbar/NavBar";
import { BrowserRouter as Router} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <AllRoutes/>
      </Router>
    </div>
  );
}

export default App;
