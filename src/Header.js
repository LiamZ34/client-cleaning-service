// Header.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { Navbar, Nav, Container } from 'react-bootstrap'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headerClass = isScrolled ? 'header opaque' : 'header';

  return (
    <header className={headerClass}>
      {/* <nav className="nav navbar navbar-expand-md mb-4">
        <div className='container-fluid'>

      <Link to="/" className="logo navbar-brand">Elizabeth</Link>

      <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className='collapse navbar-collapse' id='navbarCollapse'>

        <ul className="navbar-nav me-auto mb-2 mb-md-0 nav">
        <li className="nav-item"><Link className='nav-link' to="/">Home</Link></li>
        <li className="nav-item"><Link className='nav-link' to="/services">Services</Link></li>
        <li className="nav-item"><Link className='nav-link' to="/contact">Contact</Link></li>
        <li className="nav-item"><Link className='nav-link' to="/testimonials">Testimonials</Link></li>
      </ul>
    </div>
        </div>
      </nav> */}

<Navbar  variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Your Logo/Brand</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/services">Services</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </header>

    
  );
};

export default Header;
