import React from 'react';
import { Link, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import './Services.css'; 

const Services = () => {
  const scrollToNextSection = () => {
    scroll.scrollTo(700); // Adjust the value based on your content height
  };

  return (
    <div>
      <section className="hero">
        <div className="hero-content">
          <h1 className="display-5 fw-bold">Services</h1>
          <Link to="about-section" smooth={true} duration={500}>
            <div className="arrow-down" onClick={scrollToNextSection}></div>
          </Link>
        </div>
      </section>

      <Element name="about-section" className="element">
        
      </Element>
    </div>
  );
};

export default Services;
