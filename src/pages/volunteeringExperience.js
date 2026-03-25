import React from "react";
import "../css/experiencePage.css";

const volunteering = [
  {
    role: "Junior Machine Learning Engineer",
    company: "Omdena (Remote, Volunteer)",
    duration: "January 2023 – Present",
    type: ["Machine Learning"],
    description: [
      "Collaborated with a global team of engineers, data scientists, and domain experts on real-world ML challenges.",
      "Developed and deployed ML models for social impact projects in healthcare, education, and sustainability.",
      "Handled data preprocessing, feature engineering, and exploratory analysis for high-quality model input.",
      "Designed and optimized machine learning algorithms with iterative testing and validation.",
      "Used Python, TensorFlow, and other ML tools to build and fine-tune models.",
      "Co-authored documentation for predictive models that improved healthcare diagnostics.",
      "Improved skills in ML, data analysis, and software dev through hands-on global projects.",
      "Gained real-world experience in collaborative, cross-functional, and remote project management.",
    ],
  },
];

const VolunteeringExperience = () => {
  return (
    <div className="experience-container py-5" id="volunteering">
      <h2 className="text-center mb-5">Volunteering</h2>
      <div className="timeline">
        {volunteering.map((exp, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h4>{exp.role}</h4>
              <h6>{exp.company}</h6>
              <span className="text-muted">{exp.duration}</span>
              <ul className="mt-2">
                {exp.description.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VolunteeringExperience;
