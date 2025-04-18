
import { useState } from "react";
import { Container, Row, Col,  Modal } from "react-bootstrap";

import Imj1 from "../assets/img/artex/ART01.JPG";
import Imj2 from "../assets/img/artex/ART02.JPG";
import Imj3 from "../assets/img/artex/ART03.JPG";
import Imj4 from "../assets/img/artex/ART04.JPG";
import Imj5 from "../assets/img/artex/ART05.JPG";
import Imj6 from "../assets/img/artex/ART06.JPG";
import Imj7 from "../assets/img/artex/ART07.JPG";
import Imj8 from "../assets/img/artex/ART08.JPG";
import Imj9 from "../assets/img/artex/ART09.JPG";


import "animate.css";
import "../App.css"

import { Footer } from "../components/Footer";
import TrackVisibility from "react-on-screen";

const images = [
  { src: Imj1, text: "Apportez une touche d’élégance à vos moments de détente avec la fouta Artex de Du Artex Tunisie. Son motif moderne et sa texture douce en font l'accessoire parfait pour la plage, le hammam ou à la maison. Légère, absorbante et agréable au toucher, elle vous accompagne partou",sku:"ART001" },
  { src: Imj2, text: "Apportez une touche d’élégance à vos moments de détente avec la fouta Artex de Du Artex Tunisie. Son motif moderne et sa texture douce en font l'accessoire parfait pour la plage, le hammam ou à la maison. Légère, absorbante et agréable au toucher, elle vous accompagne partou",sku:"ART002" },
  { src: Imj3, text: "Apportez une touche d’élégance à vos moments de détente avec la fouta Artex de Du Artex Tunisie. Son motif moderne et sa texture douce en font l'accessoire parfait pour la plage, le hammam ou à la maison. Légère, absorbante et agréable au toucher, elle vous accompagne partou",sku:"ART003" },
  { src: Imj4, text: "Apportez une touche d’élégance à vos moments de détente avec la fouta Artex de Du Artex Tunisie. Son motif moderne et sa texture douce en font l'accessoire parfait pour la plage, le hammam ou à la maison. Légère, absorbante et agréable au toucher, elle vous accompagne partou",sku:"ART004" },
  { src: Imj5, text: "Apportez une touche d’élégance à vos moments de détente avec la fouta Artex de Du Artex Tunisie. Son motif moderne et sa texture douce en font l'accessoire parfait pour la plage, le hammam ou à la maison. Légère, absorbante et agréable au toucher, elle vous accompagne partou",sku:"ART005" },
  { src: Imj6, text: "Apportez une touche d’élégance à vos moments de détente avec la fouta Artex de Du Artex Tunisie. Son motif moderne et sa texture douce en font l'accessoire parfait pour la plage, le hammam ou à la maison. Légère, absorbante et agréable au toucher, elle vous accompagne partou",sku:"ART006" },
  { src: Imj7, text: "Apportez une touche d’élégance à vos moments de détente avec la fouta Artex de Du Artex Tunisie. Son motif moderne et sa texture douce en font l'accessoire parfait pour la plage, le hammam ou à la maison. Légère, absorbante et agréable au toucher, elle vous accompagne partou",sku:"ART007" },
  { src: Imj8, text: "Apportez une touche d’élégance à vos moments de détente avec la fouta Artex de Du Artex Tunisie. Son motif moderne et sa texture douce en font l'accessoire parfait pour la plage, le hammam ou à la maison. Légère, absorbante et agréable au toucher, elle vous accompagne partou",sku:"ART008" },
  { src: Imj9, text: "Apportez une touche d’élégance à vos moments de détente avec la fouta Artex de Du Artex Tunisie. Son motif moderne et sa texture douce en font l'accessoire parfait pour la plage, le hammam ou à la maison. Légère, absorbante et agréable au toucher, elle vous accompagne partou",sku:"ART009" },
  
];

const ArtexDET = () => {
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
                    <h1>ARTEX</h1>
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
                            alt={`fouta ${index + 1}`}
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

      {/* Modal for Zoom Image */}
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

export default ArtexDET;
