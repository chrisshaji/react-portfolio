import { useState, useEffect } from "react";
import { Navbar, Nav, Container, Col } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
          <Col size={14} sm={25}>
            <img src={logo} alt="Chris Shaji" />
          </Col>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <Nav.Link
            as={Link}
            to="/"
            className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
            onClick={() => onUpdateActiveLink('home')}
          >
            Home
          </Nav.Link>
          <Nav.Link
            as={HashLink}
            to="/#projects"
            className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
            onClick={() => onUpdateActiveLink('projects')}>
            Projects
          </Nav.Link>

          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/chrisshaji/" target="_blank" rel="noopener noreferrer">
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a href="https://github.com/chrisshaji" target="_blank" rel="noopener noreferrer">
                <img src={navIcon2} alt="GitHub" />
              </a>
            </div>
            <a href="https://drive.google.com/file/d/1Bt-_9CB3iDm3PppN_hyjbbwi4_dgefUE/view?usp=sharing" target="_blank" rel="noreferrer">
              <button className="vvd">
                <span>Download Resume</span>
              </button> 
            </a>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
