// Home.js
import React from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Button } from 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="hero-content">
        <h1>Your Trusted Cleaning Service</h1>
        <p>Transforming Spaces, One Cleaning at a Time</p>
        <button>Contact Us</button>
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
