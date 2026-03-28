import React from "react";
import "../css/portfolio.css";
import { Badge, Button, Card, Col, Row } from "react-bootstrap";
// import { Helmet } from "react-helmet";

const projects = [
  {
    title: "Base App – Intelligent Communities",
    description:
      "A multilingual mobile app promoting inclusive access to digital services worldwide.",
    contributions: [
      "Expanded language support from 8 to 100+ languages",
      "Reduced app loading time by 50%",
      "Implemented real-time video/audio calling",
    ],
    tech: ["React Native", "Firebase", "WebRTC", "i18next"],
    link: "https://www.mybasecommunity.com",
    image: "base_icon.png",
  },
  {
    title: "Ghɔmálá Data Collection Platform",
    description:
      "Crowdsourcing app to collect linguistic data from underrepresented languages.",
    contributions: [
      "Built platform from scratch for mobile and web",
      "Enabled linguists to verify and annotate submissions",
      "Integrated Firebase and Google Drive storage",
    ],
    tech: ["React", "Expo", "Firebase", "MongoDB", "Node.js"],
    link: "https://play.google.com/store/apps/details?id=africa.localizzz",
    image: "ean_logo.png",
  },
  {
    title: "WebDevPath – Open Source Learning Platform",
    description:
      "An open-source project where developers collaborate to build a resource platform for aspiring web developers.",
    contributions: [
      "Assigned and resolved issues involving content updates and minor bug fixes on the platform",
      "Reviewed and provided feedback on pull requests from other contributors",
      "Followed structured GitHub workflows including issue tracking, branching, PR reviews, and merges",
      "Improved understanding of teamwork, open source etiquette, and code collaboration",
    ],
    tech: ["NextJS", "React", "GitHub"],
    link: "https://www.webdevpath.co",
    image: "wdp_logo.png",
  },
  {
    title: "Residence MG",
    description:
      "A web app allowing users to book guest houses, with an integrated payment system for seamless transactions.",
    contributions: [
      "Developed the backend API for booking management, including handling user reservations, guest house availability, and booking status",
      "Integrated MTN and Orange Money payment gateways to allow users to make secure online payments",
      "Ensured smooth user flow by handling payment confirmations and integrating payment responses into the booking system",
      "Collaborated with the frontend team to ensure seamless integration with the UI and improve user experience",
    ],
    tech: ["Node.js", "MTN API", "Orange Money API", "REST API"],
    link: "https://residencemg.co",
    image: "rmg.jpg",
  },
];

const PortfolioPage = () => {
  return (
    <>
      {/* <Helmet> */}
        <title>Portfolio - Faith Nchifor</title>
        <meta
          name="description"
          content="Portfolior of  Faith Nchifor Developer"
        />
      {/* </Helmet> */}
      <div className="container-fluid py-5 mt-5" id="portfolio">
        <h2 className="text-center mt-5">Portfolio</h2>
        <div className="row" data-aos="zoom-in" data-aos-duration="3000">
          <Row xs={1} md={2} lg={2} className="g-4 mx-auto">
            {projects.map((project, idx) => (
              <Col key={idx}>
                <Card className="h-100 shadow-sm br-">
                  <Card.Img
                    variant="top"
                    src={project.image}
                    alt={project.title}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>{project.description}</Card.Text>
                    <ul className="mb-2">
                      {project.contributions.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                    <div className="mb-3">
                      {project.tech.map((t, i) => (
                        <Badge bg="secondary" key={i} className="me-1">
                          {t}
                        </Badge>
                      ))}
                    </div>
                    {project.link && (
                      <Button
                        variant="primary"
                        href={project.link}
                        target="_blank"
                      >
                        View Project
                      </Button>
                    )}
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </>
  );
};

export default PortfolioPage;
