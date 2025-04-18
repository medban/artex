
import { useState } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";

import Imj1 from "../assets/img/arcachon/ar1.JPG";
import Imj2 from "../assets/img/arcachon/ar2.JPG";
import Imj3 from "../assets/img/arcachon/ar3.JPG";
import Imj4 from "../assets/img/arcachon/ar4.JPG";
import Imj5 from "../assets/img/arcachon/ar5.JPG";
import Imj6 from "../assets/img/arcachon/ar6.JPG";
import Imj7 from "../assets/img/arcachon/ar7.JPG";
import Imj8 from "../assets/img/arcachon/ar8.JPG";
import Imj9 from "../assets/img/arcachon/ar9.JPG";
import Imj10 from "../assets/img/arcachon/ar10.JPG";


import "animate.css";
import "../App.css"

import { Footer } from "../components/Footer";
import TrackVisibility from "react-on-screen";

const images = [
  { src: Imj1, text: "Élégantes et pratiques, les chaussures Arcachon de Du Artex Tunisie présentent un motif subtil et une texture douce. Absorbant et à séchage rapide, parfait pour les moments de détente à la plage, dans le bain ou à la maison.",sku:"AR001" },
  { src: Imj2, text: "Élégantes et pratiques, les chaussures Arcachon de Du Artex Tunisie présentent un motif subtil et une texture douce. Absorbant et à séchage rapide, parfait pour les moments de détente à la plage, dans le bain ou à la maison.",sku:"AR002" },
  { src: Imj3, text: "Élégantes et pratiques, les chaussures Arcachon de Du Artex Tunisie présentent un motif subtil et une texture douce. Absorbant et à séchage rapide, parfait pour les moments de détente à la plage, dans le bain ou à la maison.",sku:"AR003" },
  { src: Imj4, text: "Élégantes et pratiques, les chaussures Arcachon de Du Artex Tunisie présentent un motif subtil et une texture douce. Absorbant et à séchage rapide, parfait pour les moments de détente à la plage, dans le bain ou à la maison.",sku:"AR004" },
  { src: Imj5, text: "Élégantes et pratiques, les chaussures Arcachon de Du Artex Tunisie présentent un motif subtil et une texture douce. Absorbant et à séchage rapide, parfait pour les moments de détente à la plage, dans le bain ou à la maison.",sku:"AR005" },
  { src: Imj6, text: "Élégantes et pratiques, les chaussures Arcachon de Du Artex Tunisie présentent un motif subtil et une texture douce. Absorbant et à séchage rapide, parfait pour les moments de détente à la plage, dans le bain ou à la maison.",sku:"AR006" },
  { src: Imj7, text: "Élégantes et pratiques, les chaussures Arcachon de Du Artex Tunisie présentent un motif subtil et une texture douce. Absorbant et à séchage rapide, parfait pour les moments de détente à la plage, dans le bain ou à la maison.",sku:"AR007" },
  { src: Imj8, text: "Élégantes et pratiques, les chaussures Arcachon de Du Artex Tunisie présentent un motif subtil et une texture douce. Absorbant et à séchage rapide, parfait pour les moments de détente à la plage, dans le bain ou à la maison.",sku:"AR008" },
  { src: Imj9, text: "Élégantes et pratiques, les chaussures Arcachon de Du Artex Tunisie présentent un motif subtil et une texture douce. Absorbant et à séchage rapide, parfait pour les moments de détente à la plage, dans le bain ou à la maison.",sku:"AR009" },
  { src: Imj10, text: "Élégantes et pratiques, les chaussures Arcachon de Du Artex Tunisie présentent un motif subtil et une texture douce. Absorbant et à séchage rapide, parfait pour les moments de détente à la plage, dans le bain ou à la maison.",sku:"AR010" },
  
];

const ArcachonDET = () => {
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
                    <h1>AECACHON</h1>
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
export default ArcachonDET;
