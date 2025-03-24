import { useState } from "react";
import { Container, Row, Col, Carousel, Modal } from "react-bootstrap";

import Img1 from "../assets/img/stripe/blue ciel.jpg";
import Img2 from "../assets/img/stripe/blue djean.jpg";
import Img3 from "../assets/img/stripe/dark green.jpg";
import Img4 from "../assets/img/stripe/forest green.jpg";
import Img5 from "../assets/img/stripe/gray.jpg";
import Img6 from "../assets/img/stripe/green.jpg";
import Img7 from "../assets/img/stripe/orange.jpg";
import Img8 from "../assets/img/stripe/rose.jpg";
import Img9 from "../assets/img/stripe/tirqose.jpg";
import Img10 from "../assets/img/stripe/verte.jpg";

import "animate.css";
import "../App.css"

import { Footer } from "../components/Footer";
import TrackVisibility from "react-on-screen";

const images = [
  { src: Img1, text: "Écharpe en laine 100% naturelle, tissée à la main avec soin.",sku:"S001" },
  { src: Img2, text: "Écharpe en coton doux, idéale pour toutes les saisons.",sku:"S002" },
  { src: Img3, text: "Écharpe élégante en lin, alliant confort et style.",sku:"S003" },
  { src: Img4, text: "Modèle exclusif avec des motifs inspirés de la tradition tunisienne.",sku:"S004" },
  { src: Img5, text: "Écharpe en soie luxueuse, parfaite pour les occasions spéciales.",sku:"S005" },
  { src: Img6, text: "Design moderne et raffiné, adapté à toutes vos tenues.",sku:"S006" },
  { src: Img7, text: "Design moderne et raffiné, adapté à toutes vos tenues.",sku:"S007" },
  { src: Img8, text: "Design moderne et raffiné, adapté à toutes vos tenues.",sku:"S008" },
  { src: Img9, text: "Design moderne et raffiné, adapté à toutes vos tenues.",sku:"S009" },
  { src: Img10, text: "Design moderne et raffiné, adapté à toutes vos tenues.",sku:"S010" }
];

const ProductDstripe = () => {
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

export default ProductDstripe;
