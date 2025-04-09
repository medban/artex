
import { useState } from "react";
import { Container, Row, Col, Carousel, Modal } from "react-bootstrap";

import Imj1 from "../assets/img/arcachon/ar1.JPG";
import Imj2 from "../assets/img/arcachon/ar2.JPG";
import Imj3 from "../assets/img/arcachon/ar3.JPG";
import Imj4 from "../assets/img/arcachon/ar4.JPG";
import Imj5 from "../assets/img/arcachon/ar5.JPG";
import Imj6 from "../assets/img/arcachon/ar6.JPG";
import Imj7 from "../assets/img/arcachon/ar7.JPG";
import Imj8 from "../assets/img/arcachon/ar8.JPG";
import Imj9 from "../assets/img/arcachon/ar9.JPG";
import Imj10 from "../assets/img/arcachon/ar10.JPG";


import "animate.css";
import "../App.css"

import { Footer } from "../components/Footer";
import TrackVisibility from "react-on-screen";

const images = [
  { src: Imj1, text: "100% coton dimonsion 1m/2m",sku:"AR001" },
  { src: Imj2, text: "100% coton dimonsion 1m/2m",sku:"AR002" },
  { src: Imj3, text: "100% coton dimonsion 1m/2m",sku:"AR003" },
  { src: Imj4, text: "100% coton dimonsion 1m/2m",sku:"AR004" },
  { src: Imj5, text: "100% coton dimonsion 1m/2m",sku:"AR005" },
  { src: Imj6, text: "100% coton dimonsion 1m/2m",sku:"AR006" },
  { src: Imj7, text: "100% coton dimonsion 1m/2m",sku:"AR007" },
  { src: Imj8, text: "100% coton dimonsion 1m/2m",sku:"AR008" },
  { src: Imj9, text: "100% coton dimonsion 1m/2m",sku:"AR009" },
  { src: Imj10, text: "100% coton dimonsion 1m/2m",sku:"AR010" },
  
];

const ArcachonDET = () => {
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
                    <span className="tagline">ARTEX TUNISIE</span>
                    <h1>ARCACHON</h1>
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

export default ArcachonDET;
