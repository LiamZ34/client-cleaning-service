import React from 'react';
import { Link, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import './About.css'; 

const AboutUs = () => {
  const scrollToNextSection = () => {
    scroll.scrollTo(700); // Adjust the value based on your content height
  };

  return (
    <div>
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Our Company</h1>
          <p>Discover the story behind our success.</p>
          <Link to="about-section" smooth={true} duration={500}>
            <div className="arrow-down" onClick={scrollToNextSection}></div>
          </Link>
        </div>
      </section>

      <Element name="about-section" className="element">
        <section className="about-us">
          <div className="about-content">
            <h2>About Us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
            <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
          </div>
        </section>
      </Element>
    </div>
  );
};

export default AboutUs;
