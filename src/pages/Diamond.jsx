import { useEffect } from "react";
import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProductsCard } from "./productsCard.jsx";


import projImg7 from "../assets/img/DAIMOND/7.JPG";
import projImg8 from "../assets/img/DAIMOND/8.JPG";
import projImg9 from "../assets/img/DAIMOND/9.JPG";
import projImg10 from "../assets/img/DAIMOND/10.JPG";
import projImg11 from "../assets/img/DAIMOND/11.JPG";

import "animate.css"
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';
import { Footer } from '../components/Footer.js';

 const Diamond  = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  
    const products = [
        
       
          {
            title: "VERTE TURQUOISE",
            description: "Design BY ARTEX",
            SKU:"D001",
            imgUrl: projImg7,
            link: "/DiamondCotton",
          }, {
            title: "VERTE KAKI",
            description: "Design BY ARTEX",
            SKU:"D002",
            imgUrl: projImg8,
            link: "/DiamondCotton",
          }, {
            title: "NOIRE",
            description: "Design BY ARTEX",
            SKU:"D003",
            imgUrl: projImg9,
            link: "/DiamondCotton",
          }, {
            title: "BLEU ROI",
            description: "Design BY ARTEX",
            SKU:"D004",
            imgUrl: projImg10,
            link: "/DiamondCotton",
          }, {
            title: "GRIS CLAIR",
            description: "Design BY ARTEX",
            SKU:"D005",
            imgUrl: projImg11,
            link: "/DiamondCotton",
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
                    <h2> DIAMOND </h2>
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
    
    export default Diamond  ;
   
    