import React from "react";
import { Carousel } from "react-bootstrap";
import '../App.css';


const TestimonialCard = ({ darkMode }) => {
  const slides = [
    { src: "src\\assets\\img\\man.png", job: "Developer", name: "Alazar Addis", message: "Gedion is a very good programmer and a fast learner. He can adapt to any new environment quickly." },
    { src: "src\\assets\\img\\man.png", job: "DeveOps", name: "Eyasu Yitagesu", message: "Gedion proved himself to be a hard worker with solid problem-solving and technical skills. I was always impressed by Temkin's ability to complete the work assigned to him on time." },
    { src: "src\\assets\\img\\man.png", job: "Mobile Developer", name: "Daniel Mola", message: "I have worked with Gedion for the past two years. During this time, Gedion proved himself to be a hard worker with solid problem-solving and technical skills." },
    { src: "src\\assets\\img\\man.png", job: "Full stack Developer", name: "Abiy Asfaw", message: "Gedion is a very good programmer and a fast learner. He can adapt to any new environment quickly." },
    { src: "src\\assets\\img\\man.png", job: "Project Manager", name: "Michael Behailu", message: "Gedion is a very good programmer and a fast learner. He can adapt to any new environment quickly." },
  ];

  return (
    <div className={`container text-center my-3 ${darkMode ? "bg-dark text-light" : "bg-light text-dark"}`}>
      <div className="d-flex justify-content-center align-items-center mb-3">
        <h2 className={`mb-4 ${darkMode ? 'text-white' : 'text-dark'}`}>
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
                  <div key={i} className="col-12 col-md-4 p-3">
                    <div
                      className={`card shadow mb-3 ${darkMode ? "bg-dark text-light border-secondary" : "bg-light text-dark border-white"}`}
                      style={{ height: "300px", width: "100%" }}
                    >
                      <div className="row g-0 h-100">

                        <div className="col-12 d-flex align-items-center p-3" style={{ flex: "0 0 auto" }}>
                          <div className="col-4 d-flex justify-content-center align-items-center">
                            <img
                              src={slide.src}
                              className={`img-fluid rounded-circle 'testimonies-img-dark ${darkMode ? 'testimonies-img-dark' : 'testimonies-img-light'}`}
                              alt={`Slide ${slide.name}`}
                            />

                          </div>
                          <div className="col-8 d-flex flex-column justify-content-center">
                            <h6 className={darkMode ? "text-info" : "text-primary"}>{slide.name}</h6>
                            <h5 className={darkMode ? "text-light" : "text-dark"}>{slide.job}</h5>
                          </div>
                        </div>

                        <div className="col-12 p-3 d-flex flex-column">
                          <blockquote className="mt-0">
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

export default TestimonialCard;