import { useState } from "react";
import { Container, Row, Col,  Modal } from "react-bootstrap";

import Im7 from "../assets/img/DAIMOND/7.JPG";
import Im8 from "../assets/img/DAIMOND/8.JPG";
import Im9 from "../assets/img/DAIMOND/9.JPG";
import Im10 from "../assets/img/DAIMOND/10.JPG";
import Im11 from "../assets/img/DAIMOND/11.JPG";

import "animate.css";
import { Footer } from "../components/Footer";
import TrackVisibility from "react-on-screen";
import "../App.css"

const images = [
  { src: Im7, text: "Élégante et intemporelle, la fouta motif Diamond de Du Artex Tunisie séduit par son tissage géométrique en losanges. Douce, légère et ultra-absorbante, elle est idéale pour la plage, le hammam ou en décoration.",sku:"D001" },
  { src: Im8, text: "Élégante et intemporelle, la fouta motif Diamond de Du Artex Tunisie séduit par son tissage géométrique en losanges. Douce, légère et ultra-absorbante, elle est idéale pour la plage, le hammam ou en décoration.",sku:"D002" },
  { src: Im9, text: "Élégante et intemporelle, la fouta motif Diamond de Du Artex Tunisie séduit par son tissage géométrique en losanges. Douce, légère et ultra-absorbante, elle est idéale pour la plage, le hammam ou en décoration.",sku:"D003" },
  { src: Im10, text: "Élégante et intemporelle, la fouta motif Diamond de Du Artex Tunisie séduit par son tissage géométrique en losanges. Douce, légère et ultra-absorbante, elle est idéale pour la plage, le hammam ou en décoration.",sku:"D004" },
  { src: Im11, text: "Élégante et intemporelle, la fouta motif Diamond de Du Artex Tunisie séduit par son tissage géométrique en losanges. Douce, légère et ultra-absorbante, elle est idéale pour la plage, le hammam ou en décoration.",sku:"D005" },


];

const DiamondCotton = () => {
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
                    <h1>DIAMOND</h1>
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
                            alt={`FOUTA ${index + 1}`}
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

export default DiamondCotton;
