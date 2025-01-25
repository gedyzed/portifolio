import React from 'react';

const TestimonialCard = () => {

  const testimonies = [
    { title: "Card Title 1", imgSrc: "src/assets/img/photo_2022-07-14_20-13-30.jpg", text: "Good" },
    { title: "Card Title 2", imgSrc: "src/assets/img/photo_2022-07-14_20-13-30.jpg", text: "Intelligent" },
    { title: "Card Title 3", imgSrc: "src/assets/img/photo_2022-07-14_20-13-30.jpg", text: "Awesome" },
    { title: "Card Title 4", imgSrc: "src/assets/img/photo_2022-07-14_20-13-30.jpg", text: "Excellent" },
  ];

  return (
    // <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
    //   <div className="carousel-indicators">
    //     {testimonies.map((_, index) => (
    //       <button
    //         key={index}
    //         type="button"
    //         data-bs-target="#carouselExampleIndicators"
    //         data-bs-slide-to={index}
    //         className={index === 0 ? 'active' : ''}
    //         aria-current={index === 0 ? 'true' : 'false'}
    //         aria-label={`Slide ${index + 1}`}
    //       ></button>
    //     ))}
    //   </div>
    //   <div className="carousel-inner">
    //     {testimonies.map((testimony, index) => (
    //       <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
    //         <div className="card mx-auto" style={{ width: '18rem' }}>
    //           <img src={testimony.imgSrc} className="d-block w-100" alt="testimonial" />
    //           <div className="card-body">
    //             <h5 className="card-title">{testimony.title}</h5>
    //             <p className="card-text">{testimony.text}</p>
    //           </div>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    //   <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    //     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    //     <span className="visually-hidden">Previous</span>
    //   </button>
    //   <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    //     <span className="carousel-control-next-icon" aria-hidden="true"></span>
    //     <span className="visually-hidden">Next</span>
    //   </button>
    // </div>
    <h1>this is testimonials </h1>
  );
};

export default TestimonialCard;
