import React from "react";
import "../css/about.css"; // for custom styles
import { Image } from "react-bootstrap";
import {
  FaReact,
  FaPython,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaDocker,
  FaBrain,
  FaChartBar,
  FaCode,
  FaPuzzlePiece,
} from "react-icons/fa";
import {
  SiFirebase,
  SiMongodb,
  SiPostgresql,
  SiPytorch,
  SiTensorflow,
  SiTypescript,
} from "react-icons/si";
// import { Helmet } from "react-helmet";

const skills = [
  { name: "Programming", icon: <FaCode /> },
  { name: "Machine Learning", icon: <FaBrain /> },
  { name: "Data Analysis", icon: <FaChartBar /> },
  { name: "React.js", icon: <FaReact />, category: "Frontend" },
  { name: "Node.js", icon: <FaNodeJs />, category: "Backend" },
  { name: "Python", icon: <FaPython />, category: "ML/Data" },
  { name: "TypeScript", icon: <SiTypescript />, category: "Frontend" },
  { name: "MongoDB", icon: <SiMongodb />, category: "Backend" },
  { name: "SQL/NoSQL", icon: <FaDatabase />, category: "Backend" },
  { name: "Firebase", icon: <SiFirebase /> },
  { name: "PyTorch", icon: <SiPytorch />, category: "ML/Data" },
  { name: "TensorFlow", icon: <SiTensorflow />, category: "ML/Data" },
  { name: "Git", icon: <FaGitAlt />, category: "Tools" },
  { name: "Docker", icon: <FaDocker />, category: "Tools" },
];

const About = () => {
  return (
    <>
      {/* <Helmet> */}
        <title>About - Faith Nchifor</title>
        <meta name="description" content="About Faith Nchifor Developer" />
      {/* </Helmet> */}

      <div className="about-section mt-4" id="about">
        <div className="container about-content">
          <div className="image-container" data-aos="fade-right">
            <Image src={"me.jpeg"} alt="Your profile" className="profile-img" />
          </div>
          <div className="text-container" data-aos="fade-left">
            <h2>Hello, I'm Faith Nchifor</h2>
            <p className=" text-muted">
              I'm a full stack developer and junior machine learning engineer. I
              hold a BSc in Computer Science and four years of experience
              building web applications. I enjoy problem solving, writing clean
              and efficient code, and working on projects that actually make a
              difference. I care about learning, improving, and doing work that
              has real impact.
            </p>

            <p className=" text-muted">
              If you require my services, you can send me a message on
              <a
                href="https://linkedin.com/in/faith-nchifor"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin fa-1x text-dark mx-1"></i>
              </a>
              or send an email to faithnchifor @ gmail dot com.
            </p>
          </div>
        </div>
        <div className="skills-container my-5" data-aos="fade-right">
          <h3 className="text-center mb-4">Skills & Technologies</h3>
          <div className="row justify-content-center">
            {skills.map((skill, index) => (
              <div
                className="col-6 col-md-3 skill-item text-center mb-4"
                key={index}
              >
                <div className="icon-box">{skill.icon}</div>
                <p className="skill-name mt-2">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
