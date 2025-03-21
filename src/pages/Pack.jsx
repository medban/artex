import { useEffect } from "react";
import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProductsCard } from "./productsCard.jsx";

import ImE1 from "../assets/img/pack/servietteblanche.webp";
import ImE2 from "../assets/img/pack/serviettebleuciel.webp";
import ImE3 from "../assets/img/pack/serviettebleumarine.webp";
import ImE4 from "../assets/img/pack/serviettegrise.webp";
import ImE5 from "../assets/img/pack/servietteoranger.webp";
import ImE6 from "../assets/img/pack/servietteturquoise.webp";
import ImE7 from "../assets/img/pack/servietteverte.webp";
import ImE8 from "../assets/img/pack/servietteverteforet.webp";


import "animate.css"
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';
import { Footer } from '../components/Footer.js';

 const Packs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  
    const products = [
        
          {
            title: "ECRU",
            description: "Design BY ARTEX",

            SKU :"P001",
            imgUrl: ImE1,
            link: "/Pack",
      
          },
          {
            title: "BLEU CANARD",
            description: "Design BY ARTEX",
            SKU :"P002",
            imgUrl: ImE2,
            link: "/Pack",

          },
          {
            title: "BLEU MARINE",
            description: "Design BY ARTEX",
            SKU :"P003",
            imgUrl: ImE3,
            link: "/Pack",

      
          },
         
          {
            title: "GRISE",
            description: "Design BY ARTEX",
            SKU :"P004",
            imgUrl: ImE4,
            link: "/Pack",

      
          },
          {
            title: "ORANGE",
            description: "Design BY ARTEX",
            SKU :"P005",
            imgUrl: ImE5,
            link: "/Pack",

      
          },
          {
            title: "BLEU TURQUOISE",
            description: "Design BY ARTEX",
            SKU :"P006",
            imgUrl: ImE6,
            link: "/Pack",

      
          },
          {
            title: "GRIS CHARBON",
            description: "Design BY ARTEX",
            SKU :"P007",
            imgUrl: ImE7,
            link: "/Pack",

      
          },
          {
            title: "VERTE FORET",
            description: "Design BY ARTEX",
            SKU :"P008",
            imgUrl: ImE8,
            link: "/Pack",

      
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
                    <h2>PACK </h2>
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
    
    export default Packs;
   
    