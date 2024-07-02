import { useState, useEffect } from "react";
import { Navbar, Nav, Container, Col } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

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
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
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
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">

                <a href="https://www.linkedin.com/in/chrisshaji/" target="_blank">
                  <img  rel="noopener noreferrer" src={navIcon1} alt="https://www.linkedin.com/in/chrisshaji/"/>
                </a>
              </div>
              <HashLink to='#connect'>
              <a href="https://drive.google.com/file/d/1HTI2-Xasf0YnujmjeZIR0ftCk--Jj2GY/view" target="_blank" rel="noopener noreferrer">
                <button className="vvd">
                  <span>Download Resume</span>
                </button>
              </a>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
