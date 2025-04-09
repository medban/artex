import { useEffect } from "react";
import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProductsCard } from "./productsCard.jsx";


import projImg7 from "../assets/img/artex/ART01.JPG";
import projImg8 from "../assets/img/artex/ART02.JPG";
import projImg9 from "../assets/img/artex/ART03.JPG";
import projImg10 from "../assets/img/artex/ART04.JPG";
import projImg1 from "../assets/img/artex/ART05.JPG";
import projImg2 from "../assets/img/artex/ART06.JPG";
import projImg3 from "../assets/img/artex/ART07.JPG";
import projImg4 from "../assets/img/artex/ART08.JPG";
import projImg5 from "../assets/img/artex/ART09.JPG";

import "animate.css"
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';
import { Footer } from '../components/Footer.js';

 const Artex = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  
    const products = [
        
       
          {
            title: "N°1",
            description: "Design BY ARTEX",
            SKU:"ART001",
            imgUrl: projImg7,
            link: "/ArtexDet",
          }, {
            title: "N°2 ",
            description: "Design BY ARTEX",
            SKU:"ART002",
            imgUrl: projImg8,
            link: "/ArtexDet",
          }, {
            title: "N°3",
            description: "Design BY ARTEX",
            SKU:"ART003",
            imgUrl: projImg9,
            link: "/ArtexDet",
          }, {
            title: "N°4",
            description: "Design BY ARTEX",
            SKU:"ART004",
            imgUrl: projImg10,
            link: "/ArtexDet",
          }, {
            title: "N°5",
            description: "Design BY ARTEX",
            SKU:"ART005",
            imgUrl: projImg1,
            link: "/ArtexDet",
          },
          {
            title: "N°6",
            description: "Design BY ARTEX",
            SKU:"ART006",
            imgUrl: projImg2,
            link: "/ArtexDet",
          },
          {
            title: "N°7",
            description: "Design BY ARTEX",
            SKU:"ART007",
            imgUrl: projImg3,
            link: "/ArtexDet",
          },
          {
            title: "N°8",
            description: "Design BY ARTEX",
            SKU:"ART008",
            imgUrl: projImg4,
            link: "/ArtexDet",
          },
          {
            title: "N°9",
            description: "Design BY ARTEX",
            SKU:"ART009",
            imgUrl: projImg5,
            link: "/ArtexDet",
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
                    <h2> ARTEX </h2>
                    <p>Fouta Artex Du Artex – 1m x 2m </p>
                    <p>

Apportez une touche d’élégance à vos moments de détente avec la fouta Artex de Du Artex Tunisie. Son motif moderne et sa texture douce en font l'accessoire parfait pour la plage, le hammam ou à la maison. Légère, absorbante et agréable au toucher, elle vous accompagne partou</p>
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
    
    export default Artex ;
   
    