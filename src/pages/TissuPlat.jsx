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
          title: "TAUP",
          description: "Design by artex",
          SKU :"FC001",
          imgUrl: [projImg1,],
          link: "/ProductDtissuplat",
        },
        {
          title: "BLEU MARINE",
          description: "Design BY ARTEX",
          SKU :"FC002",
          imgUrl: projImg2,
          link: "/ProductDtissuplat",
        },
        {
          title: "VERTE KAKI",
          description: "Design BY ARTEX",
          SKU :"FC003",
          imgUrl: projImg3,
          link: "/ProductDtissuplat",
        },
        {
          title: "GRIS CLAIR ",
          description: "Design BY ARTEX",
          SKU :"FC004",
          imgUrl: projImg4,
          link: "/ProductDtissuplat",
        },
        {
          title: "JAUNE",
          description: "Design BY ARTEX",
          SKU :"FC005",
          imgUrl: projImg5,
          link: "/ProductDtissuplat",
        },
        {
          title: "MARON ",
          description: "Design BY ARTEX",
          SKU :"FC006",
          imgUrl: projImg6,
          link: "/ProductDtissuplat",

        },
        {
            title: "TERECOTTA",
            description: "Design BY ARTEX",
            SKU :"FC007",
            imgUrl: projImg7,
      
            link: "/ProductDtissuplat",
          },
          {
            title: "NOIRE",
            description: "Design BY ARTEX",
            SKU :"FC008",
            imgUrl: projImg8,
            link: "/ProductDtissuplat",

          },
          {
            title: "ORANGE",
            description: "Design BY ARTEX",
            SKU :"FC009",
            imgUrl: projImg9,
      
          },
          {
            title: "VERTE CANARD",
            description: "Design BY ARTEX",
            SKU :"FC010",
            imgUrl: projImg10,
            link: "/ProductDtissuplat",

          },
          {
            title: "ROSE BEBE",
            description: "Design BY ARTEX",
            SKU :"FC011",
            imgUrl: projImg11,
            link: "/ProductDtissuplat",

          },
          {
            title: "ROSE FUSHIA ",
            description: "Design BY ARTEX",
            SKU :"FC012",
            imgUrl: projImg12,
            link: "/ProductDtissuplat",

          },
          {
            title: "ROUGE",
            description: "Design BY ARTEX",
            SKU :"FC013",
            imgUrl: projImg13,
            link: "/ProductDtissuplat",

          },
          {
            title: "VERTE BRASIL",
            description: "Design BY ARTEX",
            SKU :"FC014",
            imgUrl: projImg14,
            link: "/ProductDtissuplat",

          },
          {
            title: "VERTE D'EAU",
            description: "Design BY ARTEX",
            SKU :"FC015",
            imgUrl: projImg15,
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
                    <h2>FOUTA CLASSIC </h2>
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
