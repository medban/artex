import { useEffect } from "react";
import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProductsCard } from "./productsCard.jsx";

import Imj1 from "../assets/img/DAIMOND/1.JPG";
import Imj2 from "../assets/img/DAIMOND/2.JPG";
import Imj3 from "../assets/img/DAIMOND/3.JPG";
import Imj4 from "../assets/img/DAIMOND/4.JPG";
import Imj5 from "../assets/img/DAIMOND/5.JPG";
import Imj6 from "../assets/img/DAIMOND/6.JPG";
import Imj7 from "../assets/img/jeter/XXL-1-1.jpg";
import Imj8 from "../assets/img/jeter/XXL-10-2.jpg";
import Imj9 from "../assets/img/jeter/XXL-15.jpg";
import Imj10 from "../assets/img/jeter/XXL-16-1.jpg";
import Imj11 from "../assets/img/jeter/XXL-2.jpg";
import Imj12 from "../assets/img/jeter/XXL-3.jpg";
import Imj13 from "../assets/img/jeter/XXL-4-.jpg";
import Imj14 from "../assets/img/jeter/XXL-5.jpg";
import Imj15 from "../assets/img/jeter/XXL-7.jpg";


import "animate.css"
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';
import { Footer } from '../components/Footer.js';

 const Jeters = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  
    const products = [
        
          {
            title: "NOIRE",
            description: "Design BY ARTEX",

            SKU :"JT001",
            imgUrl: Imj1,
            link: "/Jeter",
      
          },
          {
            title: "BORDEAUX",
            description: "Design BY ARTEX",
            SKU :"JT002",
            imgUrl: Imj2,
            link: "/Jeter",

          },
          {
            title: "VIOLETE",
            description: "Design BY ARTEX",
            SKU :"JT003",
            imgUrl: Imj3,
            link: "/Jeter",

      
          },
         
          {
            title: "MOTARD",
            description: "Design BY ARTEX",
            SKU :"JT004",
            imgUrl: Imj4,
            link: "/Jeter",

      
          },
          {
            title: "GRIS CHARBON",
            description: "Design BY ARTEX",
            SKU :"JT005",
            imgUrl: Imj5,
            link: "/Jeter",

      
          },
          {
            title: "ORANGE",
            description: "Design BY ARTEX",
            SKU :"JT006",
            imgUrl: Imj6,
            link: "/Jeter",

      
          },
          {
            title: "MODEL ARTHUR 2/3",
            description: "Design BY ARTEX",
            SKU :"JT007",
            imgUrl: Imj7,
            link: "/Jeter",

      
          },
          {
            title: "VERTE FORET",
            description: "Design BY ARTEX",
            SKU :"JT008",
            imgUrl: Imj8,
            link: "/Jeter",

      
          },
          {
            title: "VERTE FORET",
            description: "Design BY ARTEX",
            SKU :"JT009",
            imgUrl: Imj9,
            link: "/Jeter",

      
          },
          {
            title: "VERTE FORET",
            description: "Design BY ARTEX",
            SKU :"JT010",
            imgUrl: Imj10,
            link: "/Jeter",

      
          },
          {
            title: "2/3 DIAMOND",
            description: "Design BY ARTEX",
            SKU :"JT011",
            imgUrl: Imj11,
            link: "/Jeter",

      
          },
          {
            title: "VERTE FORET",
            description: "Design BY ARTEX",
            SKU :"JT012",
            imgUrl: Imj12,
            link: "/Jeter",

      
          },
          {
            title: "VERTE FORET",
            description: "Design BY ARTEX",
            SKU :"JT013",
            imgUrl: Imj13,
            link: "/Jeter",

      
          },
          {
            title: "UNI 2/3",
            description: "Design BY ARTEX",
            SKU :"JT014",
            imgUrl: Imj14,
            link: "/Jeter",

      
          },
          {
            title: "VERTE FORET",
            description: "Design BY ARTEX",
            SKU :"JT015",
            imgUrl: Imj15,
            link: "/Jeter",

      
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
                    <h2>JETER 2m/3m</h2>
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
    
    export default Jeters;
   
    