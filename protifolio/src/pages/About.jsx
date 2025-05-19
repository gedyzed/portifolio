import React from 'react';
import me from "../assets/img/gedy.jpg"
const About = ({ darkMode }) => {
    return (
        <>
            <div className="pt-5" id="about">
                <div className="container text-center ">
                    <div className="row align-items-center">

                        <div className="col-md-6">
                            <div className="../assets/img/man.png">
                                <img
                                    src={me}
                                    className="about-img img-fluid"
                                    alt="About Me"
                                    width="75%"
                                />
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="about-caption p-4 shadow-lg">
                                <p className="section-subtitle text-primary mb-1 "> <em>Who Am I?</em></p>
                                <h2 className="section-title mb-4">About Me</h2>
                                <p className=""><em>
                                    I'm a passionate software developer dedicated to excellence and innovation. Along my journey, I've cultivated expertise in programming languages like Python, C++, and Java, among others. I thrive on designing and building modern, solution-oriented applications that address real-world challenges and deliver impactful results.
                                    </em>
                                </p>
                               
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
