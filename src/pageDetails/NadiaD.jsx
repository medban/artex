
import { useState } from "react";
import { Container, Row, Col, Carousel, Modal } from "react-bootstrap";

import Imj1 from "../assets/img/nadia/ND01.JPG";
import Imj2 from "../assets/img/nadia/ND02.JPG";
import Imj3 from "../assets/img/nadia/ND03.JPG";
import Imj4 from "../assets/img/nadia/ND04.JPG";
import Imj5 from "../assets/img/nadia/ND05.JPG";
import Imj6 from "../assets/img/nadia/ND06.JPG";
import Imj7 from "../assets/img/nadia/ND07.JPG";


import "animate.css";
import "../App.css"

import { Footer } from "../components/Footer";
import TrackVisibility from "react-on-screen";

const images = [
  { src: Imj1, text: "Conçue par Mme Nadia Arous, la fouta Nadia de Du Artex Tunisie allie élégance et confort. Son design raffiné et sa texture douce en font un accessoire idéal pour vos moments de détente. Parfaite pour la plage, le hammam ou à la maison, elle offre légèreté, absorption et style.",sku:"ND001" },
  { src: Imj2, text: "Conçue par Mme Nadia Arous, la fouta Nadia de Du Artex Tunisie allie élégance et confort. Son design raffiné et sa texture douce en font un accessoire idéal pour vos moments de détente. Parfaite pour la plage, le hammam ou à la maison, elle offre légèreté, absorption et style.",sku:"ND002" },
  { src: Imj3, text: "Conçue par Mme Nadia Arous, la fouta Nadia de Du Artex Tunisie allie élégance et confort. Son design raffiné et sa texture douce en font un accessoire idéal pour vos moments de détente. Parfaite pour la plage, le hammam ou à la maison, elle offre légèreté, absorption et style.",sku:"ND003" },
  { src: Imj4, text: "Conçue par Mme Nadia Arous, la fouta Nadia de Du Artex Tunisie allie élégance et confort. Son design raffiné et sa texture douce en font un accessoire idéal pour vos moments de détente. Parfaite pour la plage, le hammam ou à la maison, elle offre légèreté, absorption et style.",sku:"ND004" },
  { src: Imj5, text: "Conçue par Mme Nadia Arous, la fouta Nadia de Du Artex Tunisie allie élégance et confort. Son design raffiné et sa texture douce en font un accessoire idéal pour vos moments de détente. Parfaite pour la plage, le hammam ou à la maison, elle offre légèreté, absorption et style.",sku:"ND005" },
  { src: Imj6, text: "Conçue par Mme Nadia Arous, la fouta Nadia de Du Artex Tunisie allie élégance et confort. Son design raffiné et sa texture douce en font un accessoire idéal pour vos moments de détente. Parfaite pour la plage, le hammam ou à la maison, elle offre légèreté, absorption et style.",sku:"ND006" },
  { src: Imj7, text: "Conçue par Mme Nadia Arous, la fouta Nadia de Du Artex Tunisie allie élégance et confort. Son design raffiné et sa texture douce en font un accessoire idéal pour vos moments de détente. Parfaite pour la plage, le hammam ou à la maison, elle offre légèreté, absorption et style.",sku:"ND007" },
 
  
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
                    <h1>NADIA </h1>
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
