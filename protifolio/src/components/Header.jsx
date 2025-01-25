import React, { useState } from "react";

const Header = ({ darkMode, toggleDarkMode }) => {

    return (
        <header>
            <nav className={`d-flex justify-content-between align-items-center p-3 ${darkMode ? "bg-dark" : "bg-light"}`}>
                <h3 className={`mb-0 ${darkMode ? "text-light" : "text-dark"}`}>Portfolio</h3>
                <div className="nav nav-masthead">
                    <a className="nav-link active" aria-current="page" href="#">Home </a>
                    <a className="nav-link" href="#">Projects </a>
                    <a className="nav-link" href="#">Skills</a>
                    <a className="nav-link" href="#">Testimonies</a>
                    <a className="nav-link" href="#">About</a>
                    <a className="nav-link" href="#">Contact</a>
                </div>

                <button className={`btn btn-sm ${darkMode ? "btn-light" : "btn-dark"}`} onClick={toggleDarkMode}>
                    {darkMode ? "Light Mode" : "Dark Mode"}
                </button>

            </nav>

        </header>

    );
};

export default Header;
