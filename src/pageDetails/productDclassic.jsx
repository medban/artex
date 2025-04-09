import { useState } from "react";
import { Container, Row, Col, Carousel, Modal } from "react-bootstrap";

import Img1 from "../assets/img/classic/bleu canar.jpg";
import Img2 from "../assets/img/classic/drack green.jpg";
import Img3 from "../assets/img/classic/green forest.jpg";
import Img4 from "../assets/img/classic/pink.jpg";
import Img5 from "../assets/img/classic/purple.jpg";
import "../App.css"

import "animate.css";
import { Footer } from "../components/Footer";
import TrackVisibility from "react-on-screen";

const images = [
  { src: Img1, text: "Apportez une touche d’élégance et de douceur à votre salle de bain avec cette serviette en tissu nid d’abeille signée Du Artex Tunisie. Conçue en coton , absorbant et respirant, elle est idéale pour un séchage rapide tout en offrant un confort optimal. Sa texture gaufrée lui confère un style raffiné, parfait pour un usage quotidien ou à la plage. Dimensions : 100 x 200 cm" ,sku:"C001"},
  { src: Img2, text: "Apportez une touche d’élégance et de douceur à votre salle de bain avec cette serviette en tissu nid d’abeille signée Du Artex Tunisie. Conçue en coton , absorbant et respirant, elle est idéale pour un séchage rapide tout en offrant un confort optimal. Sa texture gaufrée lui confère un style raffiné, parfait pour un usage quotidien ou à la plage. Dimensions : 100 x 200 cm" ,sku:"C002"},
  { src: Img3, text: "Apportez une touche d’élégance et de douceur à votre salle de bain avec cette serviette en tissu nid d’abeille signée Du Artex Tunisie. Conçue en coton , absorbant et respirant, elle est idéale pour un séchage rapide tout en offrant un confort optimal. Sa texture gaufrée lui confère un style raffiné, parfait pour un usage quotidien ou à la plage. Dimensions : 100 x 200 cm" ,sku:"C003"},
  { src: Img4, text: "Apportez une touche d’élégance et de douceur à votre salle de bain avec cette serviette en tissu nid d’abeille signée Du Artex Tunisie. Conçue en coton , absorbant et respirant, elle est idéale pour un séchage rapide tout en offrant un confort optimal. Sa texture gaufrée lui confère un style raffiné, parfait pour un usage quotidien ou à la plage. Dimensions : 100 x 200 cm" ,sku:"C004"},
  { src: Img5, text: "Apportez une touche d’élégance et de douceur à votre salle de bain avec cette serviette en tissu nid d’abeille signée Du Artex Tunisie. Conçue en coton , absorbant et respirant, elle est idéale pour un séchage rapide tout en offrant un confort optimal. Sa texture gaufrée lui confère un style raffiné, parfait pour un usage quotidien ou à la plage. Dimensions : 100 x 200 cm" ,sku:"C005"},
 
];

const ProductDclassic = () => {
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
                    <h1>NID D'ABEILLE</h1>
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

export default ProductDclassic;
