import { useState } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";

import Img1 from "../assets/img/jacquard/diamond/blue ciel diamod.jpg";
import Img2 from "../assets/img/jacquard/diamond/blue diamond.jpg";
import Img3 from "../assets/img/jacquard/diamond/bordeaux rouge.jpg";
import Img4 from "../assets/img/jacquard/diamond/gray diamond.jpg";
import Img5 from "../assets/img/jacquard/diamond/purpule diamond.jpg";

import "animate.css";
import { Footer } from "../components/Footer";
import TrackVisibility from "react-on-screen";
import "../App.css"

const images = [
  { src: Img1, text: "Apportez du style à vos moments de détente avec cette fouta Jacquard au motif Diamond signée Du Artex Tunisie. Son tissage raffiné en forme de losanges allie élégance, douceur et grande capacité d’absorption. Idéale pour la plage, le hammam ou la maison.",sku:"JD001" },
  { src: Img2, text: "Apportez du style à vos moments de détente avec cette fouta Jacquard au motif Diamond signée Du Artex Tunisie. Son tissage raffiné en forme de losanges allie élégance, douceur et grande capacité d’absorption. Idéale pour la plage, le hammam ou la maison.",sku:"JD002" },
  { src: Img3, text: "Apportez du style à vos moments de détente avec cette fouta Jacquard au motif Diamond signée Du Artex Tunisie. Son tissage raffiné en forme de losanges allie élégance, douceur et grande capacité d’absorption. Idéale pour la plage, le hammam ou la maison.",sku:"JD003" },
  { src: Img4, text: "Apportez du style à vos moments de détente avec cette fouta Jacquard au motif Diamond signée Du Artex Tunisie. Son tissage raffiné en forme de losanges allie élégance, douceur et grande capacité d’absorption. Idéale pour la plage, le hammam ou la maison.",sku:"JD004" },
  { src: Img5, text: "Apportez du style à vos moments de détente avec cette fouta Jacquard au motif Diamond signée Du Artex Tunisie. Son tissage raffiné en forme de losanges allie élégance, douceur et grande capacité d’absorption. Idéale pour la plage, le hammam ou la maison.",sku:"JD005" }
  
];

const ProductDjacquardDiamond = () => {
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
          
            <Col xs={12} md={6} xl={4}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <span className="tagline">ARTEX TUNISIE</span>
                    <h1>DIAMOND JACQUARD</h1>
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
                            alt={`JACQUARD ${index + 1}`}
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

export default ProductDjacquardDiamond;
