import React from "react";
import "./landingPage.css";
// import yourImage from "../../assets/faith.webp"; // Replace with your actual image path

const LandingPage = () => {
  return (
    <div className="landing-container">
      <div className="landing-content text-center">
        <img src={"faith.webp"} alt="Profile" className="profile-img" />
        <h1 className="title">Full Stack Developer</h1>
        <h2 className="subtitle">Junior Machine Learning Engineer</h2>

        <div className="section-menu mt-5 d-flex justify-content-center flex-wrap">
          <a href="/portfolio" className="menu-link">
            Portfolio
          </a>
          <a href="/experience" className="menu-link">
            Experience
          </a>
          <a href="#blog" className="menu-link">
            Blog
          </a>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
