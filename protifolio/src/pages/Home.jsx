import React from 'react';
import Projects from "./Projects";
import Skills from "../components/Skills";
import About from "./About";
import Contact from "./Contact";
import '../App.css';
import { useNavigate } from 'react-router-dom';


const Home = ({ darkMode }) => {
    const navigate = useNavigate();

    return (
        <>
            <div className="fluid-container d-flex justify-content-center align-items-center vh-100">
                <div
                    className={`col-md-6 d-flex flex-column justify-content-center align-items-start p-5 vh-100 ${darkMode ? "bg-dark text-white" : "bg-light text-dark"}`}>

                    <h2 className={`display-4 fw-bold mb-4 ${darkMode ? "text-rose-500" : "text-danger"}`}> Hello World </h2>
                    <h1 className={`display-2 fw-bolder mb-3 ${darkMode ? "text-primary" : "text-primary"}`}> I'M Gedion Zeyede</h1>

                    <p className={`fs-4 fw-medium mb-4 ${darkMode ? "text-info" : "text-muted"}`}> | Front-End Developer ~ Back-End Developer | </p>

                    <button className={`btn btn-lg text-white px-5 py-3 fw-semibold shadow button`}
                     onClick={() => navigate("/contact")}
                    >
                        Contact Me
                    </button>

                </div>
            </div>
            <div>
                <About darkMode={darkMode}/>
                <Skills darkMode={darkMode} />
                <Contact darkMode={darkMode}/>
            </div>
        </>

    );
};

export default Home;