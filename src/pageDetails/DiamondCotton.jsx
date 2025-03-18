import { useState } from "react";
import { Container, Row, Col, Carousel, Modal } from "react-bootstrap";

import Im1 from "../assets/img/DAIMOND/1.JPG";
import Im2 from "../assets/img/DAIMOND/2.JPG";
import Im3 from "../assets/img/DAIMOND/3.JPG";
import Im4 from "../assets/img/DAIMOND/4.JPG";
import Im5 from "../assets/img/DAIMOND/5.JPG";
import Im6 from "../assets/img/DAIMOND/6.JPG";
import Im7 from "../assets/img/DAIMOND/7.JPG";
import Im8 from "../assets/img/DAIMOND/8.JPG";
import Im9 from "../assets/img/DAIMOND/9.JPG";
import Im10 from "../assets/img/DAIMOND/10.JPG";
import Im11 from "../assets/img/DAIMOND/11.JPG";

import "animate.css";
import { Footer } from "../components/Footer";
import TrackVisibility from "react-on-screen";

const images = [
  { src: Im1, text: "Écharpe en laine 100% naturelle, tissée à la main avec soin." },
  { src: Im2, text: "Écharpe en coton doux, idéale pour toutes les saisons." },
  { src: Im3, text: "Écharpe élégante en lin, alliant confort et style." },
  { src: Im4, text: "Modèle exclusif avec des motifs inspirés de la tradition tunisienne." },
  { src: Im5, text: "Écharpe en soie luxueuse, parfaite pour les occasions spéciales." },
  { src: Im6, text: "Écharpe en soie luxueuse, parfaite pour les occasions spéciales." },
  { src: Im7, text: "Écharpe en soie luxueuse, parfaite pour les occasions spéciales." },
  { src: Im8, text: "Écharpe en soie luxueuse, parfaite pour les occasions spéciales." },
  { src: Im9, text: "Écharpe en soie luxueuse, parfaite pour les occasions spéciales." },
  { src: Im10, text: "Écharpe en soie luxueuse, parfaite pour les occasions spéciales." },
  { src: Im11, text: "Écharpe en soie luxueuse, parfaite pour les occasions spéciales." },


];

const DiamondCotton = () => {
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
        <img src={selectedImage} alt={selectedImage} className="img-fluid" />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default DiamondCotton;
