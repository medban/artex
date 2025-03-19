import { useState } from "react";
import { Container, Row, Col, Carousel, Modal } from "react-bootstrap";

import Img1 from "../assets/img/E1.jpg";
import Img2 from "../assets/img/E2.jpg";
import Img3 from "../assets/img/E3.jpg";
import Img4 from "../assets/img/E4.jpg";
import Img5 from "../assets/img/E5.jpg";
import Img6 from "../assets/img/E6.jpg";
import Img7 from "../assets/img/soi/_MG_9061.JPG";
import Img8 from "../assets/img/soi/_MG_9088.JPG";
import Img9 from "../assets/img/soi/_MG_9115.JPG";
import Img10 from "../assets/img/soi/_MG_9152.JPG";
import Img11 from "../assets/img/soi/_MG_9192.JPG";
import Img12 from "../assets/img/soi/_MG_9219.JPG";
import Img13 from "../assets/img/soi/_MG_9232.JPG";

import "animate.css";
import { Footer } from "../components/Footer";
import TrackVisibility from "react-on-screen";
import "../App.css"

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

];

const ProductDecharpe = () => {
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

export default ProductDecharpe;
