import { useState } from "react";
import { Container, Row, Col, Carousel, Modal } from "react-bootstrap";

import Img1 from "../assets/img/tissu plat/beige.jpg";
import Img2 from "../assets/img/tissu plat/bleu marin.jpg";
import Img3 from "../assets/img/tissu plat/forest green.jpg";
import Img4 from "../assets/img/tissu plat/gray.jpg";
import Img5 from "../assets/img/tissu plat/jeaun.jpg";
import Img6 from "../assets/img/tissu plat/maron.jpg";
import Img7 from "../assets/img/tissu plat/maroon.jpg";
import Img8 from "../assets/img/tissu plat/noire.jpg";
import Img9 from "../assets/img/tissu plat/orange.jpg";
import Img10 from "../assets/img/tissu plat/pistache.jpg";
import Img11 from "../assets/img/tissu plat/rose bebe.jpg";
import Img12 from "../assets/img/tissu plat/rose phachia.jpg";
import Img13 from "../assets/img/tissu plat/rouge.jpg";
import Img14 from "../assets/img/tissu plat/verte brasil.jpg";
import Img15 from "../assets/img/tissu plat/verte d'eau.jpg";
import Img16 from "../assets/img/tissu plat/1.JPG";
import Img17 from "../assets/img/tissu plat/2.JPG";
import Img18 from "../assets/img/tissu plat/3.JPG";
import Img19 from "../assets/img/tissu plat/4.JPG";

import "animate.css";
import { Footer } from "../components/Footer";
import TrackVisibility from "react-on-screen";
import "../App.css"

const images = [
  { src: Img1, text: "Simplicité et efficacité avec cette fouta en tissu plat signée Du Artex Tunisie. Légère, douce et très absorbante, elle sèche rapidement et se plie facilement. Parfaite pour la plage, le hammam, ou comme linge d’appoint à la maison.",sku:"FC001" },
  { src: Img2, text: "Simplicité et efficacité avec cette fouta en tissu plat signée Du Artex Tunisie. Légère, douce et très absorbante, elle sèche rapidement et se plie facilement. Parfaite pour la plage, le hammam, ou comme linge d’appoint à la maison.",sku:"FC002" },
  { src: Img3, text: "Simplicité et efficacité avec cette fouta en tissu plat signée Du Artex Tunisie. Légère, douce et très absorbante, elle sèche rapidement et se plie facilement. Parfaite pour la plage, le hammam, ou comme linge d’appoint à la maison.",sku:"FC003" },
  { src: Img4, text: "Simplicité et efficacité avec cette fouta en tissu plat signée Du Artex Tunisie. Légère, douce et très absorbante, elle sèche rapidement et se plie facilement. Parfaite pour la plage, le hammam, ou comme linge d’appoint à la maison.",sku:"FC004" },
  { src: Img5, text: "Simplicité et efficacité avec cette fouta en tissu plat signée Du Artex Tunisie. Légère, douce et très absorbante, elle sèche rapidement et se plie facilement. Parfaite pour la plage, le hammam, ou comme linge d’appoint à la maison.",sku:"FC005" },
  { src: Img6, text: "Simplicité et efficacité avec cette fouta en tissu plat signée Du Artex Tunisie. Légère, douce et très absorbante, elle sèche rapidement et se plie facilement. Parfaite pour la plage, le hammam, ou comme linge d’appoint à la maison.",sku:"FC006" },
  { src: Img7, text: "Simplicité et efficacité avec cette fouta en tissu plat signée Du Artex Tunisie. Légère, douce et très absorbante, elle sèche rapidement et se plie facilement. Parfaite pour la plage, le hammam, ou comme linge d’appoint à la maison.",sku:"FC007" },
  { src: Img8, text: "Simplicité et efficacité avec cette fouta en tissu plat signée Du Artex Tunisie. Légère, douce et très absorbante, elle sèche rapidement et se plie facilement. Parfaite pour la plage, le hammam, ou comme linge d’appoint à la maison.",sku:"FC008" },
  { src: Img9, text: "Simplicité et efficacité avec cette fouta en tissu plat signée Du Artex Tunisie. Légère, douce et très absorbante, elle sèche rapidement et se plie facilement. Parfaite pour la plage, le hammam, ou comme linge d’appoint à la maison.",sku:"FC009" },
  { src: Img10, text: "Simplicité et efficacité avec cette fouta en tissu plat signée Du Artex Tunisie. Légère, douce et très absorbante, elle sèche rapidement et se plie facilement. Parfaite pour la plage, le hammam, ou comme linge d’appoint à la maison.",sku:"FC010" },
  { src: Img11, text: "Simplicité et efficacité avec cette fouta en tissu plat signée Du Artex Tunisie. Légère, douce et très absorbante, elle sèche rapidement et se plie facilement. Parfaite pour la plage, le hammam, ou comme linge d’appoint à la maison.",sku:"FC011" },
  { src: Img12, text: "Simplicité et efficacité avec cette fouta en tissu plat signée Du Artex Tunisie. Légère, douce et très absorbante, elle sèche rapidement et se plie facilement. Parfaite pour la plage, le hammam, ou comme linge d’appoint à la maison.",sku:"FC012" },
  { src: Img13, text: "Simplicité et efficacité avec cette fouta en tissu plat signée Du Artex Tunisie. Légère, douce et très absorbante, elle sèche rapidement et se plie facilement. Parfaite pour la plage, le hammam, ou comme linge d’appoint à la maison.",sku:"FC013" },
  { src: Img14, text: "Simplicité et efficacité avec cette fouta en tissu plat signée Du Artex Tunisie. Légère, douce et très absorbante, elle sèche rapidement et se plie facilement. Parfaite pour la plage, le hammam, ou comme linge d’appoint à la maison.",sku:"FC014" },
  { src: Img15, text: "Simplicité et efficacité avec cette fouta en tissu plat signée Du Artex Tunisie. Légère, douce et très absorbante, elle sèche rapidement et se plie facilement. Parfaite pour la plage, le hammam, ou comme linge d’appoint à la maison.",sku:"FC015" },
  { src: Img16, text: "Simplicité et efficacité avec cette fouta en tissu plat signée Du Artex Tunisie. Légère, douce et très absorbante, elle sèche rapidement et se plie facilement. Parfaite pour la plage, le hammam, ou comme linge d’appoint à la maison.",sku:"FC016" },
  { src: Img17, text: "Simplicité et efficacité avec cette fouta en tissu plat signée Du Artex Tunisie. Légère, douce et très absorbante, elle sèche rapidement et se plie facilement. Parfaite pour la plage, le hammam, ou comme linge d’appoint à la maison.",sku:"FC017" },
  { src: Img18, text: "Simplicité et efficacité avec cette fouta en tissu plat signée Du Artex Tunisie. Légère, douce et très absorbante, elle sèche rapidement et se plie facilement. Parfaite pour la plage, le hammam, ou comme linge d’appoint à la maison.",sku:"FC018" },
  { src: Img19, text: "Simplicité et efficacité avec cette fouta en tissu plat signée Du Artex Tunisie. Légère, douce et très absorbante, elle sèche rapidement et se plie facilement. Parfaite pour la plage, le hammam, ou comme linge d’appoint à la maison.",sku:"FC019" },
];

const ProductDtissuplat = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0); 

  const handleShow = (imgSrc) => {
    setSelectedImage(imgSrc);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  return (
    <>
      <section className="banner1" id="home">
        <Container>
          <Row className="align-items-center">
      
            <Col xs={12} md={6} xl={7}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <span className="tagline">ARTEX TUNISIE</span>
                    <h1>FOUTA CLASSIC</h1>
                    <p>{images[activeIndex].text}</p>
                    <p><strong>SKU:</strong> {images[activeIndex].sku}</p>

                  </div>
                )}
              </TrackVisibility>
            </Col>

      
            <Col xs={12} md={6} xl={5}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                    <Carousel activeIndex={activeIndex} onSelect={(selectedIndex) => setActiveIndex(selectedIndex)}>
                      {images.map((item, index) => (
                        <Carousel.Item key={index} onClick={() => handleShow(item.src)}>
                          <img className="d-block w-100" src={item.src} alt={`Slide ${index + 1}`} />
                        </Carousel.Item>
                      ))}
                    </Carousel>
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
    <img 
      src={selectedImage} 
      alt="Zoomed I" 
      className="img-fluid zoom-image" 
    />
  </Modal.Body>
</Modal>
    </>
  );
};

export default ProductDtissuplat;
