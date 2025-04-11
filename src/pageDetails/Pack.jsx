
    import { useState } from "react";
import { Container, Row, Col,  Modal } from "react-bootstrap";

import ImE1 from "../assets/img/pack/servietteblanche.webp";
import ImE2 from "../assets/img/pack/serviettebleuciel.webp";
import ImE3 from "../assets/img/pack/serviettebleumarine.webp";
import ImE4 from "../assets/img/pack/serviettegrise.webp";
import ImE5 from "../assets/img/pack/servietteoranger.webp";
import ImE6 from "../assets/img/pack/servietteturquoise.webp";
import ImE7 from "../assets/img/pack/servietteverte.webp";
import ImE8 from "../assets/img/pack/servietteverteforet.webp";

import "animate.css";
import "../App.css"

import { Footer } from "../components/Footer";
import TrackVisibility from "react-on-screen";

const images = [
  { src: ImE1, text: "",sku:"P001" },
  { src: ImE2, text: "",sku:"P002" },
  { src: ImE3, text: "",sku:"P003" },
  { src: ImE4, text: "",sku:"P004" },
  { src: ImE5, text: "",sku:"P005" },
  { src: ImE6, text: "",sku:"P006" },
  { src: ImE7, text: "",sku:"P007" },
  { src: ImE8, text: "",sku:"P008" },
 

  
];

const Pack = () => {
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
      <section className="banner1" id="home">
        <Container>
          <Row className="align-items-center">
            {/* Text Content */}
            <Col xs={12} md={6} xl={4}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <span className="tagline">ARTEX TUNISIE</span>
                    <h1>PACK ARTEX</h1>
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
                            alt={`towel ${index + 1}`}
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
                alt="handtowel"
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
export default Pack;
