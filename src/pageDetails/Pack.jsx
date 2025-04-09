
    import { useState } from "react";
import { Container, Row, Col, Carousel, Modal } from "react-bootstrap";

import ImE1 from "../assets/img/pack/servietteblanche.webp";
import ImE2 from "../assets/img/pack/serviettebleuciel.webp";
import ImE3 from "../assets/img/pack/serviettebleumarine.webp";
import ImE4 from "../assets/img/pack/serviettegrise.webp";
import ImE5 from "../assets/img/pack/servietteoranger.webp";
import ImE6 from "../assets/img/pack/servietteturquoise.webp";
import ImE7 from "../assets/img/pack/servietteverte.webp";
import ImE8 from "../assets/img/pack/servietteverteforet.webp";

import "animate.css";
import "../App.css"

import { Footer } from "../components/Footer";
import TrackVisibility from "react-on-screen";

const images = [
  { src: ImE1, text: "",sku:"P001" },
  { src: ImE2, text: "",sku:"P002" },
  { src: ImE3, text: "",sku:"P003" },
  { src: ImE4, text: "",sku:"P004" },
  { src: ImE5, text: "",sku:"P005" },
  { src: ImE6, text: "",sku:"P006" },
  { src: ImE7, text: "",sku:"P007" },
  { src: ImE8, text: "",sku:"P008" },
 

  
];

const Pack = () => {
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
      
            <Col xs={12} md={6} xl={4}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <span className="tagline">ARTEX</span>
                    <h1>PACK ARTEX </h1>
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
                          <img className="d-block w-100" src={item.src} alt={`Slide ${index + 1}`} />
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

export default Pack;
