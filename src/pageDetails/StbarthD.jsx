
import { useState } from "react";
import { Container, Row, Col, Carousel, Modal } from "react-bootstrap";

import Imj1 from "../assets/img/st barth/ST001.JPG";
import Imj2 from "../assets/img/st barth/ST002.JPG";
import Imj3 from "../assets/img/st barth/ST003.JPG";
import Imj4 from "../assets/img/st barth/ST004.JPG";
import Imj5 from "../assets/img/st barth/ST005.JPG";

import "animate.css";
import "../App.css"

import { Footer } from "../components/Footer";
import TrackVisibility from "react-on-screen";

const images = [
  { src: Imj1, text: "Évadez-vous sous les tropiques avec la fouta Saint Barth de Du Artex Tunisie. Son motif élégant et sa texture douce apportent un air de vacances à chaque utilisation. Légère, absorbante et rapide à sécher, elle est parfaite pour la plage, le hammam ou chez vous.",sku:"ST001" },
  { src: Imj2, text: "Évadez-vous sous les tropiques avec la fouta Saint Barth de Du Artex Tunisie. Son motif élégant et sa texture douce apportent un air de vacances à chaque utilisation. Légère, absorbante et rapide à sécher, elle est parfaite pour la plage, le hammam ou chez vous.",sku:"ST002" },
  { src: Imj3, text: "Évadez-vous sous les tropiques avec la fouta Saint Barth de Du Artex Tunisie. Son motif élégant et sa texture douce apportent un air de vacances à chaque utilisation. Légère, absorbante et rapide à sécher, elle est parfaite pour la plage, le hammam ou chez vous.",sku:"ST003" },
  { src: Imj4, text: "Évadez-vous sous les tropiques avec la fouta Saint Barth de Du Artex Tunisie. Son motif élégant et sa texture douce apportent un air de vacances à chaque utilisation. Légère, absorbante et rapide à sécher, elle est parfaite pour la plage, le hammam ou chez vous.",sku:"ST004" },
  { src: Imj5, text: "Évadez-vous sous les tropiques avec la fouta Saint Barth de Du Artex Tunisie. Son motif élégant et sa texture douce apportent un air de vacances à chaque utilisation. Légère, absorbante et rapide à sécher, elle est parfaite pour la plage, le hammam ou chez vous.",sku:"ST005" },

 
  
];

const StbarthD = () => {
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
                    <h1>SAINT BARTH</h1>
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

export default StbarthD;
