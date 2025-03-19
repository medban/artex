import { useEffect } from "react";
import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProductsCard } from "./productsCard.jsx";

import projImg1 from "../assets/img/stripe/blue ciel.jpg";
import projImg2 from "../assets/img/stripe/blue djean.jpg";
import projImg3 from "../assets/img/stripe/dark green.jpg";
import projImg4 from "../assets/img/stripe/forest green.jpg";
import projImg5 from "../assets/img/stripe/gray.jpg";
import projImg6 from "../assets/img/stripe/green.jpg";
import projImg7 from "../assets/img/stripe/orange.jpg";
import projImg8 from "../assets/img/stripe/rose.jpg";
import projImg9 from "../assets/img/stripe/tirqose.jpg";
import projImg10 from "../assets/img/stripe/verte.jpg";

import "animate.css"
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';
import { Footer } from '../components/Footer.js';

 const Stripe = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  
    const products = [
        
        {
            title: "TIRQOUISE ",
            description: "Design BY ARTEX",
            SKU:"S001",
            imgUrl: projImg1,
            link: "/ProductDstripe",
          },
          {
            title: " BLEU MARINE",
            description: "Design BY ARTEX",
            SKU:"S002",
            imgUrl: projImg2,
            link: "/ProductDstripe",

          },
          {
            title: "VERTE ",
            description: "Design BY ARTEX",
            SKU:"S003",
            imgUrl: projImg3,
            link: "/ProductDstripe",

          },
          {
            title: " VERTE FORET",
            description: "Design BY ARTEX",
            SKU:"S004",
            imgUrl: projImg4,
            link: "/ProductDstripe",

          },
          {
            title: " GRISE",
            description: "Design BY ARTEX",
            SKU:"S005",
            imgUrl: projImg5,
            link: "/ProductDstripe",

          },
          {
            title: " BLEU NUIT",
            description: "Design BY ARTEX",
            SKU:"S006",
            imgUrl: projImg6,
            link: "/ProductDstripe",

          },
          {
            title: " ORANGE",
            description: "Design BY ARTEX",
            SKU:"S007",
            imgUrl: projImg7,
            link: "/ProductDstripe",

          },
          {
            title: "ROSE ",
            description: "Design BY ARTEX",
            SKU:"S008",
            imgUrl: projImg8,
            link: "/ProductDstripe",

          },
          {
            title: "BLEU CANARD ",
            description: "Design BY ARTEX",
            SKU:"S009",
            imgUrl: projImg9,
            link: "/ProductDstripe",

          },
          {
            title: "VERTE PISTACHE ",
            description: "Design BY ARTEX",
            SKU:"S010",
            imgUrl: projImg10,
            link: "/ProductDstripe",

          },
        
         
      ];
    
      return (
        <>
       
        <section className="project">
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
    
    export default Stripe  ;
   
    