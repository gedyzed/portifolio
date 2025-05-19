import React, { useState } from "react";
import { HiX, HiOutlineMenu } from "react-icons/hi";
import { FiSun, FiMoon } from "react-icons/fi";
import { Offcanvas } from "react-bootstrap";
import '../App.css';

const Header = ({ darkMode, toggleDarkMode }) => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <header>
            <nav className={`d-flex justify-content-between align-items-center p-3 px-5 ${darkMode ? "header-dark-theme text-light" : "bg-light"}`}>
                <h3 className={`mb-0 text-success`}>Gz</h3>
                <div className="nav nav-masthead d-none d-lg-flex ">
                    <a className="nav-link active d-flex align-items-center fw-bold" href="/" style={{ fontSize: "1.2rem" }}
                    >
                        <i className="bi bi-house me-2"></i> Home
                    </a>
                    <a className="nav-link d-flex align-items-center fw-bold" href="/projects" style={{ fontSize: "1.2rem" }}>
                        <i className="bi bi-briefcase me-2"></i> Projects
                    </a>
                    <a className="nav-link d-flex align-items-center fw-bold" href="/contact" style={{ fontSize: "1.2rem" }}>
                        <i className="bi bi-envelope me-2"></i> Contact
                    </a>
                    <a className="nav-link d-flex align-items-center fw-bold" href="https://github.com/gedyzed/port" target="_blank" style={{ fontSize: "1.2rem" }}>
                        <i className="bi bi-github me-2"></i> Code
                    </a>

                </div>

                <button className={`btn btn-sm ${darkMode ? "btn-dark" : "btn-light"}`} onClick={toggleDarkMode}>
                    {darkMode ? <FiSun size={24} /> : <FiMoon size={24} />}
                </button>

                <button className="btn btn-outline-primary d-lg-none" onClick={toggleNav}>
                    {isNavOpen ? <HiX size={24} /> : <HiOutlineMenu size={24} />}
                </button>

            </nav>

            <Offcanvas
                show={isNavOpen}
                onHide={toggleNav}
                placement="end"
                className={darkMode ? "bg-dark text-light" : "bg-light text-dark"}
                style={{ width: "25%" }}
            >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Menu</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className="list-unstyled">
                        <li> <a className="nav-link fw-bold text-primary" href="/" onClick={toggleNav}>  <i className="bi bi-house me-2"></i> Home</a> </li>
                        <li> <a className="nav-link fw-bold text-primary" href="/projects" onClick={toggleNav}><i className="bi bi-briefcase me-2"></i> Projects</a> </li>
                        <li> <a className="nav-link fw-bold text-primary" href="/contact" onClick={toggleNav}> <i className="bi bi-envelope me-2"></i> Contact</a></li>
                        <li> <a className="nav-link d-flex align-items-center fw-bold text-primary" href="https://github.com/gedyzed/port" target="_blank" style={{ fontSize: "1.2rem" }}>
                            <i className="bi bi-github me-2"></i> Code
                        </a></li>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </header>
    );
};

export default Header;
