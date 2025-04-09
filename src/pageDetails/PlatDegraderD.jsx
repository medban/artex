
import { useState } from "react";
import { Container, Row, Col, Carousel, Modal } from "react-bootstrap";

import Imj1 from "../assets/img/PLAT DEGRADER/PD001.JPG";
import Imj2 from "../assets/img/PLAT DEGRADER/PD002.JPG";
import Imj3 from "../assets/img/PLAT DEGRADER/PD003.JPG";
import Imj4 from "../assets/img/PLAT DEGRADER/PD004.JPG";



import "animate.css";
import "../App.css"

import { Footer } from "../components/Footer";
import TrackVisibility from "react-on-screen";

const images = [
  { src: Imj1, text: "Découvrez la fouta Plat DEGRADER de Du Artex Tunisie, un accessoire à la fois élégant et pratique. Son tissage plat et son design moderne en font un choix parfait pour vos moments de détente. Légère, absorbante et facile à transporter, elle est idéale pour la plage, le hammam ou à la maison",sku:"PD001" },
  { src: Imj2, text: "Découvrez la fouta Plat DEGRADER de Du Artex Tunisie, un accessoire à la fois élégant et pratique. Son tissage plat et son design moderne en font un choix parfait pour vos moments de détente. Légère, absorbante et facile à transporter, elle est idéale pour la plage, le hammam ou à la maison",sku:"PD002" },
  { src: Imj3, text: "Découvrez la fouta Plat DEGRADER de Du Artex Tunisie, un accessoire à la fois élégant et pratique. Son tissage plat et son design moderne en font un choix parfait pour vos moments de détente. Légère, absorbante et facile à transporter, elle est idéale pour la plage, le hammam ou à la maison",sku:"PD003" },
  { src: Imj4, text: "Découvrez la fouta Plat DEGRADER de Du Artex Tunisie, un accessoire à la fois élégant et pratique. Son tissage plat et son design moderne en font un choix parfait pour vos moments de détente. Légère, absorbante et facile à transporter, elle est idéale pour la plage, le hammam ou à la maison",sku:"PD004" },
 
  
];

const PlatDegraderD = () => {
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
                    <h1>PLAT DEGRADER</h1>
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

export default PlatDegraderD;
