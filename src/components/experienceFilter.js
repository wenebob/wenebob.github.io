import React from "react";
import "../css/experiencePage.css";

const categories = [
  "All",
  "Machine Learning",
  "Software Engineer",
  "Project Coordinator",
];

const ExperienceFilter = ({ selected, onChange }) => {
  return (
    <div className="text-center mb-4 ">
      {categories.map((category) => (
        <button
          key={category}
          className={`mb-1 btn filter-pill mx-2  ${
            selected === category ? "btn-primary" : "btn-outline-primary"
          }`}
          onClick={() => onChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default ExperienceFilter;
