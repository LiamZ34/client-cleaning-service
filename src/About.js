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
          <h1 className="display-5 fw-bold">About Elizabeth's Cleaning Services</h1>
          <Link to="about-section" smooth={true} duration={500}>
            <div className="arrow-down" onClick={scrollToNextSection}></div>
          </Link>
        </div>
      </section>

      <Element name="about-section" className="element">
        <section className="about-us">
          <div className="about-content">
            <p className='lead mb-3 my-4'>Welcome to Elizabeth's Cleaning Services, where cleanliness meets excellence.
                 Founded with a vision to redefine the standard for cleaning services, our
                  journey began with a commitment to meticulous attention to detail and
                   unparalleled customer satisfaction. At Elizabeth's, we believe in going
                    beyond the ordinary, infusing each cleaning experience with a genuine
                     passion for creating spaces that exceed expectations.</p>

            <p className='lead mb-3 my-4'>Our professional team is the heart of Elizabeth's Cleaning Services. Trained,
                 dedicated, and driven by a shared commitment to excellence, they don't just
                  clean; they curate environments of comfort and hygiene tailored to your unique
                   preferences. We understand that a clean space is more than just a task; it's an
                    integral part of enhancing your daily living.</p>

            <p className='lead mb-3 my-4'>What sets us apart is our holistic approach to cleaning. We embrace eco-friendly practices,
                 ensuring that our services not only leave your space immaculate but also contribute to a
                  healthier planet. From customizable services to a steadfast promise of reliability, Elizabeth's
                   Cleaning Services transforms every space into a haven of cleanliness, delivering an unparalleled
                    cleaning experience you can trust. Join us in embracing a cleaner, more vibrant living environment
                     with Elizabeth's Cleaning Services.</p>
          </div>
          <button className='btn btn-outline-dark btn-lg button'>Request A Quote</button>
        </section>
      </Element>
    </div>
  );
};

export default AboutUs;
