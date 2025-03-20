import "./App.css";
import CustomNavbar from "./components/navbar";
import LandingPage from "./components/landingPage";
import { Link, Route, Routes } from "react-router-dom";
import ExperiencePage from "./pages/experience";
import PortfolioPage from "./pages/portfolio";

function App() {
  return (
    <>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav> */}

        {/* <Switch> */}
        <CustomNavbar />

        <Routes>
          <Route path="/blog" element={<LandingPage />}></Route>
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="*" element={<LandingPage />} />
        </Routes>
        {/* </Switch> */}
      </div>
    </>
  );
}

export default App;
