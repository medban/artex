import {useEffect} from 'react'
import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProductsCard } from "./productsCard.jsx";
import projImg1 from "../assets/img/classic/bleu canar.jpg";
import projImg2 from "../assets/img/classic/drack green.jpg";
import projImg3 from "../assets/img/classic/green forest.jpg";
import projImg4 from "../assets/img/classic/pink.jpg";
import projImg5 from "../assets/img/classic/purple.jpg";

import "animate.css"
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';
import { Footer } from '../components/Footer.js';

 const Classic = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
    const products = [
        {
          title: "CLASSIC",
          description: "Design by artex",
          imgUrl: projImg1,
          link: "/ProductDclassic",

        },
        {
          title: "JACQUARD BERBER",
          description: "Design BY ARTEX",
          imgUrl: projImg2,
          link: "/ProductDclassic",

        },
        {
          title: "JACQUARD DIAMOND",
          description: "Design BY ARTEX",
          imgUrl: projImg3,
          link: "/ProductDclassic",

        },
        {
          title: "CHAVRON ",
          description: "Design BY ARTEX",
          imgUrl: projImg4,
          link: "/ProductDclassic",

        },
        {
          title: "GRAIN DE CAFE ",
          description: "Design BY ARTEX",
          imgUrl: projImg5,
          link: "/ProductDclassic",

        },
        
      ];
    
      return (
        <>
        <section className="project" id="projects">
        <div className="TITELE">
                      <h1> ARTEX TUNISIE</h1>
                 </div>
          <Container>
            <Row>
              <Col size={12}>
                <TrackVisibility>
                  {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                    <h2>GRAIN DE CAFE </h2>
                    <p>Le tissage du coton est un processus de fabrication textile où les fils de coton sont entrelacés pour créer un tissu. Il existe plusieurs types de tissage, chacun offrant des caractéristiques différentes en termes de texture</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                     
                      <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                        <Tab.Pane eventKey="first">
                          <Row>
                            {
                              products.map((product, index) => {
                                return (
                                  <ProductsCard
                                    key={index}
                                    {...product}
                                    />
                                )
                              })
                            }
                          </Row>
                        </Tab.Pane>                       
                      </Tab.Content>
                    </Tab.Container>
                  </div>}
                </TrackVisibility>
              </Col>
            </Row>
          </Container>
          <img className="background-image-right" src={colorSharp2} alt="Background design" />
          </section>
        <Footer/>

          </>
      )
    }
    
    export default Classic;
