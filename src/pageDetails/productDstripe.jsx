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
  { src: Img1, text: "Avec son motif Grain de Café raffiné, cette fouta Du Artex Tunisie allie tradition et élégance. Légère, douce et absorbante, elle est parfaite pour la plage, le hammam ou en déco intérieure. Un incontournable du linge tunisien.",sku:"GC001" },
  { src: Img2, text: "Avec son motif Grain de Café raffiné, cette fouta Du Artex Tunisie allie tradition et élégance. Légère, douce et absorbante, elle est parfaite pour la plage, le hammam ou en déco intérieure. Un incontournable du linge tunisien.",sku:"GC002" },
  { src: Img3, text: "Avec son motif Grain de Café raffiné, cette fouta Du Artex Tunisie allie tradition et élégance. Légère, douce et absorbante, elle est parfaite pour la plage, le hammam ou en déco intérieure. Un incontournable du linge tunisien.",sku:"GC003" },
  { src: Img4, text: "Avec son motif Grain de Café raffiné, cette fouta Du Artex Tunisie allie tradition et élégance. Légère, douce et absorbante, elle est parfaite pour la plage, le hammam ou en déco intérieure. Un incontournable du linge tunisien.",sku:"GC004" },
  { src: Img5, text: "Avec son motif Grain de Café raffiné, cette fouta Du Artex Tunisie allie tradition et élégance. Légère, douce et absorbante, elle est parfaite pour la plage, le hammam ou en déco intérieure. Un incontournable du linge tunisien.",sku:"GC005" },
  { src: Img6, text: "Avec son motif Grain de Café raffiné, cette fouta Du Artex Tunisie allie tradition et élégance. Légère, douce et absorbante, elle est parfaite pour la plage, le hammam ou en déco intérieure. Un incontournable du linge tunisien.",sku:"GC006" },
  { src: Img7, text: "Avec son motif Grain de Café raffiné, cette fouta Du Artex Tunisie allie tradition et élégance. Légère, douce et absorbante, elle est parfaite pour la plage, le hammam ou en déco intérieure. Un incontournable du linge tunisien.",sku:"GC007" },
  { src: Img8, text: "Avec son motif Grain de Café raffiné, cette fouta Du Artex Tunisie allie tradition et élégance. Légère, douce et absorbante, elle est parfaite pour la plage, le hammam ou en déco intérieure. Un incontournable du linge tunisien.",sku:"GC008" },
  { src: Img9, text: "Avec son motif Grain de Café raffiné, cette fouta Du Artex Tunisie allie tradition et élégance. Légère, douce et absorbante, elle est parfaite pour la plage, le hammam ou en déco intérieure. Un incontournable du linge tunisien.",sku:"GC009" },
  { src: Img10, text: "Avec son motif Grain de Café raffiné, cette fouta Du Artex Tunisie allie tradition et élégance. Légère, douce et absorbante, elle est parfaite pour la plage, le hammam ou en déco intérieure. Un incontournable du linge tunisien.",sku:"GC010" }
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
                    <span className="tagline">ARTEX TUNISIE</span>
                    <h1>GRAIN DE CAFE</h1>
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
