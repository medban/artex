import { useState } from "react";
import { Container, Row, Col, Carousel, Modal } from "react-bootstrap";

import Img1 from "../assets/img/tissu plat/beige.jpg";
import Img2 from "../assets/img/tissu plat/bleu marin.jpg";
import Img3 from "../assets/img/tissu plat/forest green.jpg";
import Img4 from "../assets/img/tissu plat/gray.jpg";
import Img5 from "../assets/img/tissu plat/jeaun.jpg";
import Img6 from "../assets/img/tissu plat/maron.jpg";
import Img7 from "../assets/img/tissu plat/maroon.jpg";
import Img8 from "../assets/img/tissu plat/noire.jpg";
import Img9 from "../assets/img/tissu plat/orange.jpg";
import Img10 from "../assets/img/tissu plat/pistache.jpg";
import Img11 from "../assets/img/tissu plat/rose bebe.jpg";
import Img12 from "../assets/img/tissu plat/rose phachia.jpg";
import Img13 from "../assets/img/tissu plat/rouge.jpg";
import Img14 from "../assets/img/tissu plat/verte brasil.jpg";
import Img15 from "../assets/img/tissu plat/verte d'eau.jpg";
import Img16 from "../assets/img/tissu plat/1.JPG";
import Img17 from "../assets/img/tissu plat/2.JPG";
import Img18 from "../assets/img/tissu plat/3.JPG";
import Img19 from "../assets/img/tissu plat/4.JPG";

import "animate.css";
import { Footer } from "../components/Footer";
import TrackVisibility from "react-on-screen";

const images = [
  { src: Img1, text: "Écharpe en laine 100% naturelle, tissée à la main avec soin." },
  { src: Img2, text: "Écharpe en coton doux, idéale pour toutes les saisons." },
  { src: Img3, text: "Écharpe élégante en lin, alliant confort et style." },
  { src: Img4, text: "Modèle exclusif avec des motifs inspirés de la tradition tunisienne." },
  { src: Img5, text: "Écharpe en soie luxueuse, parfaite pour les occasions spéciales." },
  { src: Img6, text: "Design moderne et raffiné, adapté à toutes vos tenues." },
  { src: Img7, text: "Design moderne et raffiné, adapté à toutes vos tenues." },
  { src: Img8, text: "Design moderne et raffiné, adapté à toutes vos tenues." },
  { src: Img9, text: "Design moderne et raffiné, adapté à toutes vos tenues." },
  { src: Img10, text: "Design moderne et raffiné, adapté à toutes vos tenues." },
  { src: Img11, text: "Design moderne et raffiné, adapté à toutes vos tenues." },
  { src: Img12, text: "Design moderne et raffiné, adapté à toutes vos tenues." },
  { src: Img13, text: "Design moderne et raffiné, adapté à toutes vos tenues." },
  { src: Img14, text: "Design moderne et raffiné, adapté à toutes vos tenues." },
  { src: Img15, text: "Design moderne et raffiné, adapté à toutes vos tenues." },
  { src: Img16, text: "Design moderne et raffiné, adapté à toutes vos tenues." },
  { src: Img17, text: "Design moderne et raffiné, adapté à toutes vos tenues." },
  { src: Img18, text: "Design moderne et raffiné, adapté à toutes vos tenues." },
  { src: Img19, text: "Design moderne et raffiné, adapté à toutes vos tenues." },
];

const ProductDtissuplat = () => {
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

export default ProductDtissuplat;
