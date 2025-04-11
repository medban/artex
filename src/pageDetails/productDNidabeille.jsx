import { useState } from "react";
import { Container, Row, Col,  Modal } from "react-bootstrap";

import Img1 from "../assets/img/nid beille classic/beige.JPG";
import Img2 from "../assets/img/nid beille classic/blanche.JPG";
import Img3 from "../assets/img/nid beille classic/bleubalnche.JPG";
import Img4 from "../assets/img/nid beille classic/bleuciel.JPG";
import Img5 from "../assets/img/nid beille classic/bleugris.JPG";
import Img6 from "../assets/img/nid beille classic/bleumarine.JPG";
import Img12 from "../assets/img/nid beille classic/blue.JPG";
import Img13 from "../assets/img/nid beille classic/blueartex.JPG";
import Img14 from "../assets/img/nid beille classic/forestgreen.JPG";
import Img15 from "../assets/img/nid beille classic/gris.JPG";
import Img16 from "../assets/img/nid beille classic/grisorange.JPG";
import Img17 from "../assets/img/nid beille classic/jaune.JPG";
import Img18 from "../assets/img/nid beille classic/jaunemaron.JPG";
import Img19 from "../assets/img/nid beille classic/orange.JPG";
import Img20 from "../assets/img/nid beille classic/rose.JPG";
import Img22 from "../assets/img/nid beille classic/rosebleu.JPG";
import Img23 from "../assets/img/nid beille classic/turquoise.JPG";
import Img24 from "../assets/img/nid beille classic/violet.JPG";

import "animate.css";
import { Footer } from "../components/Footer";
import TrackVisibility from "react-on-screen";
import "../App.css"

const images = [
  { src: Img1, text: "Alliant légèreté et élégance, la fouta Nid d’Abeille Jenny de Du Artex Tunisie offre un confort exceptionnel grâce à sa texture gaufrée et son motif délicat. Parfaite pour la plage, le spa ou la maison.", sku: "NIDB001" },
  { src: Img2, text: "Alliant légèreté et élégance, la fouta Nid d’Abeille Jenny de Du Artex Tunisie offre un confort exceptionnel grâce à sa texture gaufrée et son motif délicat. Parfaite pour la plage, le spa ou la maison.", sku: "NIDB002" },
  { src: Img3, text: "Alliant légèreté et élégance, la fouta Nid d’Abeille Jenny de Du Artex Tunisie offre un confort exceptionnel grâce à sa texture gaufrée et son motif délicat. Parfaite pour la plage, le spa ou la maison.", sku: "NIDB003" },
  { src: Img4, text: "Alliant légèreté et élégance, la fouta Nid d’Abeille Jenny de Du Artex Tunisie offre un confort exceptionnel grâce à sa texture gaufrée et son motif délicat. Parfaite pour la plage, le spa ou la maison.", sku: "NIDB004" },
  { src: Img5, text: "Alliant légèreté et élégance, la fouta Nid d’Abeille Jenny de Du Artex Tunisie offre un confort exceptionnel grâce à sa texture gaufrée et son motif délicat. Parfaite pour la plage, le spa ou la maison.", sku: "NIDB005" },
  { src: Img6, text: "Alliant légèreté et élégance, la fouta Nid d’Abeille Jenny de Du Artex Tunisie offre un confort exceptionnel grâce à sa texture gaufrée et son motif délicat. Parfaite pour la plage, le spa ou la maison.", sku: "NIDB006" },
  { src: Img12, text: "Alliant légèreté et élégance, la fouta Nid d’Abeille Jenny de Du Artex Tunisie offre un confort exceptionnel grâce à sa texture gaufrée et son motif délicat. Parfaite pour la plage, le spa ou la maison.", sku: "NIDB007" },
  { src: Img13, text: "Alliant légèreté et élégance, la fouta Nid d’Abeille Jenny de Du Artex Tunisie offre un confort exceptionnel grâce à sa texture gaufrée et son motif délicat. Parfaite pour la plage, le spa ou la maison.", sku: "NIDB008" },
  { src: Img14, text: "Alliant légèreté et élégance, la fouta Nid d’Abeille Jenny de Du Artex Tunisie offre un confort exceptionnel grâce à sa texture gaufrée et son motif délicat. Parfaite pour la plage, le spa ou la maison.", sku: "NIDB009" },
  { src: Img15, text: "Alliant légèreté et élégance, la fouta Nid d’Abeille Jenny de Du Artex Tunisie offre un confort exceptionnel grâce à sa texture gaufrée et son motif délicat. Parfaite pour la plage, le spa ou la maison.", sku: "NIDB010" },
  { src: Img16, text: "Alliant légèreté et élégance, la fouta Nid d’Abeille Jenny de Du Artex Tunisie offre un confort exceptionnel grâce à sa texture gaufrée et son motif délicat. Parfaite pour la plage, le spa ou la maison.", sku: "NIDB011" },
  { src: Img17, text: "Alliant légèreté et élégance, la fouta Nid d’Abeille Jenny de Du Artex Tunisie offre un confort exceptionnel grâce à sa texture gaufrée et son motif délicat. Parfaite pour la plage, le spa ou la maison.", sku: "NIDB012" },
  { src: Img18, text: "Alliant légèreté et élégance, la fouta Nid d’Abeille Jenny de Du Artex Tunisie offre un confort exceptionnel grâce à sa texture gaufrée et son motif délicat. Parfaite pour la plage, le spa ou la maison.", sku: "NIDB013" },
  { src: Img19, text: "Alliant légèreté et élégance, la fouta Nid d’Abeille Jenny de Du Artex Tunisie offre un confort exceptionnel grâce à sa texture gaufrée et son motif délicat. Parfaite pour la plage, le spa ou la maison.", sku: "NIDB014" },
  { src: Img20, text: "Alliant légèreté et élégance, la fouta Nid d’Abeille Jenny de Du Artex Tunisie offre un confort exceptionnel grâce à sa texture gaufrée et son motif délicat. Parfaite pour la plage, le spa ou la maison.", sku: "NIDB015" },
  { src: Img23, text: "Alliant légèreté et élégance, la fouta Nid d’Abeille Jenny de Du Artex Tunisie offre un confort exceptionnel grâce à sa texture gaufrée et son motif délicat. Parfaite pour la plage, le spa ou la maison.", sku: "NIDB016" },
  { src: Img22, text: "Alliant légèreté et élégance, la fouta Nid d’Abeille Jenny de Du Artex Tunisie offre un confort exceptionnel grâce à sa texture gaufrée et son motif délicat. Parfaite pour la plage, le spa ou la maison.", sku: "NIDB017" },
  { src: Img24, text: "Alliant légèreté et élégance, la fouta Nid d’Abeille Jenny de Du Artex Tunisie offre un confort exceptionnel grâce à sa texture gaufrée et son motif délicat. Parfaite pour la plage, le spa ou la maison.", sku: "NIDB018" }
];

const ProductDNidabeille = () => {
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
      <section className="banner1" id="home">
        <Container>
          <Row className="align-items-center">
          
            <Col xs={12} md={6} xl={4}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <span className="tagline">ARTEX TUNISIE</span>
                    <h1>NID D'ABEILLE JENNY</h1>
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

export default ProductDNidabeille;
