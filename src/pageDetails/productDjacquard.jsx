import { useState } from "react";
import { Container, Row, Col, Carousel, Modal } from "react-bootstrap";

import Img1 from "../assets/img/jacquard/berber/blue berber.jpg";
import Img2 from "../assets/img/jacquard/berber/blue gold berber.jpg";
import Img3 from "../assets/img/jacquard/berber/blue orange berber.jpg";
import Img4 from "../assets/img/jacquard/berber/orange blue berber.jpg";
import Img5 from "../assets/img/jacquard/berber/rouge berber.jpg";
import Img6 from "../assets/img/jacquard/berber/rouge blue berber.jpg";
import Img12 from "../assets/img/jacquard/leaf/gray leaf.jpg";
import Img13 from "../assets/img/jacquard/leaf/leaf gold.jpg";
import Img14 from "../assets/img/jacquard/leaf/leaf blue.jpg";
import Img15 from "../assets/img/jacquard/leaf/leaf red.jpg";
import Img16 from "../assets/img/jacquard/leaf/jac orange blue.jpg";
import Img17 from "../assets/img/jacquard/leaf/jac orange.jpg";
import Img18 from "../assets/img/jacquard/bordeaux tortue.jpg";
import Img19 from "../assets/img/jacquard/rouge tortue.jpg";
import Img20 from "../assets/img/jacquard/tortie.jpg";
import Img21 from "../assets/img/jacquard/verte tortue.jpg";
import Img22 from "../assets/img/jacquard/caree blue.jpg";

import "animate.css";
import { Footer } from "../components/Footer";
import TrackVisibility from "react-on-screen";
import "../App.css"

const images = [
  { src: Img1, text: "Écharpe en laine 100% naturelle, tissée à la main avec soin.",sku :"J001" },
  { src: Img2, text: "Écharpe en coton doux, idéale pour toutes les saisons.",sku :"J002" },
  { src: Img3, text: "Écharpe élégante en lin, alliant confort et style.",sku :"J003" },
  { src: Img4, text: "Modèle exclusif avec des motifs inspirés de la tradition tunisienne.",sku :"J004" },
  { src: Img5, text: "Écharpe en soie luxueuse, parfaite pour les occasions spéciales.",sku :"J005" },
  { src: Img6, text: "Design moderne et raffiné, adapté à toutes vos tenues.",sku :"J006" },
  { src: Img12, text: "Écharpe en laine 100% naturelle, tissée à la main avec soin.",sku :"J007" },
  { src: Img13, text: "Écharpe en coton doux, idéale pour toutes les saisons.",sku :"J008" },
  { src: Img14, text: "Écharpe élégante en lin, alliant confort et style.",sku :"J009" },
  { src: Img15, text: "Modèle exclusif avec des motifs inspirés de la tradition tunisienne.",sku :"J010" },
  { src: Img16, text: "Écharpe en soie luxueuse, parfaite pour les occasions spéciales.",sku :"J011" },
  { src: Img17, text: "Design moderne et raffiné, adapté à toutes vos tenues.",sku :"J012" },
  { src: Img18, text: "Design moderne et raffiné, adapté à toutes vos tenues.",sku :"J013" },
  { src: Img19, text: "Design moderne et raffiné, adapté à toutes vos tenues.",sku :"J014" },
  { src: Img20, text: "Design moderne et raffiné, adapté à toutes vos tenues.",sku :"J015" },
  { src: Img21, text: "Design moderne et raffiné, adapté à toutes vos tenues.",sku :"J016" },
  { src: Img22, text: "Design moderne et raffiné, adapté à toutes vos tenues.",sku :"J017" }

];

const ProductDjacquard = () => {
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
                    <h2>JACQUADR</h2>
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

export default ProductDjacquard;
