import { useState } from "react";
import { Container, Row, Col, Carousel, Modal } from "react-bootstrap";

import Img1 from "../assets/img/chevron/bleu clair.jpg";
import Img2 from "../assets/img/chevron/bleu unique.jpg";
import Img3 from "../assets/img/chevron/bleu.jpg";
import Img4 from "../assets/img/chevron/brown gray.jpg";
import Img5 from "../assets/img/chevron/gold.jpg";
import Img6 from "../assets/img/chevron/gray.jpg";
import Img7 from "../assets/img/chevron/oragne verte.jpg";
import Img8 from "../assets/img/chevron/orange noire.jpg";
import Img9 from "../assets/img/chevron/pistache.jpg";
import Img10 from "../assets/img/chevron/rsoe bleu.jpg";
import Img11 from "../assets/img/chevron/tirqoise bleu.jpg";
import Img12 from "../assets/img/chevron/verte jeaun.jpg";
import Img13 from "../assets/img/chevron/verte.jpg";
import Img14 from "../assets/img/chevron/1.JPG";
import Img15 from "../assets/img/chevron/2.JPG";
import Img16 from "../assets/img/chevron/3.JPG";
import Img17 from "../assets/img/chevron/4.JPG";

import "animate.css";

import { Footer } from "../components/Footer";
import TrackVisibility from "react-on-screen";

const images = [
  { src: Img1, text: "Écharpe en laine 100% naturelle, tissée à la main avec soin." },
  { src: Img2, text: "Écharpe en coton doux, idéale pour toutes les saisons." },
  { src: Img3, text: "Écharpe élégante en lin, alliant confort et style." },
  { src: Img4, text: "Modèle exclusif avec des motifs inspirés de la tradition tunisienne." },
  { src: Img5, text: "Écharpe en soie luxueuse, parfaite pour les occasions spéciales." },
  { src: Img6, text: "Écharpe en laine 100% naturelle, tissée à la main avec soin." },
  { src: Img7, text: "Écharpe en coton doux, idéale pour toutes les saisons." },
  { src: Img8, text: "Écharpe élégante en lin, alliant confort et style." },
  { src: Img9, text: "Modèle exclusif avec des motifs inspirés de la tradition tunisienne." },
  { src: Img10, text: "Écharpe en soie luxueuse, parfaite pour les occasions spéciales." },
  { src: Img11, text: "Écharpe élégante en lin, alliant confort et style." },
  { src: Img12, text: "Modèle exclusif avec des motifs inspirés de la tradition tunisienne." },
  { src: Img13, text: "Écharpe en soie luxueuse, parfaite pour les occasions spéciales." },
  { src: Img14, text: "Écharpe en soie luxueuse, parfaite pour les occasions spéciales." },
  { src: Img15, text: "Écharpe en soie luxueuse, parfaite pour les occasions spéciales." },
  { src: Img16, text: "Écharpe en soie luxueuse, parfaite pour les occasions spéciales." },
  { src: Img17, text: "Écharpe en soie luxueuse, parfaite pour les occasions spéciales." }

  
];

const ProductDchevron = () => {
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
          <img src={selectedImage} alt="Zoomed I" className="img-fluid" />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ProductDchevron;
