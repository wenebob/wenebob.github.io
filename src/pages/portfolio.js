import React from "react";
import "../css/portfolio.css";

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
    image: "../../assets/base_icon.png",
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
    image: "../../assets/ean_logo.png",
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
    image: "../../assets/wdp_logo.png",
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
    tech: ["Node.js", "Express", "MTN API", "Orange Money API", "REST API"],
    link: "https://residencemg.co",
    image: "",
  },
];

const PortfolioPage = () => {
  return (
    <div className="container py-5" id="portfolio">
      <h2 className="text-center mt-5">Portfolio</h2>
      <div className="row">
        {projects.map((project, idx) => (
          <div className="col-md-6 mb-4" key={idx}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <h6>Contributions:</h6>
                <ul>
                  {project.contributions.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
                <p className="mt-2">
                  <strong>Tech Stack:</strong> {project.tech.join(", ")}
                </p>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline-primary mt-2"
                  >
                    View Project
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioPage;
