
import { useState } from "react";
import { Container, Row, Col, Carousel, Modal } from "react-bootstrap";

import Imj1 from "../assets/img/DAIMOND/1.JPG";
import Imj2 from "../assets/img/DAIMOND/2.JPG";
import Imj3 from "../assets/img/DAIMOND/3.JPG";
import Imj4 from "../assets/img/DAIMOND/4.JPG";
import Imj5 from "../assets/img/DAIMOND/5.JPG";
import Imj6 from "../assets/img/DAIMOND/6.JPG";
import Imj7 from "../assets/img/jeter/XXL-1-1.jpg";
import Imj8 from "../assets/img/jeter/XXL-10-2.jpg";
import Imj9 from "../assets/img/jeter/XXL-15.jpg";
import Imj10 from "../assets/img/jeter/XXL-16-1.jpg";
import Imj11 from "../assets/img/jeter/XXL-2.jpg";
import Imj12 from "../assets/img/jeter/XXL-3.jpg";
import Imj13 from "../assets/img/jeter/XXL-4-.jpg";
import Imj14 from "../assets/img/jeter/XXL-5.jpg";
import Imj15 from "../assets/img/jeter/XXL-7.jpg";

import "animate.css";
import "../App.css"

import { Footer } from "../components/Footer";
import TrackVisibility from "react-on-screen";

const images = [
  { src: Imj1, text: "Écharpe en laine 100% naturelle, tissée à la main avec soin." },
  { src: Imj2, text: "Écharpe en coton doux, idéale pour toutes les saisons." },
  { src: Imj3, text: "Écharpe élégante en lin, alliant confort et style." },
  { src: Imj4, text: "Modèle exclusif avec des motifs inspirés de la tradition tunisienne." },
  { src: Imj5, text: "Écharpe en soie luxueuse, parfaite pour les occasions spéciales." },
  { src: Imj6, text: "Écharpe en laine 100% naturelle, tissée à la main avec soin." },
  { src: Imj7, text: "Écharpe en laine 100% naturelle, tissée à la main avec soin." },
  { src: Imj8, text: "Écharpe en laine 100% naturelle, tissée à la main avec soin." },
  { src: Imj9, text: "Écharpe en laine 100% naturelle, tissée à la main avec soin." },
  { src: Imj10, text: "Écharpe en laine 100% naturelle, tissée à la main avec soin." },
  { src: Imj11, text: "Écharpe en laine 100% naturelle, tissée à la main avec soin." },
  { src: Imj12, text: "Écharpe en laine 100% naturelle, tissée à la main avec soin." },
  { src: Imj13, text: "Écharpe en laine 100% naturelle, tissée à la main avec soin." },
  { src: Imj14, text: "Écharpe en laine 100% naturelle, tissée à la main avec soin." },
  { src: Imj15, text: "Écharpe en laine 100% naturelle, tissée à la main avec soin." },
 
 

  
];

const Jeter = () => {
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
                    <h1>ARTEX TUNISIE</h1>
                    <p>{images[activeIndex].text}</p>
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

export default Jeter;
