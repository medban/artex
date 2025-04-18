
import { useState } from "react";
import { Container, Row, Col,  Modal } from "react-bootstrap";

import Imj1 from "../assets/img/BORABORA/1.jpg";
import Imj2 from "../assets/img/BORABORA/2.jpg";
import Imj3 from "../assets/img/BORABORA/3.jpg";
import Imj4 from "../assets/img/BORABORA/4.jpg";
import Imj5 from "../assets/img/BORABORA/5.jpg";
import Imj6 from "../assets/img/BORABORA/6.jpg";
import Imj7 from "../assets/img/BORABORA/7.jpg";
import Imj8 from "../assets/img/BORABORA/8.jpg";
import Imj9 from "../assets/img/BORABORA/9.jpg";
import Imj10 from "../assets/img/BORABORA/10.jpg";
import Imj11 from "../assets/img/BORABORA/11.jpg";
import Imj12 from "../assets/img/BORABORA/12.jpg";
import Imj13 from "../assets/img/BORABORA/13.jpg";
import Imj14 from "../assets/img/BORABORA/14.jpg";
import Imj15 from "../assets/img/BORABORA/15.jpg";
import Imj16 from "../assets/img/BORABORA/16.jpg"

import "animate.css";
import "../App.css"

import { Footer } from "../components/Footer";
import TrackVisibility from "react-on-screen";

const images = [
  { src: Imj1, text: "Apportez une touche d’élégance et de douceur à votre salle de bain avec cette serviette en tissu nid d’abeille signée Du Artex Tunisie. Conçue en coton , absorbant et respirant, elle est idéale pour un séchage rapide tout en offrant un confort optimal. Sa texture gaufrée lui confère un style raffiné, parfait pour un usage quotidien ou à la plage.",sku:"BR001" },
  { src: Imj2, text: "Apportez une touche d’élégance et de douceur à votre salle de bain avec cette serviette en tissu nid d’abeille signée Du Artex Tunisie. Conçue en coton , absorbant et respirant, elle est idéale pour un séchage rapide tout en offrant un confort optimal. Sa texture gaufrée lui confère un style raffiné, parfait pour un usage quotidien ou à la plage.",sku:"BR002" },
  { src: Imj3, text: "Apportez une touche d’élégance et de douceur à votre salle de bain avec cette serviette en tissu nid d’abeille signée Du Artex Tunisie. Conçue en coton , absorbant et respirant, elle est idéale pour un séchage rapide tout en offrant un confort optimal. Sa texture gaufrée lui confère un style raffiné, parfait pour un usage quotidien ou à la plage.",sku:"BR002" },
  { src: Imj4, text: "Apportez une touche d’élégance et de douceur à votre salle de bain avec cette serviette en tissu nid d’abeille signée Du Artex Tunisie. Conçue en coton , absorbant et respirant, elle est idéale pour un séchage rapide tout en offrant un confort optimal. Sa texture gaufrée lui confère un style raffiné, parfait pour un usage quotidien ou à la plage.",sku:"BR004" },
  { src: Imj5, text: "Apportez une touche d’élégance et de douceur à votre salle de bain avec cette serviette en tissu nid d’abeille signée Du Artex Tunisie. Conçue en coton , absorbant et respirant, elle est idéale pour un séchage rapide tout en offrant un confort optimal. Sa texture gaufrée lui confère un style raffiné, parfait pour un usage quotidien ou à la plage.",sku:"BR005" },
  { src: Imj6, text: "Apportez une touche d’élégance et de douceur à votre salle de bain avec cette serviette en tissu nid d’abeille signée Du Artex Tunisie. Conçue en coton , absorbant et respirant, elle est idéale pour un séchage rapide tout en offrant un confort optimal. Sa texture gaufrée lui confère un style raffiné, parfait pour un usage quotidien ou à la plage.",sku:"BR006" },
  { src: Imj7, text: "Apportez une touche d’élégance et de douceur à votre salle de bain avec cette serviette en tissu nid d’abeille signée Du Artex Tunisie. Conçue en coton , absorbant et respirant, elle est idéale pour un séchage rapide tout en offrant un confort optimal. Sa texture gaufrée lui confère un style raffiné, parfait pour un usage quotidien ou à la plage.",sku:"BR007" },
  { src: Imj8, text: "Apportez une touche d’élégance et de douceur à votre salle de bain avec cette serviette en tissu nid d’abeille signée Du Artex Tunisie. Conçue en coton , absorbant et respirant, elle est idéale pour un séchage rapide tout en offrant un confort optimal. Sa texture gaufrée lui confère un style raffiné, parfait pour un usage quotidien ou à la plage.",sku:"BR008" },
  { src: Imj9, text: "Apportez une touche d’élégance et de douceur à votre salle de bain avec cette serviette en tissu nid d’abeille signée Du Artex Tunisie. Conçue en coton , absorbant et respirant, elle est idéale pour un séchage rapide tout en offrant un confort optimal. Sa texture gaufrée lui confère un style raffiné, parfait pour un usage quotidien ou à la plage.",sku:"BR009" },
  { src: Imj10, text: "Apportez une touche d’élégance et de douceur à votre salle de bain avec cette serviette en tissu nid d’abeille signée Du Artex Tunisie. Conçue en coton , absorbant et respirant, elle est idéale pour un séchage rapide tout en offrant un confort optimal. Sa texture gaufrée lui confère un style raffiné, parfait pour un usage quotidien ou à la plage.",sku:"BR010" },
  { src: Imj11, text: "Apportez une touche d’élégance et de douceur à votre salle de bain avec cette serviette en tissu nid d’abeille signée Du Artex Tunisie. Conçue en coton , absorbant et respirant, elle est idéale pour un séchage rapide tout en offrant un confort optimal. Sa texture gaufrée lui confère un style raffiné, parfait pour un usage quotidien ou à la plage. ",sku:"BR011" },
  { src: Imj12, text: "Apportez une touche d’élégance et de douceur à votre salle de bain avec cette serviette en tissu nid d’abeille signée Du Artex Tunisie. Conçue en coton , absorbant et respirant, elle est idéale pour un séchage rapide tout en offrant un confort optimal. Sa texture gaufrée lui confère un style raffiné, parfait pour un usage quotidien ou à la plage. ",sku:"BR012" },
  { src: Imj13, text: "Apportez une touche d’élégance et de douceur à votre salle de bain avec cette serviette en tissu nid d’abeille signée Du Artex Tunisie. Conçue en coton , absorbant et respirant, elle est idéale pour un séchage rapide tout en offrant un confort optimal. Sa texture gaufrée lui confère un style raffiné, parfait pour un usage quotidien ou à la plage.",sku:"BR013" },
  { src: Imj14, text: "Apportez une touche d’élégance et de douceur à votre salle de bain avec cette serviette en tissu nid d’abeille signée Du Artex Tunisie. Conçue en coton , absorbant et respirant, elle est idéale pour un séchage rapide tout en offrant un confort optimal. Sa texture gaufrée lui confère un style raffiné, parfait pour un usage quotidien ou à la plage.",sku:"BR014" },
  { src: Imj15, text: "Apportez une touche d’élégance et de douceur à votre salle de bain avec cette serviette en tissu nid d’abeille signée Du Artex Tunisie. Conçue en coton , absorbant et respirant, elle est idéale pour un séchage rapide tout en offrant un confort optimal. Sa texture gaufrée lui confère un style raffiné, parfait pour un usage quotidien ou à la plage.",sku:"BR0015" },
  { src: Imj16, text: "Apportez une touche d’élégance et de douceur à votre salle de bain avec cette serviette en tissu nid d’abeille signée Du Artex Tunisie. Conçue en coton , absorbant et respirant, elle est idéale pour un séchage rapide tout en offrant un confort optimal. Sa texture gaufrée lui confère un style raffiné, parfait pour un usage quotidien ou à la plage.",sku:"BR0016" },

  
];

const BoraboraD = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleShow = (index) => {
    setSelectedImage(images[index]); // now storing the full object
    setActiveIndex(index);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  return (
    <>
      <section className="banner" id="home">
        <Container>
          <Row className="align-items-center">
            {/* Text Content */}
            <Col xs={12} md={6} xl={4}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <span className="tagline">ARTEX TUNISIE</span>
                    <h1>BORABORA</h1>
                    <p>{images[activeIndex].text}</p>
                    <p><strong>SKU:</strong> {images[activeIndex].sku}</p>
                  </div>
                )}
              </TrackVisibility>
            </Col>

            {/* Images Grid */}
            <Col xs={12} md={6} xl={8}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                    <Row>
                      {images.map((item, index) => (
                        <Col xs={6} md={4} className="mb-3" key={index}>
                          <img
                            src={item.src}
                            alt={`jeter ${index + 1}`}
                            className="img-fluid image-grid"
                            onClick={() => handleShow(index)}
                          />
                        </Col>
                      ))}
                    </Row>
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
          {selectedImage && (
            <>
              <img
                src={selectedImage.src}
                alt="Zoomed"
                className="img-fluid zoom-image mb-3"
              />
              <div>
                <p><strong>SKU:</strong> {selectedImage.sku}</p>
              </div>
            </>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default BoraboraD;
