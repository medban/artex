import { useEffect } from "react";
import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProductsCard } from "./productsCard.jsx";

import projImg1 from "../assets/img/chevron/bleu clair.jpg";
import projImg2 from "../assets/img/chevron/bleu unique.jpg";
import projImg3 from "../assets/img/chevron/bleu.jpg";
import projImg4 from "../assets/img/chevron/brown gray.jpg";
import projImg5 from "../assets/img/chevron/gold.jpg";
import projImg6 from "../assets/img/chevron/gray.jpg";
import projImg7 from "../assets/img/chevron/oragne verte.jpg";
import projImg8 from "../assets/img/chevron/orange noire.jpg";
import projImg9 from "../assets/img/chevron/pistache.jpg";
import projImg10 from "../assets/img/chevron/rsoe bleu.jpg";
import projImg11 from "../assets/img/chevron/tirqoise bleu.jpg";
import projImg12 from "../assets/img/chevron/verte jeaun.jpg";
import projImg13 from "../assets/img/chevron/verte.jpg";
import projImg14 from "../assets/img/chevron/1.JPG";
import projImg15 from "../assets/img/chevron/2.JPG";
import projImg16 from "../assets/img/chevron/3.JPG";
import projImg17 from "../assets/img/chevron/4.JPG";

import "animate.css"
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';
import { Footer } from '../components/Footer.js';

 const Chevron  = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  
    const products = [
        
        {
            title: "CHEVRON ",
            description: "Design BY ARTEX",
            SKU :"ch001",
            imgUrl: projImg13,
            link: "/ProductDchevron",
          },
          {
            title: " CHEVRON ",
            description: "Design BY ARTEX",
            SKU :"ch002",
         
            imgUrl: projImg12,
            link: "/ProductDchevron",
          },
          {
            title: " CHEVRON ",
            description: "Design BY ARTEX",
            SKU : "ch003",
            imgUrl: projImg3,
            link: "/ProductDchevron",
          },
          {
            title: " CHEVRON ",
            description: "Design BY ARTEX",
            SKU : "ch004",
            imgUrl: projImg4,
            link: "/ProductDchevron",
          },
          {
            title: " CHEVRON ",
            description: "Design BY ARTEX",
            SKU : "ch005",
            imgUrl: projImg5,
            link: "/ProductDchevron",
          },
          {
            title: " CHEVRON ",
            description: "Design BY ARTEX",
            SKU : "ch006",
            imgUrl: projImg11,
            link: "/ProductDchevron",
          },
          {
            title: " CHEVRON ",
            description: "Design BY ARTEX",
            SKU : "ch007",
            imgUrl: projImg7,
            link: "/ProductDchevron",
          },
          {
            title: " CHEVRON ",
            description: "Design BY ARTEX",
            SKU : "ch008",
            imgUrl: projImg8,
            link: "/ProductDchevron",
          },
          {
            title: " CHEVRON ",
            description: "Design BY ARTEX",
            SKU : "ch009",
            imgUrl: projImg9,
            link: "/ProductDchevron",
          },
          {
            title: " CHEVRON ",
            description: "Design BY ARTEX",
            SKU : "ch010",
            imgUrl: projImg10,
            link: "/ProductDchevron",
          },
          {
            title: "UNIQUE CHEVRON ",
            description: "Design BY ARTEX",
            SKU : "uch001",
            imgUrl: projImg6,
            link: "/ProductDchevron",
          },
          {
            title: "UNIQUE CHEVRON ",
            description: "Design BY ARTEX",
            SKU : "uch002",
            imgUrl: projImg2,
            link: "/ProductDchevron",
          },
          {
            title: "UNIQUE CHEVRON ",
            description: "Design BY ARTEX",
            SKU : "uch003",
            imgUrl: projImg1,
            link: "/ProductDchevron",
          },
          {
            title: "UNIQUE CHEVRON ",
            description: "Design BY ARTEX",
            SKU : "uch004",
            imgUrl: projImg14,
            link: "/ProductDchevron",
          },{
            title: "UNIQUE CHEVRON ",
            description: "Design BY ARTEX",
            SKU : "uch005",
            imgUrl: projImg15,
            link: "/ProductDchevron",
          },{
            title: "UNIQUE CHEVRON ",
            description: "Design BY ARTEX",
            SKU : "uch006",
            imgUrl: projImg16,
            link: "/ProductDchevron",
          },{
            title: "UNIQUE CHEVRON ",
            description: "Design BY ARTEX",
            SKU : "uch007",
            imgUrl: projImg17,
            link: "/ProductDchevron",
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
                    <h2>CHEVRON</h2>
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
    
    export default Chevron  ;
   
    