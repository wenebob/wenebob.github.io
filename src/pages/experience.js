import React, { useState } from "react";
import "../css/experiencePage.css";
import VolunteeringExperience from "../components/volunteeringExperience";
import ExperienceFilter from "../components/experienceFilter";
// import { Helmet } from "react-helmet";

const experiences = [
  {
    role: "Project Coordinator",
    company: "Localizzz Africa (Remote)",
    duration: "January 2024 - Present",
    type: ["Software Engineer", "Project Coordinator"],
    description: [
      "Led the development of a crowdsourcing platform for linguistic data collection, initially focusing on Ghɔmálá and expanding to other languages.",
      "Developed a data collection app to streamline linguistic data acquisition.",
      "Managed NLP projects, ensuring alignment with strategic goals and timely delivery.",
      "Collaborated with language experts, linguists, and native speakers to ensure data accuracy.",
      "Supervised project resources, schedules, and milestones, proactively addressing challenges.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Base: Intelligent Communities (Remote)",
    duration: "August 2024 - April 2025",
    type: ["Software Engineer"],
    description: [
      "Expanded the mobile application's localization to 100 languages, significantly increasing global accessibility.",
      "Designed and integrated real-time video and audio calling features to enhance user engagement.",
      "Consistently delivered programming tasks, demonstrating problem-solving skills and adaptability.",
    ],
  },

  {
    role: "Junior Machine Learning Engineer (Intern)",
    company: "Bubo (Remote)",
    duration: "February 2024 - May 2024",
    type: ["Machine Learning"],
    description: [
      "Researched and implemented four state-of-the-art NILM (Non-Intrusive Load Monitoring) models on industrial datasets (HIPE, IEEE).",
      "Evaluated and preprocessed industrial datasets for NILM applications, identifying gaps in data quality.",
      "Analyzed customer datasets, diagnosing limitations and recommending improvements for NILM tasks.",
      "Documented findings from model implementation and data analysis, providing actionable insights.",
      "Developed hands-on expertise in ML libraries and industrial data formats.",
    ],
  },
  {
    role: "Junior Machine Learning Engineer Intern",
    company: "Sweez (Remote)",
    duration: "August 2023 - November 2023",
    type: ["Machine Learning"],
    description: [
      "Performed data cleaning and analysis on audio datasets.",
      "Fine-tuned four speaker embedding models, improving speaker identification accuracy by 10%.",
      "Implemented clustering algorithms in a speaker diarization pipeline to enhance speaker number estimation.",
      "Demonstrated efficiency in machine learning tasks and optimization.",
    ],
  },
  {
    role: "Full-Stack Software Developer",
    company: "Land of Studies, Douala, Cameroon",
    duration: "February 2021 - August 2023",
    type: ["Software Engineer"],
    description: [
      "Collaborated with cross-functional teams to develop high-quality software solutions.",
      "Maintained and optimized large-scale applications for improved performance.",
      "Taught web design and development courses, enhancing student engagement and success.",
      "Supervised interns, providing technical guidance and boosting their proficiency in web development by 50%.",
    ],
  },
];

const ExperiencePage = () => {
  const [selectedType, setSelectedType] = useState("All");

  const filtered =
    selectedType === "All"
      ? experiences
      : experiences.filter((exp) => exp.type.includes(selectedType));
  return (
    <>
      {/* <Helmet> */}
        <title>Experience - Faith Nchifor</title>
        <meta
          name="description"
          content="The work experiences of  Faith Nchifor Developer"
        />
      {/* </Helmet> */}
      <div className="experience-container py-5" id="experience">
        <h2 className="text-center mt-5">Experience</h2>
        <div data-aos="flip-left">
          <ExperienceFilter
            selected={selectedType}
            onChange={setSelectedType}
          />
          <div className="timeline">
            {filtered.map((exp, index) => (
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

          <VolunteeringExperience />
        </div>
      </div>
    </>
  );
};

export default ExperiencePage;
