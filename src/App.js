import "@fortawesome/fontawesome-free/css/all.min.css";


import AOS from "aos";
import "aos/dist/aos.css";
import CustomNavbar from "./components/navbar";
import LandingPage from "./components/landingPage";
import { Route, Routes } from "react-router-dom";
import ExperiencePage from "./pages/experience";
import PortfolioPage from "./pages/portfolio";
import { useEffect } from "react";
import About from "./pages/about";
import Contact from "./pages/contact";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div>
        <CustomNavbar />

        <Routes>
          <Route path="/" index element={<LandingPage />} />
          <Route path="/blog" element={<LandingPage />}></Route>
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/my-portfolio" element={<PortfolioPage />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<LandingPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
