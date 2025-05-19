import React from "react";
import '../App.css';
import recentGitRepos from '../components/RecentRepos';
import 'bootstrap-icons/font/bootstrap-icons.css';
import onlineExam from '../assets/img/online_examination.jpg';
import studybud from '../assets/img/study bud.jpg';
import note_taking from '../assets/img/note taking.jpg';
import IRS from '../assets/img/IRS.JPG';

const Projects = ({ darkMode }) => {
    const { repos, loading, error } = recentGitRepos("gedyzed");
    const recentProjects = repos.slice(0, 6);

    const projects = [
        {
            title: "Online Examination System",
            imgSrc: onlineExam,
            description: "The Online Examination System is a web-based application developed in C# that allows educational institutions to conduct exams online. The system provides a user-friendly interface for both administrators and students."
        },
        {
            title: "Study Buddy",
            imgSrc: studybud,
            description: "This StudyBuddy app offers a platform for learners to collaborate and grow together. It provides users with the ability to join or create study rooms focused on specific topics, such as Django and Node.js. The interface is clean, with browsing options for various topics and recent activities to stay updated."
        },
        {
            title: "Afaan Oromo Information Retrieval System (IRS)",
            imgSrc: IRS,
            description: "This project implements a comprehensive Information Retrieval System using text processing techniques to extract, index, and search through a collection of documents. It includes modules for text extraction, word frequency analysis, inverted index creation, and query-based document retrieval."
        },
        {
            title: "Django-React-Fullstack-App",
            imgSrc: note_taking,
            description: "This project is a full-stack web application built using Django for the backend and React for the frontend. The application demonstrates how to integrate a Django REST API with a React frontend."
        },
    ];

    return (
        <div className="container my-5 py-5">
            <h1 className="text-center mb-4 text-primary">My Projects</h1>
            <h2 className="text-center mb-4 text-info"><i>Here Are Some of My Recent Works</i></h2>

            <div className="row g-4">
                {projects.map((project) => (
                    <div className="col-md-6" key={project.title}>
                        <div
                            className={`card shadow-lg rounded-4 ${darkMode ? 'bg-dark text-light border-secondary' : 'bg-light text-dark border-white'}`}
                            style={{ cursor: 'pointer', width: "80%", height: "100%" }}
                        >
                            <img
                                src={project.imgSrc}
                                className="card-img-top rounded-top img-fluid"
                                alt={project.title}
                                style={{ height: "200px", objectFit: "cover" }}
                            />
                            <div className="card-body d-flex flex-column" style={{ flex: 1 }}>
                                <h5 className="card-title">{project.title}</h5>
                                <p className="card-text" style={{ color: darkMode ? '#ccc' : '#555', flex: 1 }}>
                                    <em>{project.description}</em>
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="row g-4 mt-5">
                <h2 className={darkMode ? "text-primary" : "text-secondary"}>Recent Repos</h2>
                {loading ? (
                    <div className="text-center">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                ) : error ? (
                    <div className="alert alert-danger" role="alert">
                        Error: {error}
                    </div>
                ) : (
                    recentProjects.map((repo) => (
                        <div className="col-md-4" key={repo.id}>
                            <div
                                className={`card shadow-lg rounded-4 ${darkMode ? "bg-dark text-light border-secondary" : "bg-light text-dark border-white"}`}
                                style={{ cursor: "pointer", width: "100%", height: "100%" }}
                            >
                                <div className="card-body d-flex flex-column" style={{ flex: 1 }}>
                                    <h5 className="card-title">{repo.name}</h5>
                                    <p
                                        className="card-text text-center"
                                        style={{ color: darkMode ? "#ccc" : "#555", flex: 1 }}
                                    >
                                        <em>{repo.description || "No description provided."}</em>
                                    </p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        {repo.language && (
                                            <span className="px-3 py-1 bg-primary bg-opacity-10 text-primary rounded-pill small">
                                                {repo.language}
                                            </span>
                                        )}
                                        <a
                                            href={repo.html_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`btn btn-sm ${darkMode ? "btn-outline-light" : "btn-outline-primary"}`}
                                        >
                                            View on GitHub
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Projects;
