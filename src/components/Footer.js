import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logowite.png";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center text-center text-sm-start">
          <Col xs={12} sm={4}>
            <a href="#home">
              <img src={logo} alt="Logo" />
            </a>
          </Col>

          <Col xs={12} sm={4} className="my-3 my-sm-0">
            <p className="mb-0">TEL : +216 73 671 424</p>
            <p className="mb-0">WHATSAPP : +216 98 794 858</p>

            <p className="mb-0">ADRESSE : zone industrial rue de boumerdes mahdia, Tunisia</p>
            <p className="mb-0">EMAIL : info@artextunisie.com</p>

          </Col>

          <Col xs={12} sm={4} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.facebook.com/ArtexTunisie">
                <img src={navIcon2} alt="fb" />
              </a>
              <a href="https://www.instagram.com/artextunisie/">
                <img src={navIcon3} alt="insta" />
              </a>
            </div>
            <p>Copyright 2025. created by PROMITM </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
