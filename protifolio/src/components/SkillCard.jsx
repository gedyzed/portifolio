import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../skillset.css"; // Add custom styles here

const skills = [
  { name: "JavaScript", icon: "🟨", level: 90 },
  { name: "Node.js", icon: "🟩", level: 85 },
  { name: "React", icon: "⚛️", level: 80 },
  { name: "MongoDB", icon: "🍃", level: 75 },
  { name: "Git", icon: "🔗", level: 70 },
  { name: "Firebase", icon: "🔥", level: 60 },
];

const SkillCard = () => {
  return (
    <div className="container my-5 text-center">
      <h3 className="text-light mb-4">Skillset</h3>
      <div className="row g-4">
        {skills.map((skill, index) => (
          <div className="col-6 col-md-4" key={index}>
            <div className="card skill-card shadow-sm">
              <div className="card-body text-center">
                <div className="skill-icon">{skill.icon}</div>
                <h5 className="card-title text-light mt-3">{skill.name}</h5>
                <div className="progress mt-3">
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    style={{ width: `${skill.level}%` }}
                    aria-valuenow={skill.level}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    {skill.level}%
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
