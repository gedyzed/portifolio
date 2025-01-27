import React, { useState } from "react";
import '../App.css';

const Projects = ({ darkMode }) => {
    const [likeCounts, setLikeCounts] = useState([0, 0, 0, 0, 0]);

    const handleLike = (index) => {
        const newCounts = [...likeCounts];
        newCounts[index] += 1;
        setLikeCounts(newCounts);
    };

    const projects = [
        { 
            title: "Online Examination System", 
            imgSrc: "src/assets/img/online_examination.jpg",
            description: "The Online Examination System is a web-based application developed in C# that allows educational institutions to conduct exams online. The system provides a user-friendly interface for both administrators and students." 
        },
        { 
            title: "Study Buddy", 
            imgSrc: "src/assets/img/study bud.jpg",
            description: "This StudyBuddy app offers a platform for learners to collaborate and grow together. It provides users with the ability to join or create study rooms focused on specific topics, such as Django and Node.js. The interface is clean, with browsing options for various topics and recent activities to stay updated." 
        },
        { 
            title: "Afaan Oromo Information Retrieval System (IRS)",
            imgSrc: "src/assets/img/IRS.JPG", 
            description: "This project implements a comprehensive Information Retrieval System using text processing techniques to extract, index, and search through a collection of documents. It includes modules for text extraction, word frequency analysis, inverted index creation, and query-based document retrieval." 
        },
        { 
            title: "Django-React-Fullstack-App", 
            imgSrc: "src/assets/img/note taking.jpg",
            description: "This project is a full-stack web application built using Django for the backend and React for the frontend. The application demonstrates how to integrate a Django REST API with a React frontend." 
        },
    ];

    return (
        <div className="container my-5 py-5">
            <h1 className="text-center mb-4 text-primary">My Projects</h1>
            <h2 className="text-center mb-4 text-info"><i>Here Are Some of My Recent Works</i></h2>
            <div className="row g-4">
                {projects.map((project, index) => (
                    <div className="col-md-6" key={index}>
                        <div
                            className={`card shadow-lg rounded-4 ${darkMode ? 'bg-dark text-light border-secondary' : 'bg-light text-dark border-white'}`}
                            style={{ cursor: 'pointer', width: "80%", height: "100%" }} // Ensure full height and width
                        >
                            <img 
                                src={project.imgSrc} 
                                className="card-img-top rounded-top"
                                alt={project.title} 
                                style={{ height: "200px", objectFit: "cover" }} // Fixed image height
                            />
                            <div className="card-body d-flex flex-column" style={{ flex: 1 }}>
                                <h5 className="card-title">{project.title}</h5>
                                <p className="card-text" style={{ color: darkMode ? '#ccc' : '#555', flex: 1 }}>
                                    <em>{project.description}.</em> 
                                </p>
                                <div className="d-flex justify-content-start align-items-center gap-2">
                                    <button
                                        className={`btn btn-outline-success ${darkMode ? 'border-light text-light' : ''}`}
                                        onClick={() => handleLike(index)}
                                    >
                                        <i className="bi bi-hand-thumbs-up me-2"></i>
                                        <span>{likeCounts[index]}</span>
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

export default Projects;