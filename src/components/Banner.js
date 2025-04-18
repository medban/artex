import { useState, useEffect, useCallback, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
// add th "Carousel" in the boot up
// import img1 from "../assets/img/1.png";
// import img2 from "../assets/img/2.png";
// import img3 from "../assets/img/5.png";
// import img4 from "../assets/img/6.png";

import "animate.css";

import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  const toRotate = useMemo(() => ["Web Developer", "Web Designer", "UI/UX Designer"], []);

  const tick = useCallback(() => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum((prevLoopNum) => prevLoopNum + 1);
      setDelta(500);
    }
  }, [loopNum, isDeleting, text, toRotate, period]);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text, delta, tick]);

  return (
    <>
      <section className="banner1" id="home">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6} xl={7}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  
                    <h1>ARTEX TUNISIE</h1>
                    <p>
                    Artex Tunisie est une entreprise textile basée à Mahdia, en Tunisie, 
                    fondée par Arous Karim, un passionné de l’artisanat et du savoir-faire local.
                     Spécialisée dans le tissage de produits en coton, l’entreprise fabrique une large 
                     gamme d’articles tels que des foutas, jetés de canapé, ponchos, serviettes et capes
                      de bain. Artex Tunisie allie tradition et qualité pour offrir des produits à la fois 
                      esthétiques, durables et respectueux des matières naturelles. Chaque pièce est conçue 
                      avec soin pour répondre aux besoins 
                    des particuliers comme des professionnels, en Tunisie et à l’international.
                    </p>
                  </div>
                )}
              </TrackVisibility>
            </Col>
            {/* <Col xs={12} md={6} xl={5}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                    <Carousel>
                      <Carousel.Item>
                        <img className="d-block w-100" src={img1} alt="First slide" />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img className="d-block w-100" src={img2} alt="Second slide" />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img className="d-block w-100" src={img3} alt="Third slide" />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img className="d-block w-100" src={img4} alt="Third slide" />
                      </Carousel.Item>
                    </Carousel>
                  </div>
                )}
              </TrackVisibility>
            </Col> */}
          </Row>
        </Container>
      </section>
      
    </>
  );
};


