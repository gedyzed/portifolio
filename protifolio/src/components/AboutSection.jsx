import React from 'react';

const AboutSection = () => {
    return (
        <section className="section pt-0" id="about">
            {/* container */}
            <div className="container text-center">
                {/* about wrapper */}
                <div className="row align-items-center">
                    {/* About Image */}
                    <div className="col-md-6">
                        <div className="about-img-holder">
                            <img 
                                src="assets/imgs/man.png" 
                                className="about-img img-fluid" 
                                alt="About Me"
                            />
                        </div>
                    </div>

                    {/* About Text */}
                    <div className="col-md-6">
                        <div className="about-caption">
                            <p className="section-subtitle">Who Am I?</p>
                            <h2 className="section-title mb-3">About Me</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae aliquid ad provident aut
                                fuga animi soluta quae eos non cupiditate voluptates dolorem, doloremque quos dicta quibusdam
                                impedit iure nemo a iste culpa! Quasi quibusdam hic recusandae delectus velit officiis explicabo 
                                voluptatibus! Nemo esse similique, voluptates labore distinctio, placeat explicabo facilis 
                                molestias, blanditiis culpa iusto voluptatem ratione eligendi a, quia temporibus velit vero 
                                ipsa sint ex voluptatum expedita aliquid! Debitis, nam!
                            </p>
                            <button className="btn btn-outline-primary mt-4">Download CV</button>
                        </div>
                    </div>
                </div>{/* end of about wrapper */}
            </div>{/* end of container */}
        </section> 
    );
};

export default AboutSection;
