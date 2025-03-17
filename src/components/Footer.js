import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logowite.png";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
    
          <Col size={12} sm={6}>
          <a href="#home">  <img src={logo} alt="Logo" /> </a>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
           
            <a href="https://www.facebook.com/ArtexTunisie"><img src={navIcon2} alt="fb" /></a>
            <a href="https://www.instagram.com/artextunisie/"><img src={navIcon3} alt="insta" /></a>
            </div>
            
            <p>Copyright 2025. created by PROMITM </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
