import React from "react";
import "../css/landingPage.css";
import { Container, Button } from "react-bootstrap";
import { FaArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";
// import { Helmet } from "react-helmet";

const LandingPage = () => {
  return (
    <>
      {/* <Helmet> */}
        <title>Home - Faith Nchifor</title>
        <meta
          name="description"
          content=" Faith Nchifor Portfolio Home page "
        />
      {/* </Helmet> */}
      <div className="landing-page">
        <Container className="text-center d-flex flex-column justify-content-center align-items-center h-100">
          <img
            src="faith.webp"
            alt="Your Profile"
            className="profile-image mb-4"
            data-aos="zoom-in"
          />

          <h1 className="text-white mb-2" data-aos="fade-up">
            Hi, I’m Faith Nchifor
          </h1>
          <h3
            className="text-light mb-3"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Full Stack Developer &  Machine Learning Engineer <br/>
            <span className="fs-4"> 
              Specialized in building performant, scalable web and mobile applications
              </span>
          </h3>
          <div className="social-links mt-3">
            <a
              href="https://github.com/wenebob"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github fa-2x text-light mx-3"></i>
            </a>
            <a
              href="https://linkedin.com/in/faith-nchifor"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin fa-2x text-light mx-3"></i>
            </a>
          </div>

          <div
            className="menu-buttons mt-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div
              className="menu-buttons mt-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <Link to="/about" duration={500}>
                <Button variant="outline-light" className="mx-2 my-2">
                  About
                </Button>
              </Link>
              <Link to="/my-portfolio" duration={500}>
                <Button variant="outline-light" className="mx-2 my-2">
                  Portfolio
                </Button>
              </Link>
              <Link to="/experience" duration={500}>
                <Button variant="outline-light" className="mx-2 my-2">
                  Experience
                </Button>
              </Link>
              <Link to="https://faithnchifor.hashnode.dev/" duration={500}>
                <Button variant="outline-light" className="mx-2 my-2">
                  Blog
                </Button>
              </Link>
            </div>
          </div>

          <div
            className="scroll-down mt-5"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <Link to="/about" duration={500}>
              <FaArrowDown color="white" size={24} />
            </Link>
          </div>
        </Container>
      </div>
    </>
  );
};

export default LandingPage;
