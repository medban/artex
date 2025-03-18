import { useState, useEffect, useCallback, useMemo } from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import headerImg from "../assets/img/KIM.jpg";
import img1 from "../assets/img/machine2.jpg";
import img2 from "../assets/img/machine.jpg";
import img3 from "../assets/img/machine 1.jpg";
import img4 from "../assets/img/file.jpg";
import "animate.css";
import {Contact} from "../components/Contact";
import { Footer } from "../components/Footer";
import TrackVisibility from "react-on-screen";

const About = () => {
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
      <section className="banner" id="home">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6} xl={7}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <span className="tagline">KARIM AROUS</span>
                    <h1>PDG ARTEX </h1>
                    <p>
                      Arous Karim, né le 12 février 1972, est le fondateur d'Artex Textile, une entreprise
                      située à Mahdia, en Tunisie. Passionné par l'industrie textile, il a fondé l'entreprise
                      avec la vision de créer des produits de qualité, alliant tradition et innovation. Grâce à
                      son expertise et à son leadership, Artex Textile s'est rapidement imposée comme un acteur
                      clé dans le secteur textile, contribuant à l'essor économique de la région et à la création
                      d'emplois.
                    </p>
                  </div>
                )}
              </TrackVisibility>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                        <img className="d-block w-100" src={headerImg} alt="First slide" />
                  </div>
                )}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </section>


      {/* section 2 */}
      <section className="banner1" id="home">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6} xl={7}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <h1>ARTEX TUNISIE</h1>
                    <p>
                      Arous Karim, né le 12 février 1972, est le fondateur d'Artex Textile, une entreprise
                      située à Mahdia, en Tunisie. Passionné par l'industrie textile, il a fondé l'entreprise
                      avec la vision de créer des produits de qualité, alliant tradition et innovation. Grâce à
                      son expertise et à son leadership, Artex Textile s'est rapidement imposée comme un acteur
                      clé dans le secteur textile, contribuant à l'essor économique de la région et à la création
                      d'emplois.
                    </p>
                  </div>
                )}
              </TrackVisibility>
            </Col>
            <Col xs={12} md={6} xl={5}>
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
            </Col>
          </Row>
        </Container>
      </section>
      <Contact/>
      <Footer />
    </>
  );
};

export default About;
