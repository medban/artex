import { useState } from "react";
import { Container, Row, Col, Carousel, Modal } from "react-bootstrap";

import Im1 from "../assets/img/soi/TUNIQUE/T.JPG";
import Im2 from "../assets/img/soi/TUNIQUE/T1.JPG";
import Im3 from "../assets/img/soi/TUNIQUE/T2.JPG";
import Im4 from "../assets/img/soi/TUNIQUE/T3.JPG";
import Im5 from "../assets/img/soi/TUNIQUE/T4.JPG";

import "animate.css";
import { Footer } from "../components/Footer";
import TrackVisibility from "react-on-screen";
import "../App.css"
const images = [
  { src: Im1, text: "KOFA inspirés de la tradition tunisienne.",sku:"K001" },
  { src: Im2, text: "KOFA inspirés de la tradition tunisienne.",sku:"K002" },
  { src: Im3, text: "KOFA inspirés de la tradition tunisienne.",sku:"K003" },
  { src: Im4, text: "KOFA inspirés de la tradition tunisienne.",sku:"K004" },
  { src: Im5, text: "KOFA inspirés de la tradition tunisienne.",sku:"K005" },
 

];

const Kofa = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0); 

  const handleShow = (imgSrc) => {
    setSelectedImage(imgSrc);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  return (
    <>
      <section className="banner1" id="home">
        <Container>
          <Row className="align-items-center">
          
            <Col xs={12} md={6} xl={7}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <span className="tagline">ARTEX</span>
                    <h1>ARTEX TUNISIE</h1>
                    <p>{images[activeIndex].text}</p>
                    <p><strong>SKU:</strong> {images[activeIndex].sku}</p>

                  </div>
                )}
              </TrackVisibility>
            </Col>

            <Col xs={12} md={6} xl={5}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                    <Carousel activeIndex={activeIndex} onSelect={(selectedIndex) => setActiveIndex(selectedIndex)}>
                    {images.map((item, index) => (
                     <Carousel.Item key={index} onClick={() => handleShow(item.src)}>
                     <img className="d-block w-100" src={item.src} alt={item.text} />
                   </Carousel.Item>
                    ))}

                    </Carousel>
                  </div>
                )}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </section>

  
      <Footer />

      <Modal show={showModal} onHide={handleClose} centered>
  <Modal.Body className="text-center">
    <img 
      src={selectedImage} 
      alt="Zoomed I" 
      className="img-fluid zoom-image" 
    />
  </Modal.Body>
</Modal>
    </>
  );
};

export default Kofa;
