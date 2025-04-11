
import { useState } from "react";
import { Container, Row, Col,  Modal } from "react-bootstrap";

import Imj1 from "../assets/img/DAIMOND/1.JPG";
import Imj2 from "../assets/img/DAIMOND/2.JPG";
import Imj3 from "../assets/img/DAIMOND/3.JPG";
import Imj4 from "../assets/img/DAIMOND/4.JPG";
import Imj5 from "../assets/img/DAIMOND/5.JPG";
import Imj6 from "../assets/img/DAIMOND/6.JPG";
import Imj7 from "../assets/img/jeter/XXL-1-1.jpg";
import Imj8 from "../assets/img/jeter/XXL-10-2.jpg";
import Imj9 from "../assets/img/jeter/XXL-15.jpg";
import Imj10 from "../assets/img/jeter/XXL-16-1.jpg";
import Imj11 from "../assets/img/jeter/XXL-2.jpg";
import Imj12 from "../assets/img/jeter/XXL-3.jpg";
import Imj13 from "../assets/img/jeter/XXL-4-.jpg";
import Imj14 from "../assets/img/jeter/XXL-5.jpg";
import Imj15 from "../assets/img/jeter/XXL-7.jpg";

import "animate.css";
import "../App.css"

import { Footer } from "../components/Footer";
import TrackVisibility from "react-on-screen";

const images = [
  { src: Imj1, text: "JETER DIAMON DIMONSION : 1.5/2.5",sku:"JT001" },
  { src: Imj2, text: "JETER DIAMON DIMONSION : 1.5/2.5",sku:"JT002" },
  { src: Imj3, text: "JETER DIAMON DIMONSION : 1.5/2.5",sku:"JT002" },
  { src: Imj4, text: "JETER DIAMON DIMONSION : 1.5/2.5",sku:"JT004" },
  { src: Imj5, text: "JETER DIAMON DIMONSION : 1.5/2.5",sku:"JT005" },
  { src: Imj6, text: "JETER DIAMON DIMONSION : 1.5/2.5",sku:"JT006" },
  { src: Imj7, text: "JETER MODEL ARTHUR 2/3",sku:"JT007" },
  { src: Imj8, text: "JETER MODEL ARTHUR 2/3",sku:"JT008" },
  { src: Imj9, text: "JETER MODEL ARTHUR 2/3",sku:"JT009" },
  { src: Imj10, text: "JETER MODEL ARTHUR 2/3",sku:"JT010" },
  { src: Imj11, text: "JETER DIAMON DIMONSION : 2/3",sku:"JT011" },
  { src: Imj12, text: "JETER DIAMON DIMONSION : 2/3",sku:"JT012" },
  { src: Imj13, text: "JETER MODEL ARTHUR 2/3",sku:"JT013" },
  { src: Imj14, text: "JETER UNI 2/3",sku:"JT014" },
  { src: Imj15, text: "JETER MODEL ARTHUR 2/3",sku:"JT0015" },
 
 

  
];

const Jeter = () => {
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
                    <h1>JETER</h1>
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

export default Jeter;
