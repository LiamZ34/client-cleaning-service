// Home.js
import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        {/* <div className="hero-content">
        <h1>Your Trusted Cleaning Service</h1>
        <p>Transforming Spaces, One Cleaning at a Time</p>
        <button>Contact Us</button>
        </div> */}

<div className="px-4 py-5 my-5 text-center">
    
    <h1 className="display-5 fw-bold">Centered hero</h1>
    <div className="col-lg-6 mx-auto">
      <p className="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button" className="btn btn-primary btn-lg px-4 gap-3">Primary button</button>
        <button type="button" className="btn btn-outline-secondary btn-lg px-4">Secondary</button>
      </div>
    </div>
  </div>


      </div>

      <div className="about-section"> 
      <div className="aboutUs">

        <h2>About Us</h2>
        <p>
          Welcome to our cleaning service! With years of experience, we provide top-notch
          cleaning services tailored to your needs. Our dedicated team is committed to
          delivering excellence and ensuring your space is spotless.
        </p>
      </div>
      <div className='empty'>

      </div>
      </div>

      <div className="cta-section">
        <div className='empty'>
        </div>
        <div className='aboutUs'>

        <h2>Our Services</h2>
        <p>
          Elizabeth cleaning services offers a variety of services to fit your needs.
        </p>

        <Link to="/services">
        <button className="btn btn-outline-light">Learn More</button>
      </Link>

        </div>
      </div>
    </div>
  );
};

export default Home;
