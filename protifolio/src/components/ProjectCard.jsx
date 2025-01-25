import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css"; // For Bootstrap Icons

const ProjectCard = () => {
    const [likeCounts, setLikeCounts] = useState([0, 0, 0, 0,0]);
    const [dislikeCounts, setDislikeCounts] = useState([0, 0, 0, 0,0]);
  
    const handleLike = (index) => {
      const newCounts = [...likeCounts];
      newCounts[index] += 1;
      setLikeCounts(newCounts);
    };
  
    const handleDislike = (index) => {
      const newCounts = [...dislikeCounts];
      newCounts[index] += 1;
      setDislikeCounts(newCounts);
    };
    const projects = [
        { title: "Card Title", imgSrc: "src/assets/img/photo_2022-07-14_20-13-30.jpg" },
        { title: "Card Title", imgSrc: "src/assets/img/photo_2022-07-14_20-13-30.jpg" },
        { title: "Card Title", imgSrc: "src/assets/img/photo_2022-07-14_20-13-30.jpg" },
        { title: "Card Title", imgSrc: "src/assets/img/photo_2022-07-14_20-13-30.jpg" },
        { title: "Card Title", imgSrc: "src/assets/img/photo_2022-07-14_20-13-30.jpg" },
    ];

    return (
        <div className="container my-5">
            <h3 className="text-center mb-4">My Projects</h3>
            <div className="row g-4">
                {projects.map((project, index) => (
                    <div className="col-md-6" key={index}>
                        <div className="card shadow-sm">
                            <img src={project.imgSrc} className="card-img-top" alt={project.title} />
                            <div className="card-body">
                                <h5 className="card-title">{project.title}</h5>
                                <p className="card-text">
                                    A fully functional deployed portfolio website for the notorious {project.title}.
                                </p>
                                <div className="d-flex justify-content-flex-start align-items-center gap-2">
                                    <button
                                        className="btn btn-outline-success"
                                        onClick={() => handleLike(index)}
                                    >
                                        <i className="bi bi-hand-thumbs-up me-2"></i>
                                        <span>{likeCounts[index]}</span>
                                    </button>
                                    <button
                                        className="btn btn-outline-danger"
                                        onClick={() => handleDislike(index)}
                                    >
                                        <i className="bi bi-hand-thumbs-down me-2"></i>
                                        <span>{dislikeCounts[index]}</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectCard;