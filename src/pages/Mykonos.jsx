import { useEffect } from "react";
import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProductsCard } from "./productsCard.jsx";


import projImg1 from "../assets/img/mykonos/MK001.JPG";
import projImg2 from "../assets/img/mykonos/MK002.JPG";
import projImg3 from "../assets/img/mykonos/MK003.JPG";
import projImg4 from "../assets/img/mykonos/MK004.JPG";
import projImg5 from "../assets/img/mykonos/MK005.JPG";
import projImg6 from "../assets/img/mykonos/MK006.JPG";
import projImg7 from "../assets/img/mykonos/MK007.JPG";
import projImg8 from "../assets/img/mykonos/MK008.JPG";
import projImg9 from "../assets/img/mykonos/MK009.JPG";
import projImg10 from "../assets/img/mykonos/MK010.JPG";
import projImg11 from "../assets/img/mykonos/MK011.JPG"

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
            title: "BLANCO / BLEU",
            description: "Design BY ARTEX",
            SKU:"MK001",
            imgUrl: projImg1,
            link: "/MykonosD",
          }, {
            title: "BLANCO / ROUGE ",
            description: "Design BY ARTEX",
            SKU:"MK002",
            imgUrl: projImg2,
            link: "/MykonosD",
          }, {
            title: "GRIS",
            description: "Design BY ARTEX",
            SKU:"MK003",
            imgUrl: projImg3,
            link: "/MykonosD",
          }, {
            title: "TURQOISE",
            description: "Design BY ARTEX",
            SKU:"MK004",
            imgUrl: projImg4,
            link: "/MykonosD",
          }, {
            title: "VERTE D'EAU",
            description: "Design BY ARTEX",
            SKU:"MK005",
            imgUrl: projImg5,
            link: "/MykonosD",
          },
          {
            title: "ROSE",
            description: "Design BY ARTEX",
            SKU:"MK006",
            imgUrl: projImg6,
            link: "/MykonosD",
          },
          {
            title: "ORANGE",
            description: "Design BY ARTEX",
            SKU:"MK007",
            imgUrl: projImg7,
            link: "/MykonosD",
          },
          {
            title: "BLEU ORAGE",
            description: "Design BY ARTEX",
            SKU:"MK008",
            imgUrl: projImg8,
            link: "/MykonosD",
          },
          {
            title: "GRIS CHARBON",
            description: "Design BY ARTEX",
            SKU:"MK009",
            imgUrl: projImg9,
            link: "/MykonosD",
          },
          {
            title: "BLEU JEANS",
            description: "Design BY ARTEX",
            SKU:"MK010",
            imgUrl: projImg10,
            link: "/MykonosD",
          },
          {
            title: "BLEU CIEL",
            description: "Design BY ARTEX",
            SKU:"MK011",
            imgUrl: projImg11,
            link: "/MykonosD",
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
                    <h2> MYKONOS</h2>
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
    
    export default Arcachon  ;
   
    