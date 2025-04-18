
import { useState } from "react";
import { Container, Row, Col,  Modal } from "react-bootstrap";

import Imj1 from "../assets/img/mykonos/MK001.JPG";
import Imj2 from "../assets/img/mykonos/MK002.JPG";
import Imj3 from "../assets/img/mykonos/MK003.JPG";
import Imj4 from "../assets/img/mykonos/MK004.JPG";
import Imj5 from "../assets/img/mykonos/MK005.JPG";
import Imj6 from "../assets/img/mykonos/MK006.JPG";
import Imj7 from "../assets/img/mykonos/MK007.JPG";
import Imj8 from "../assets/img/mykonos/MK008.JPG";
import Imj9 from "../assets/img/mykonos/MK009.JPG";
import Imj10 from "../assets/img/mykonos/MK010.JPG";
import Imj11 from "../assets/img/mykonos/MK011.JPG"


import "animate.css";
import "../App.css"

import { Footer } from "../components/Footer";
import TrackVisibility from "react-on-screen";

const images = [
  { src: Imj1, text: "Inspirée par l’élégance des îles grecques, la fouta Mykonos de Du Artex Tunisie apporte une touche méditerranéenne à vos moments de détente. Son motif raffiné et sa texture douce en font l’accessoire idéal pour la plage, le hammam ou à la maison. Légère, absorbante et chic.",sku:"MK001" },
  { src: Imj2, text: "Inspirée par l’élégance des îles grecques, la fouta Mykonos de Du Artex Tunisie apporte une touche méditerranéenne à vos moments de détente. Son motif raffiné et sa texture douce en font l’accessoire idéal pour la plage, le hammam ou à la maison. Légère, absorbante et chic.",sku:"MK002" },
  { src: Imj3, text: "Inspirée par l’élégance des îles grecques, la fouta Mykonos de Du Artex Tunisie apporte une touche méditerranéenne à vos moments de détente. Son motif raffiné et sa texture douce en font l’accessoire idéal pour la plage, le hammam ou à la maison. Légère, absorbante et chic.",sku:"MK003" },
  { src: Imj4, text: "Inspirée par l’élégance des îles grecques, la fouta Mykonos de Du Artex Tunisie apporte une touche méditerranéenne à vos moments de détente. Son motif raffiné et sa texture douce en font l’accessoire idéal pour la plage, le hammam ou à la maison. Légère, absorbante et chic.",sku:"MK004" },
  { src: Imj5, text: "Inspirée par l’élégance des îles grecques, la fouta Mykonos de Du Artex Tunisie apporte une touche méditerranéenne à vos moments de détente. Son motif raffiné et sa texture douce en font l’accessoire idéal pour la plage, le hammam ou à la maison. Légère, absorbante et chic.",sku:"MK005" },
  { src: Imj6, text: "Inspirée par l’élégance des îles grecques, la fouta Mykonos de Du Artex Tunisie apporte une touche méditerranéenne à vos moments de détente. Son motif raffiné et sa texture douce en font l’accessoire idéal pour la plage, le hammam ou à la maison. Légère, absorbante et chic.",sku:"MK006" },
  { src: Imj7, text: "Inspirée par l’élégance des îles grecques, la fouta Mykonos de Du Artex Tunisie apporte une touche méditerranéenne à vos moments de détente. Son motif raffiné et sa texture douce en font l’accessoire idéal pour la plage, le hammam ou à la maison. Légère, absorbante et chic.",sku:"MK007" },
  { src: Imj8, text: "Inspirée par l’élégance des îles grecques, la fouta Mykonos de Du Artex Tunisie apporte une touche méditerranéenne à vos moments de détente. Son motif raffiné et sa texture douce en font l’accessoire idéal pour la plage, le hammam ou à la maison. Légère, absorbante et chic.",sku:"MK008" },
  { src: Imj9, text: "Inspirée par l’élégance des îles grecques, la fouta Mykonos de Du Artex Tunisie apporte une touche méditerranéenne à vos moments de détente. Son motif raffiné et sa texture douce en font l’accessoire idéal pour la plage, le hammam ou à la maison. Légère, absorbante et chic.",sku:"MK009" },
  { src: Imj10, text: "Inspirée par l’élégance des îles grecques, la fouta Mykonos de Du Artex Tunisie apporte une touche méditerranéenne à vos moments de détente. Son motif raffiné et sa texture douce en font l’accessoire idéal pour la plage, le hammam ou à la maison. Légère, absorbante et chic.",sku:"MK010" },
  { src: Imj11, text: "Inspirée par l’élégance des îles grecques, la fouta Mykonos de Du Artex Tunisie apporte une touche méditerranéenne à vos moments de détente. Son motif raffiné et sa texture douce en font l’accessoire idéal pour la plage, le hammam ou à la maison. Légère, absorbante et chic.",sku:"MK011" },

];

const MykonosD = () => {
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
                    <h1>MYKONOS</h1>
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
                            alt={`MYKONOS ${index + 1}`}
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
                alt="MYKONOS"
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

export default MykonosD;
