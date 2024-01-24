import React from 'react';
import { Link, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import './Services.css'; 
import { amy, booking, request, relax, lisa, cheryl } from "./assets/images"

const Services = () => {
  const scrollToNextSection = () => {
    scroll.scrollTo(700); // Adjust the value based on your content height
  };

  return (
    <div>
      <section className="services-hero">
        <div className="hero-content">
          <h1 className="display-5 fw-bold">Services</h1>
          <Link to="about-section" smooth={true} duration={500}>
            <div className="arrow-down" onClick={scrollToNextSection}></div>
          </Link>
        </div>
      </section>

      <Element name="about-section" className="element">
      <div>
      {/* Full Services Section */}
  <div className='fullService-section'>
  <h2 className='fullService-title display-8 fw-bold'>Full Service Includes:</h2>

      <div className="container marketing">
    <div className="row">
      <div className="col-lg-4">
      <img src={cheryl} alt='logo' className='' width="140" height="140" />
        <h2>Kitchens</h2>
        <p>All sinks, surfaces, and floors, includes inside microwaves, cabinets and outside refrigerator.</p>
    
      </div>    
      <div className="col-lg-4">
      <img src={lisa} alt='logo' className='' width="140" height="140" />
        <h2>Bathrooms</h2>
        <p>All sinks, surfaces, toilets, showers, mirrors and floors. Including cleaning tiles and disinfecting towels.</p>
       
      </div>
      <div className="col-lg-4">
        {/* <svg className="bd-placeholder-img rounded-circle " width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg> */}
        <img src={amy} alt='logo' className='' width="140" height="140" />
        <h2>Whole House</h2>
        <p>We take out garbage and tidy all rooms, we also dust and vacuum.</p>
       
      </div>
    </div>
    </div>
    </div>

      {/* Special Requests Section */}
      <div className='specialRequest-section'>
  <h2 className='specialRequest-title display-8 fw-bold'>Special Requests?</h2>

      <div className="container marketing">
    <div className="row">
      <div className="col-lg-4">
      <img src={cheryl} alt='logo' className='' width="140" height="140" />
        <h2>Move in/Move outs</h2>
        <p>All sinks, surfaces, and floors, includes inside microwaves, cabinets and outside refrigerator.</p>
    
      </div>    
      <div className="col-lg-4">
      <img src={lisa} alt='logo' className='' width="140" height="140" />
        <h2>Garbage and oganization</h2>
        <p>All sinks, surfaces, toilets, showers, mirrors and floors. Including cleaning tiles and disinfecting towels.</p>
       
      </div>
      <div className="col-lg-4">
        {/* <svg className="bd-placeholder-img rounded-circle " width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg> */}
        <img src={amy} alt='logo' className='' width="140" height="140" />
        <h2>One Time Options</h2>
        <p>We take out garbage and tidy all rooms, we also dust and vacuum.</p>
       
      </div>
    </div>
    </div>
    </div>
    </div>
      </Element>
    </div>
  );
};

export default Services;
