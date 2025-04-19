import { useState } from "react";
import { Container, Row, Col,  Modal } from "react-bootstrap";

import Img1 from "../assets/img/jacquard/berber/blue berber.jpg";
import Img2 from "../assets/img/jacquard/berber/blue gold berber.jpg";
import Img3 from "../assets/img/jacquard/berber/blue orange berber.jpg";
import Img4 from "../assets/img/jacquard/berber/orange blue berber.jpg";
import Img5 from "../assets/img/jacquard/berber/rouge berber.jpg";
import Img6 from "../assets/img/jacquard/berber/rouge blue berber.jpg";
import Img12 from "../assets/img/jacquard/leaf/gray leaf.jpg";
import Img13 from "../assets/img/jacquard/leaf/leaf gold.jpg";
import Img14 from "../assets/img/jacquard/leaf/leaf blue.jpg";
import Img15 from "../assets/img/jacquard/leaf/leaf red.jpg";
import Img16 from "../assets/img/jacquard/leaf/jac orange blue.jpg";
import Img17 from "../assets/img/jacquard/leaf/jac orange.jpg";
import Img18 from "../assets/img/jacquard/bordeaux tortue.jpg";
import Img19 from "../assets/img/jacquard/rouge tortue.jpg";
import Img20 from "../assets/img/jacquard/tortie.jpg";
import Img21 from "../assets/img/jacquard/verte tortue.jpg";
import Img22 from "../assets/img/jacquard/caree blue.jpg";
import Img23 from "../assets/img/jacquard/SCORPION.webp";
import TopRightImg from "../assets/img/jacquard/SCROP.webp";


import "animate.css";
import { Footer } from "../components/Footer";
import TrackVisibility from "react-on-screen";
import "../App.css"

const images = [
  { src: Img1, text: "Élégante et pratique, la fouta Jacquard Du Artex Tunisie est l’alliée idéale pour la plage, le hammam ou la maison. Son tissage Jacquard lui offre un motif raffiné et une touche de sophistication, tout en restant légère, absorbante et facile à sécher.",sku :"J001" },
  { src: Img2, text: "Élégante et pratique, la fouta Jacquard Du Artex Tunisie est l’alliée idéale pour la plage, le hammam ou la maison. Son tissage Jacquard lui offre un motif raffiné et une touche de sophistication, tout en restant légère, absorbante et facile à sécher.",sku :"J002" },
  { src: Img3, text: "Élégante et pratique, la fouta Jacquard Du Artex Tunisie est l’alliée idéale pour la plage, le hammam ou la maison. Son tissage Jacquard lui offre un motif raffiné et une touche de sophistication, tout en restant légère, absorbante et facile à sécher.",sku :"J003" },
  { src: Img4, text: "Élégante et pratique, la fouta Jacquard Du Artex Tunisie est l’alliée idéale pour la plage, le hammam ou la maison. Son tissage Jacquard lui offre un motif raffiné et une touche de sophistication, tout en restant légère, absorbante et facile à sécher.",sku :"J004" },
  { src: Img5, text: "Élégante et pratique, la fouta Jacquard Du Artex Tunisie est l’alliée idéale pour la plage, le hammam ou la maison. Son tissage Jacquard lui offre un motif raffiné et une touche de sophistication, tout en restant légère, absorbante et facile à sécher.",sku :"J005" },
  { src: Img6, text: "Élégante et pratique, la fouta Jacquard Du Artex Tunisie est l’alliée idéale pour la plage, le hammam ou la maison. Son tissage Jacquard lui offre un motif raffiné et une touche de sophistication, tout en restant légère, absorbante et facile à sécher.",sku :"J006" },
  { src: Img12, text: "Élégante et pratique, la fouta Jacquard Du Artex Tunisie est l’alliée idéale pour la plage, le hammam ou la maison. Son tissage Jacquard lui offre un motif raffiné et une touche de sophistication, tout en restant légère, absorbante et facile à sécher.",sku :"J007" },
  { src: Img13, text: "Élégante et pratique, la fouta Jacquard Du Artex Tunisie est l’alliée idéale pour la plage, le hammam ou la maison. Son tissage Jacquard lui offre un motif raffiné et une touche de sophistication, tout en restant légère, absorbante et facile à sécher.",sku :"J008" },
  { src: Img14, text: "Élégante et pratique, la fouta Jacquard Du Artex Tunisie est l’alliée idéale pour la plage, le hammam ou la maison. Son tissage Jacquard lui offre un motif raffiné et une touche de sophistication, tout en restant légère, absorbante et facile à sécher.",sku :"J009" },
  { src: Img15, text: "Élégante et pratique, la fouta Jacquard Du Artex Tunisie est l’alliée idéale pour la plage, le hammam ou la maison. Son tissage Jacquard lui offre un motif raffiné et une touche de sophistication, tout en restant légère, absorbante et facile à sécher.",sku :"J010" },
  { src: Img16, text: "Élégante et pratique, la fouta Jacquard Du Artex Tunisie est l’alliée idéale pour la plage, le hammam ou la maison. Son tissage Jacquard lui offre un motif raffiné et une touche de sophistication, tout en restant légère, absorbante et facile à sécher.",sku :"J011" },
  { src: Img17, text: "Élégante et pratique, la fouta Jacquard Du Artex Tunisie est l’alliée idéale pour la plage, le hammam ou la maison. Son tissage Jacquard lui offre un motif raffiné et une touche de sophistication, tout en restant légère, absorbante et facile à sécher.",sku :"J012" },
  { src: Img18, text: "Élégante et pratique, la fouta Jacquard Du Artex Tunisie est l’alliée idéale pour la plage, le hammam ou la maison. Son tissage Jacquard lui offre un motif raffiné et une touche de sophistication, tout en restant légère, absorbante et facile à sécher.",sku :"J013" },
  { src: Img19, text: "Élégante et pratique, la fouta Jacquard Du Artex Tunisie est l’alliée idéale pour la plage, le hammam ou la maison. Son tissage Jacquard lui offre un motif raffiné et une touche de sophistication, tout en restant légère, absorbante et facile à sécher.",sku :"J014" },
  { src: Img20, text: "Élégante et pratique, la fouta Jacquard Du Artex Tunisie est l’alliée idéale pour la plage, le hammam ou la maison. Son tissage Jacquard lui offre un motif raffiné et une touche de sophistication, tout en restant légère, absorbante et facile à sécher.",sku :"J015" },
  { src: Img21, text: "Élégante et pratique, la fouta Jacquard Du Artex Tunisie est l’alliée idéale pour la plage, le hammam ou la maison. Son tissage Jacquard lui offre un motif raffiné et une touche de sophistication, tout en restant légère, absorbante et facile à sécher.",sku :"J016" },
  { src: Img22, text: "Élégante et pratique, la fouta Jacquard Du Artex Tunisie est l’alliée idéale pour la plage, le hammam ou la maison. Son tissage Jacquard lui offre un motif raffiné et une touche de sophistication, tout en restant légère, absorbante et facile à sécher.",sku :"J017" },
  { src: Img23, text: "Élégante et pratique, la fouta Jacquard Du Artex Tunisie est l’alliée idéale pour la plage, le hammam ou la maison. Son tissage Jacquard lui offre un motif raffiné et une touche de sophistication, tout en restant légère, absorbante et facile à sécher.",sku :"J018" }
];

const ProductDjacquard = () => {
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
                    <img
                      src={TopRightImg}
                      alt="Hossoger Detail"
                      className="top-right-image"
                    />
                    <span className="tagline">ARTEX TUNISIE</span>
                    <h1>JACQUARD</h1>
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

export default ProductDjacquard;
