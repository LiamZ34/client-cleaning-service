// Home.js
import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { amy } from "./assets/images"

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">

<div className=" px-4 py-5 my-5 text-center rounded-3 border shadow-lg bg-opacity-25 bg-dark content">
    
    <h1 className="display-5 fw-bold">Your trusted cleaning service</h1>
    <div className="col-lg-6 mx-auto">
      <p className="lead mb-3">Transforming Spaces, One Cleaning at a Time</p>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
       
        <button type="button" className="btn btn-outline-light btn-lg px-4">Request A Quote</button>
      </div>
    </div>
  </div>
      </div>

      <div className="px-4 pt-5 text-center why-how-section">
    <h1 className="display-4 fw-bold why-section">Why choose us?</h1>
    <div className="col-lg-6 mx-auto">
      <p className="lead mb-4">At Elizabeth's Cleaning Services, we redefine standards with meticulous
       attention to detail, a passion for exceeding expectations, and a commitment to unparalleled customer
        satisfaction. Beyond mere cleaning, our professional team crafts environments tailored to your preferences.
         With eco-friendly practices, customizable services, and a promise of reliability, we transform spaces into
          havens of cleanliness. </p>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">

      </div>
    </div>

    <h1 className="display-4 fw-bold how-section">How it works</h1>
     
      <div className="container marketing">
    <div className="row">
      <div className="col-lg-4">
        <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

        <h2></h2>
        <p className="lead mb-4">Request a personlized quote</p>
      </div>

      <div className="col-lg-4">
        <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

        <h2></h2>
        <p className="lead mb-4">Book your first cleaning</p>
      </div>
      <div className="col-lg-4">
        {/* <svg className="bd-placeholder-img rounded-circle " width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg> */}
        <img src={amy} alt='logo' className='rounded-circle' width="140" height="140" />
        <h2></h2>
        <p className="lead mb-4">Sit back, relax and prepare to welcome our expert cleaners into your home</p>
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

        <Link to="/services">
        <button className="btn btn-outline-dark">Learn More</button>
      </Link>
      </div>
      <div className='empty'>

      </div>

      </div>

      <div className="cta-section">
        <div className='empty'>
        </div>
        <div className='aboutUs'>

        <h2 className='display-4 lh-1 fw-bold'>Our Services</h2>
        <p className='lead'>
          Elizabeth's cleaning services offers a variety of services to fit your needs.
        </p>

        <Link to="/services">
        <button className="btn btn-outline-light">Learn More</button>
      </Link>

        </div>
      </div>

<div className='reviews-section'>
  <h2 className='review-title display-5 lh-1 fw-bold'> Reviews</h2>

      <div className="container marketing">
    <div className="row">
      <div className="col-lg-4">
        <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

        <h2>Cheryl</h2>
        <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
        <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
      </div>
      
      
      <div className="col-lg-4">
        <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

        <h2>Lisa</h2>
        <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
        <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
      </div>
      <div className="col-lg-4">
        {/* <svg className="bd-placeholder-img rounded-circle " width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg> */}
        <img src={amy} alt='logo' className='rounded-circle' width="140" height="140" />
        <h2>Amy</h2>
        <p>And lastly this, the third column of representative placeholder content.</p>
        <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
      </div>
    </div>
    </div>
    </div>
{/*   */}
    </div>
  );
};

export default Home;
