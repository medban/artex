import { useEffect } from "react";
import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProductsCard } from "./productsCard.jsx";

import Imj1 from "../assets/img/BORABORA/1.jpg";
import Imj2 from "../assets/img/BORABORA/2.jpg";
import Imj3 from "../assets/img/BORABORA/3.jpg";
import Imj4 from "../assets/img/BORABORA/4.jpg";
import Imj5 from "../assets/img/BORABORA/5.jpg";
import Imj6 from "../assets/img/BORABORA/6.jpg";
import Imj7 from "../assets/img/BORABORA/7.jpg";
import Imj8 from "../assets/img/BORABORA/8.jpg";
import Imj9 from "../assets/img/BORABORA/9.jpg";
import Imj10 from "../assets/img/BORABORA/10.jpg";
import Imj11 from "../assets/img/BORABORA/11.jpg";
import Imj12 from "../assets/img/BORABORA/12.jpg";
import Imj13 from "../assets/img/BORABORA/13.jpg";
import Imj14 from "../assets/img/BORABORA/14.jpg";
import Imj15 from "../assets/img/BORABORA/15.jpg";
import Imj16 from "../assets/img/BORABORA/16.jpg"


import "animate.css"
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';
import { Footer } from '../components/Footer.js';

 const Borabora = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  
    const products = [
        
          {
            title: "GRIS/BLEU",
            description: "Design BY ARTEX",

            SKU :"BR001",
            imgUrl: Imj1,
            link: "/BoraboraD",
      
          },
          {
            title: "BLEU/TURQOISE",
            description: "Design BY ARTEX",
            SKU :"BR002",
            imgUrl: Imj2,
            link: "/BoraboraD",

          },
          {
            title: "ROUGE/TAUP",
            description: "Design BY ARTEX",
            SKU :"BR003",
            imgUrl: Imj3,
            link: "/BoraboraD",

      
          },
         
          {
            title: "GRIS/ROSE",
            description: "Design BY ARTEX",
            SKU :"BR004",
            imgUrl: Imj4,
            link: "/BoraboraD",

      
          },
          {
            title: "GRIS CLAIR",
            description: "Design BY ARTEX",
            SKU :"BR005",
            imgUrl: Imj5,
            link: "/BoraboraD",

      
          },
          {
            title: "TURQOISE",
            description: "Design BY ARTEX",
            SKU :"BR006",
            imgUrl: Imj6,
            link: "/BoraboraD",

      
          },
          {
            title: "ROSE FUSHIA/BLEU",
            description: "Design BY ARTEX",
            SKU :"BR007",
            imgUrl: Imj7,
            link: "/BoraboraD",

      
          },
          {
            title: "JAUNE/GRIS",
            description: "Design BY ARTEX",
            SKU :"BR008",
            imgUrl: Imj8,
            link: "/BoraboraD",

      
          },
          {
            title: "ROUGE/GRIS CHARBON",
            description: "Design BY ARTEX",
            SKU :"BR009",
            imgUrl: Imj9,
            link: "/BoraboraD",

      
          },
          {
            title: "GRIS CHARBON/ROSE",
            description: "Design BY ARTEX",
            SKU :"BR010",
            imgUrl: Imj10,
            link: "/BoraboraD",

      
          },
          {
            title: "ROSE/TAUP",
            description: "Design BY ARTEX",
            SKU :"BR011",
            imgUrl: Imj11,
            link: "/BoraboraD",

      
          },
          {
            title: "JAUNE/GRIS CLAIR",
            description: "Design BY ARTEX",
            SKU :"BR012",
            imgUrl: Imj12,
            link: "/BoraboraD",

      
          },
          {
            title: "BLEU CIEL/GRIS",
            description: "Design BY ARTEX",
            SKU :"BR013",
            imgUrl: Imj13,
            link: "/BoraboraD",

      
          },
          {
            title: "TURQOISE/VERTE",
            description: "Design BY ARTEX",
            SKU :"BR014",
            imgUrl: Imj14,
            link: "/BoraboraD",

      
          },
          {
            title: "ROSE FUSHIA/TAUP",
            description: "Design BY ARTEX",
            SKU :"BR015",
            imgUrl: Imj15,
            link: "/BoraboraD",

      
          },
          {
            title: "BLEU",
            description: "Design BY ARTEX",
            SKU :"BR016",
            imgUrl: Imj16,
            link: "/BoraboraD",

      
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
                    <h2>BORABORA</h2>
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
    
    export default Borabora;
   
    