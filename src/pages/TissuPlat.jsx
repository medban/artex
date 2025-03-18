import { useEffect } from "react";
import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProductsCard } from "./productsCard.jsx";
import projImg1 from "../assets/img/tissu plat/beige.jpg";
import projImg2 from "../assets/img/tissu plat/bleu marin.jpg";
import projImg3 from "../assets/img/tissu plat/forest green.jpg";
import projImg4 from "../assets/img/tissu plat/gray.jpg";
import projImg5 from "../assets/img/tissu plat/jeaun.jpg";
import projImg6 from "../assets/img/tissu plat/maron.jpg";
import projImg7 from "../assets/img/tissu plat/maroon.jpg";
import projImg8 from "../assets/img/tissu plat/noire.jpg";
import projImg9 from "../assets/img/tissu plat/orange.jpg";
import projImg10 from "../assets/img/tissu plat/pistache.jpg";
import projImg11 from "../assets/img/tissu plat/rose bebe.jpg";
import projImg12 from "../assets/img/tissu plat/rose phachia.jpg";
import projImg13 from "../assets/img/tissu plat/rouge.jpg";
import projImg14 from "../assets/img/tissu plat/verte brasil.jpg";
import projImg15 from "../assets/img/tissu plat/verte d'eau.jpg";
import projImg16 from "../assets/img/tissu plat/1.JPG";
import projImg17 from "../assets/img/tissu plat/2.JPG";
import projImg18 from "../assets/img/tissu plat/3.JPG";
import projImg19 from "../assets/img/tissu plat/4.JPG";

import "animate.css"
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';
import { Footer } from '../components/Footer.js';

 const TissuPlat = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  
    const products = [
        {
          title: "CLASSIC",
          description: "Design by artex",
          imgUrl: [projImg1,],
          link: "/ProductDtissuplat",
        },
        {
          title: "JACQUARD BERBER",
          description: "Design BY ARTEX",
          imgUrl: projImg2,
          link: "/ProductDtissuplat",
        },
        {
          title: "JACQUARD DIAMOND",
          description: "Design BY ARTEX",
          imgUrl: projImg3,
          link: "/ProductDtissuplat",
        },
        {
          title: "CHAVRON ",
          description: "Design BY ARTEX",
          imgUrl: projImg4,
          link: "/ProductDtissuplat",
        },
        {
          title: "GRAIN DE CAFE ",
          description: "Design BY ARTEX",
          imgUrl: projImg5,
          link: "/ProductDtissuplat",
        },
        {
          title: "UNIQUE CHEVRON ",
          description: "Design BY ARTEX",
          imgUrl: projImg6,
          link: "/ProductDtissuplat",

        },
        {
            title: "UNIQUE CHEVRON ",
            description: "Design BY ARTEX",
            imgUrl: projImg7,
      
            link: "/ProductDtissuplat",
          },
          {
            title: "UNIQUE CHEVRON ",
            description: "Design BY ARTEX",
            imgUrl: projImg8,
            link: "/ProductDtissuplat",

          },
          {
            title: "UNIQUE CHEVRON ",
            description: "Design BY ARTEX",
            imgUrl: projImg9,
      
          },
          {
            title: "UNIQUE CHEVRON ",
            description: "Design BY ARTEX",
            imgUrl: projImg10,
            link: "/ProductDtissuplat",

          },
          {
            title: "UNIQUE CHEVRON ",
            description: "Design BY ARTEX",
            imgUrl: projImg11,
            link: "/ProductDtissuplat",

          },
          {
            title: "UNIQUE CHEVRON ",
            description: "Design BY ARTEX",
            imgUrl: projImg12,
            link: "/ProductDtissuplat",

          },
          {
            title: "UNIQUE CHEVRON ",
            description: "Design BY ARTEX",
            imgUrl: projImg13,
            link: "/ProductDtissuplat",

          },
          {
            title: "UNIQUE CHEVRON ",
            description: "Design BY ARTEX",
            imgUrl: projImg14,
            link: "/ProductDtissuplat",

          },
          {
            title: "UNIQUE CHEVRON ",
            description: "Design BY ARTEX",
            imgUrl: projImg15,
            link: "/ProductDtissuplat",

          },
          {
            title: "UNIQUE CHEVRON ",
            description: "Design BY ARTEX",
            imgUrl: projImg16,
            link: "/ProductDtissuplat",

          },{
            title: "UNIQUE CHEVRON ",
            description: "Design BY ARTEX",
            imgUrl: projImg17,
            link: "/ProductDtissuplat",

          },{
            title: "UNIQUE CHEVRON ",
            description: "Design BY ARTEX",
            imgUrl: projImg18,
            link: "/ProductDtissuplat",

          },{
            title: "UNIQUE CHEVRON ",
            description: "Design BY ARTEX",
            imgUrl: projImg19,
            link: "/ProductDtissuplat",

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
                    <h2>TISSU PLAT </h2>
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
    
    export default TissuPlat;
