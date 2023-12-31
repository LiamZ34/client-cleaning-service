// Home.js
import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">

<div className=" px-4 py-5 my-5 text-center rounded-3 border shadow-lg bg-opacity-25 bg-dark content">
    
    <h1 className="display-5 fw-bold">Your trusted cleaning service</h1>
    <div className="col-lg-6 mx-auto">
      <p className="lead mb-4">Transforming Spaces, One Cleaning at a Time</p>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
       
        <button type="button" className="btn btn-outline-secondary btn-lg px-4">Contact Us</button>
      </div>
    </div>
  </div>
      </div>

      <div className="about-section"> 
      <div className="aboutUs">

        <h2 className=' display-4 lh-1 fw-bold'>About Us</h2>
        <p className='lead'>
          Welcome to our cleaning service! With years of experience, we provide top-notch
          cleaning services tailored to your needs. Our dedicated team is committed to
          delivering excellence and ensuring your space is spotless.
        </p>
      </div>
      <div className='empty'>

      </div>

{/* <div className="container my-5 about">
    <div className="p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
      <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
        <h1 className="display-4 fw-bold lh-1">Border hero with cropped image and shadows</h1>
        <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
          <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Primary</button>
          <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button>
        </div>
      </div>
      <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
      </div>
    </div>
  </div> */}

      </div>

      <div className="cta-section">
        <div className='empty'>
        </div>
        <div className='aboutUs'>

        <h2 className='display-4 lh-1 fw-bold'>Our Services</h2>
        <p className='lead'>
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
