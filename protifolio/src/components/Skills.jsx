import React from "react";
import Testimonial from "./Testimonial";

const Skills = ({ darkMode }) => {
  const skills = [
    { name: "JavaScript", icon: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png", progress: 80 },
    { name: "Node.js", icon: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg", progress: 75 },
    { name: "React", icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", progress: 85 },
  ];

  return (
    <>
      <div className={`container text-center my-5 ${darkMode ? 'text-white' : 'text-dark'}`}>
        <h2 className={`mb-4 ${darkMode ? 'text-white' : 'text-dark'}`}>
          Professional <span className={darkMode ? 'text-primary' : 'text-secondary'}>Skillset</span>
        </h2>
        <div className="row justify-content-center">
          {skills.map((skill, index) => (
            <div className="col-6 col-md-4 col-lg-3 mb-4" key={index}>
              <div
                className={`card shadow ${darkMode ? 'bg-dark text-white border-secondary' : 'bg-light text-dark border-white'}`}
              >
                <div className="card-body d-flex flex-column align-items-center">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="mb-3"
                    style={{ width: "60px", height: "60px" }}
                  />
                  <div className="w-100">
                    <div className="progress" style={{ height: "10px" }}>
                      <div
                        className={`progress-bar ${darkMode ? 'bg-primary' : 'bg-success'}`}
                        role="progressbar"
                        style={{ width: `${skill.progress}%` }}
                        aria-valuenow={skill.progress}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Testimonial darkMode={darkMode} />
    </>

  );
};

export default Skills;