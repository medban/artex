import { useState } from "react";
import { Container, Row, Col,  Modal } from "react-bootstrap";

import Img1 from "../assets/img/chevron/bleu clair.jpg";
import Img2 from "../assets/img/chevron/bleu unique.jpg";
import Img3 from "../assets/img/chevron/bleu.jpg";
import Img4 from "../assets/img/chevron/brown gray.jpg";
import Img5 from "../assets/img/chevron/gold.jpg";
import Img6 from "../assets/img/chevron/gray.jpg";
import Img7 from "../assets/img/chevron/oragne verte.jpg";
import Img8 from "../assets/img/chevron/orange noire.jpg";
import Img9 from "../assets/img/chevron/pistache.jpg";
import Img10 from "../assets/img/chevron/rsoe bleu.jpg";
import Img11 from "../assets/img/chevron/tirqoise bleu.jpg";
import Img12 from "../assets/img/chevron/verte jeaun.jpg";
import Img13 from "../assets/img/chevron/verte.jpg";
import Img14 from "../assets/img/chevron/1.JPG";
import Img15 from "../assets/img/chevron/2.JPG";
import Img16 from "../assets/img/chevron/3.JPG";
import Img17 from "../assets/img/chevron/4.JPG";

import "animate.css";
import "../App.css"

import { Footer } from "../components/Footer";
import TrackVisibility from "react-on-screen";

const images = [
  { src: Img1, text: "Alliez modernité et tradition avec cette fouta au motif Chevron signée Du Artex Tunisie. Son tissage en zigzag apporte une touche graphique élégante, tout en offrant légèreté, douceur et absorption. Parfaite pour la plage, le hammam ou comme jeté déco.",sku:"CH001" },
  { src: Img2, text: "Alliez modernité et tradition avec cette fouta au motif Chevron signée Du Artex Tunisie. Son tissage en zigzag apporte une touche graphique élégante, tout en offrant légèreté, douceur et absorption. Parfaite pour la plage, le hammam ou comme jeté déco.",sku:"CH002" },
  { src: Img3, text: "Alliez modernité et tradition avec cette fouta au motif Chevron signée Du Artex Tunisie. Son tissage en zigzag apporte une touche graphique élégante, tout en offrant légèreté, douceur et absorption. Parfaite pour la plage, le hammam ou comme jeté déco.",sku:"CH003" },
  { src: Img4, text: "Alliez modernité et tradition avec cette fouta au motif Chevron signée Du Artex Tunisie. Son tissage en zigzag apporte une touche graphique élégante, tout en offrant légèreté, douceur et absorption. Parfaite pour la plage, le hammam ou comme jeté déco.",sku:"CH004" },
  { src: Img5, text: "Alliez modernité et tradition avec cette fouta au motif Chevron signée Du Artex Tunisie. Son tissage en zigzag apporte une touche graphique élégante, tout en offrant légèreté, douceur et absorption. Parfaite pour la plage, le hammam ou comme jeté déco.",sku:"CH005" },
  { src: Img6, text: "Alliez modernité et tradition avec cette fouta au motif Chevron signée Du Artex Tunisie. Son tissage en zigzag apporte une touche graphique élégante, tout en offrant légèreté, douceur et absorption. Parfaite pour la plage, le hammam ou comme jeté déco.",sku:"CH006" },
  { src: Img7, text: "Alliez modernité et tradition avec cette fouta au motif Chevron signée Du Artex Tunisie. Son tissage en zigzag apporte une touche graphique élégante, tout en offrant légèreté, douceur et absorption. Parfaite pour la plage, le hammam ou comme jeté déco.",sku:"CH007" },
  { src: Img8, text: "Alliez modernité et tradition avec cette fouta au motif Chevron signée Du Artex Tunisie. Son tissage en zigzag apporte une touche graphique élégante, tout en offrant légèreté, douceur et absorption. Parfaite pour la plage, le hammam ou comme jeté déco.",sku:"CH008" },
  { src: Img9, text: "Alliez modernité et tradition avec cette fouta au motif Chevron signée Du Artex Tunisie. Son tissage en zigzag apporte une touche graphique élégante, tout en offrant légèreté, douceur et absorption. Parfaite pour la plage, le hammam ou comme jeté déco.",sku:"CH009" },
  { src: Img10, text: "Alliez modernité et tradition avec cette fouta au motif Chevron signée Du Artex Tunisie. Son tissage en zigzag apporte une touche graphique élégante, tout en offrant légèreté, douceur et absorption. Parfaite pour la plage, le hammam ou comme jeté déco.",sku:"CH010" },
  { src: Img11, text: "Alliez modernité et tradition avec cette fouta au motif Chevron signée Du Artex Tunisie. Son tissage en zigzag apporte une touche graphique élégante, tout en offrant légèreté, douceur et absorption. Parfaite pour la plage, le hammam ou comme jeté déco.",sku:"CH011" },
  { src: Img12, text: "Alliez modernité et tradition avec cette fouta au motif Chevron signée Du Artex Tunisie. Son tissage en zigzag apporte une touche graphique élégante, tout en offrant légèreté, douceur et absorption. Parfaite pour la plage, le hammam ou comme jeté déco.",sku:"CH012" },
  { src: Img13, text: "Alliez modernité et tradition avec cette fouta au motif Chevron signée Du Artex Tunisie. Son tissage en zigzag apporte une touche graphique élégante, tout en offrant légèreté, douceur et absorption. Parfaite pour la plage, le hammam ou comme jeté déco.",sku:"CH013" },
  { src: Img14, text: "Alliez modernité et tradition avec cette fouta au motif Chevron signée Du Artex Tunisie. Son tissage en zigzag apporte une touche graphique élégante, tout en offrant légèreté, douceur et absorption. Parfaite pour la plage, le hammam ou comme jeté déco.",sku:"CH014" },
  { src: Img15, text: "Alliez modernité et tradition avec cette fouta au motif Chevron signée Du Artex Tunisie. Son tissage en zigzag apporte une touche graphique élégante, tout en offrant légèreté, douceur et absorption. Parfaite pour la plage, le hammam ou comme jeté déco.",sku:"CH015" },
  { src: Img16, text: "Alliez modernité et tradition avec cette fouta au motif Chevron signée Du Artex Tunisie. Son tissage en zigzag apporte une touche graphique élégante, tout en offrant légèreté, douceur et absorption. Parfaite pour la plage, le hammam ou comme jeté déco.",sku:"CH016" },
  { src: Img17, text: "Alliez modernité et tradition avec cette fouta au motif Chevron signée Du Artex Tunisie. Son tissage en zigzag apporte une touche graphique élégante, tout en offrant légèreté, douceur et absorption. Parfaite pour la plage, le hammam ou comme jeté déco.",sku:"CH017" }

  
];

const ProductDchevron = () => {
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
                    <h1>CHEVRON</h1>
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
                alt="FOUTA"
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

export default ProductDchevron;
