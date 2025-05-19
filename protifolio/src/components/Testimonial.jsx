import React from "react";
import { Carousel } from "react-bootstrap";
import '../App.css';
import man from "../assets/img/man.png"


const Testimonial = ({ darkMode }) => {
  const slides = [
    { src: man, job: "Developer", name: "Alazar Addis", message: "Gedion is a very good programmer and a fast learner. He can adapt to any new environment quickly." },
    { src: man, job: "DeveOps", name: "Eyasu Yitagesu", message: "Gedion proved himself to be a hard worker with solid problem-solving and technical skills. I was always impressed by Temkin's ability to complete the work assigned to him on time." },
    { src: man, job: "Mobile Developer", name: "Daniel Mola", message: "I have worked with Gedion for the past two years. During this time, Gedion proved himself to be a hard worker with solid problem-solving and technical skills." },
    { src: man, job: "Full stack Developer", name: "Abiy Asfaw", message: "The way how Gedion handels projects just amazes me." },
    { src: man, job: "Project Manager", name: "Michael Behailu", message: "Gedion has showed his skills and deligences in the times I worked with him" },
  ];

  return (
    <div className={`container text-center my-3 ${darkMode ? "bg-dark text-light" : "bg-light text-dark"}`}>
      <div className="d-flex justify-content-center align-items-center mb-3">
        <h2 className="mb-4">
          <span className={darkMode ? 'text-primary' : 'text-secondary'}>Testimonials</span>
        </h2>
      </div>

      <Carousel interval={3000} indicators={false} controls={true}>
        {slides.map((_, index) => (
          <Carousel.Item key={index}>
            <div className="d-flex justify-content-center">
              {slides
                .slice(index, index + 3)
                .concat(slides.slice(0, Math.max(0, index + 3 - slides.length)))
                .map((slide, i) => (
                  <div key={i} className="col-12 col-md-4 p-2">
                    <div
                      className={`card shadow mb-3 ${darkMode ? "bg-dark text-light border-secondary" : "bg-light text-dark border-white"}`}
                      style={{ height: "280px", width: "100%" }} // Adjusted height for medium screens
                    >
                      <div className="row g-0 h-100">
                        <div className="col-12 d-flex align-items-center p-2" style={{ flex: "0 0 auto" }}>
                          <div className="col-4 d-flex justify-content-center align-items-center">
                            <img
                              src={slide.src}
                              className={`img-fluid rounded-circle ${darkMode ? 'testimonies-img-dark' : 'testimonies-img-light'}`}
                              alt={`Slide ${slide.name}`}
                              style={{ width: "80px", height: "80px" }} // Adjusted image size for medium screens
                            />
                          </div>
                          <div className="col-8 d-flex flex-column justify-content-center">
                            <em><h6 className={darkMode ? "text-info" : "text-primary"}>{slide.name}</h6></em>
                            <h5 style={{ fontSize: "1rem" }}>{slide.job}</h5> {/* Adjusted font size for medium screens */}
                          </div>
                        </div>
                        <div className="col-12 p-2 d-flex flex-column">
                          <blockquote className="mt-0" style={{ fontSize: "0.9rem" }}> {/* Adjusted font size for medium screens */}
                            <em>&quot;{slide.message}&quot;</em>
                          </blockquote>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Testimonial;