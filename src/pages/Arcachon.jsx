import { useEffect } from "react";
import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProductsCard } from "./productsCard.jsx";


import projImg7 from "../assets/img/arcachon/ar1.JPG";
import projImg8 from "../assets/img/arcachon/ar2.JPG";
import projImg9 from "../assets/img/arcachon/ar3.JPG";
import projImg10 from "../assets/img/arcachon/ar4.JPG";
import projImg1 from "../assets/img/arcachon/ar5.JPG";
import projImg2 from "../assets/img/arcachon/ar6.JPG";
import projImg3 from "../assets/img/arcachon/ar7.JPG";
import projImg4 from "../assets/img/arcachon/ar8.JPG";
import projImg5 from "../assets/img/arcachon/ar9.JPG";
import projImg6 from "../assets/img/arcachon/ar10.JPG";

import "animate.css"
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';
import { Footer } from '../components/Footer.js';

 const Arcachon  = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  
    const products = [
        
       
          {
            title: "ROUGE BLEU",
            description: "Design BY ARTEX",
            SKU:"AR001",
            imgUrl: projImg7,
            link: "/ArcachonDET",
          }, {
            title: "PISTASHIO BLEU ",
            description: "Design BY ARTEX",
            SKU:"AR002",
            imgUrl: projImg8,
            link: "/ArcachonDET",
          }, {
            title: "ROUGE VERTE KAKI",
            description: "Design BY ARTEX",
            SKU:"AR003",
            imgUrl: projImg9,
            link: "/ArcachonDET",
          }, {
            title: "NOIRE BEIGE",
            description: "Design BY ARTEX",
            SKU:"AR004",
            imgUrl: projImg10,
            link: "/ArcachonDET",
          }, {
            title: "GRIS BLEU",
            description: "Design BY ARTEX",
            SKU:"AR005",
            imgUrl: projImg1,
            link: "/ArcachonDET",
          },
          {
            title: "GRIS ROSE FUSHIA",
            description: "Design BY ARTEX",
            SKU:"AR006",
            imgUrl: projImg2,
            link: "/ArcachonDET",
          },
          {
            title: "VERTE KAKI/TAUP",
            description: "Design BY ARTEX",
            SKU:"AR007",
            imgUrl: projImg3,
            link: "/ArcachonDET",
          },
          {
            title: "ROUGE / TAUP",
            description: "Design BY ARTEX",
            SKU:"AR008",
            imgUrl: projImg4,
            link: "/ArcachonDET",
          },
          {
            title: "BLEU / TAUP",
            description: "Design BY ARTEX",
            SKU:"AR009",
            imgUrl: projImg5,
            link: "/ArcachonDET",
          },
          {
            title: "ROUGE / TURQOISE",
            description: "Design BY ARTEX",
            SKU:"AR010",
            imgUrl: projImg6,
            link: "/ArcachonDET",
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
                    <h2> ARCACHON</h2>
                    <p>Fouta Arcachon Du Artex – 1m x 2m</p>
                    <p>Élégantes et pratiques, les chaussures Arcachon de Du Artex Tunisie présentent un motif subtil et une texture douce. Absorbant et à séchage rapide, parfait pour les moments de détente à la plage, dans le bain ou à la maison.
                    </p>
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
    
    export default Arcachon  ;
   
    