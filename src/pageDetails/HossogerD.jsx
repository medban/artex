import { useState } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";

import Img1 from "../assets/img/HOSSOGER/1.webp";
import Img2 from "../assets/img/HOSSOGER/2.webp";
import Img3 from "../assets/img/HOSSOGER/3.webp";
import Img4 from "../assets/img/HOSSOGER/4.webp";
import Img5 from "../assets/img/HOSSOGER/5.webp";
import Img6 from "../assets/img/HOSSOGER/6.webp";
import Img7 from "../assets/img/HOSSOGER/7.webp";
import Img8 from "../assets/img/HOSSOGER/8.webp";
import Img9 from "../assets/img/HOSSOGER/9.webp";
import Img10 from "../assets/img/HOSSOGER/10.webp";
import TopRightImg from "../assets/img/HOSSOGER/11.webp";

import "animate.css";
import { Footer } from "../components/Footer";
import TrackVisibility from "react-on-screen";
import "../App.css";

const images = [
  { src: Img1, text: "Apportez une touche de style à vos instants de détente avec la fouta HOSSEGOR. Conçue avec soin par Du Artex Tunisie, cette fouta au tissage Jacquard séduit par son motif distinctif et son élégance naturelle. Douce, absorbante et légère, elle est parfaite pour vous accompagner à la plage, au hammam ou à la maison.", sku: "H001" },
  { src: Img2, text: "Apportez une touche de style à vos instants de détente avec la fouta HOSSEGOR...", sku: "H002" },
  { src: Img3, text: "Apportez une touche de style à vos instants de détente avec la fouta HOSSEGOR...", sku: "H003" },
  { src: Img4, text: "Apportez une touche de style à vos instants de détente avec la fouta HOSSEGOR...", sku: "H004" },
  { src: Img5, text: "Apportez une touche de style à vos instants de détente avec la fouta HOSSEGOR...", sku: "H005" },
  { src: Img6, text: "Apportez une touche de style à vos instants de détente avec la fouta HOSSEGOR...", sku: "H006" },
  { src: Img7, text: "Apportez une touche de style à vos instants de détente avec la fouta HOSSEGOR...", sku: "H007" },
  { src: Img8, text: "Apportez une touche de style à vos instants de détente avec la fouta HOSSEGOR...", sku: "H008" },
  { src: Img9, text: "Apportez une touche de style à vos instants de détente avec la fouta HOSSEGOR...", sku: "H009" },
  { src: Img10, text: "Apportez une touche de style à vos instants de détente avec la fouta HOSSEGOR...", sku: "H010" },
];

const HossogerD = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleShow = (index) => {
    setSelectedImage(images[index]);
    setActiveIndex(index);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  return (
    <>
      <section className="banner" id="home">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6} xl={4} className="position-relative">
              <TrackVisibility>
                {({ isVisible }) => (
                  <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <img
                      src={TopRightImg}
                      alt="Hossoger Detail"
                      className="top-right-image"
                    />
                    <span className="tagline">ARTEX TUNISIE</span>
                    <h1>HOSSOGER</h1>
                    <p>{images[activeIndex].text}</p>
                    <p><strong>SKU:</strong> {images[activeIndex].sku}</p>
                  </div>
                )}
              </TrackVisibility>
            </Col>

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

      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Body className="text-center">
          {selectedImage && (
            <>
              <img
                src={selectedImage.src}
                alt="JACQUARD"
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

export default HossogerD;
