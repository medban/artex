import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/log.png';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import { useLocation } from "react-router-dom"; 

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation(); 

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (location.pathname === "/About") {
      setActiveLink("About");
    } else if (location.pathname === "/") {
      setActiveLink("home");
    }
  }, [location.pathname]);

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}>
              Home
            </Nav.Link>
            <Nav.Link href="#project" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}>
              Products
            </Nav.Link>
            <Nav.Link href="/About" className={activeLink === 'About' ? 'active navbar-link' : 'navbar-link'}>
              About
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.facebook.com/ArtexTunisie"><img src={navIcon2} alt="fb" /></a>
              <a href="https://www.instagram.com/artextunisie/"><img src={navIcon3} alt="insta" /></a>
            </div>
            {location.pathname === "/" && (
              <HashLink to="#connect">
                <button className="vvd"><span>Contactez-nous</span></button>
              </HashLink>
            )}
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
