import { useEffect } from "react";
import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProductsCard } from "./productsCard.jsx";

import projImg1 from "../assets/img/E1.jpg";
import projImg2 from "../assets/img/E2.jpg";
import projImg3 from "../assets/img/E3.jpg";
import projImg4 from "../assets/img/E4.jpg";
import projImg5 from "../assets/img/E5.jpg";
import projImg6 from "../assets/img/E6.jpg";
import projImg7 from "../assets/img/soi/_MG_9061.JPG";
import projImg8 from "../assets/img/soi/_MG_9088.JPG";
import projImg9 from "../assets/img/soi/_MG_9115.JPG";
import projImg10 from "../assets/img/soi/_MG_9152.JPG";
import projImg11 from "../assets/img/soi/_MG_9192.JPG";
import projImg12 from "../assets/img/soi/_MG_9219.JPG";
import projImg13 from "../assets/img/soi/_MG_9232.JPG";


import "animate.css"
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';
import { Footer } from '../components/Footer.js';

 const Echarpe  = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  
    const products = [
        
      {
        title: "",
         description:"disgned by artex",
        SKU:" ES001",
        imgUrl: [projImg1,], 
        link: "/ProductDecharpe",
      },
      {
        title: "",
         description:"disgned by artex",
        SKU:" ES002",
        imgUrl: [projImg2], 
        link: "/ProductDecharpe",
      },
      {
        title: "",
         description:"disgned by artex",
        SKU:" ES003",
        imgUrl: [projImg3], 
        link: "/ProductDecharpe ",
      },
      {
        title: "",
         description:"disgned by artex",
        SKU:" ES004",
        imgUrl: [projImg4], 
        link: "/ProductDecharpe",
      },
      {
        title: "",
         description:"disgned by artex",
        SKU:" ES005",
        imgUrl: [projImg5], 
        link: "/ProductDecharpe",
      },
      {
        title: "",
         description:"disgned by artex",
        SKU:" ES006",
        imgUrl: [projImg6], 
        link: "/ProductDecharpe",
      },
      {
        title: "",
         description:"disgned by artex",
        SKU:" ES007",
        imgUrl: [projImg7], 
        link: "/ProductDecharpe",
      },
      {
        title: "",
         description:"disgned by artex",
        SKU:" ES008",
        imgUrl: [projImg8], 
        link: "/ProductDecharpe",
      },
      {
        title: "",
         description:"disgned by artex",
        SKU:" ES009",
        imgUrl: [projImg9], 
        link: "/ProductDecharpe",
      },
      {
        title: "",
         description:"disgned by artex",
        SKU:" ES010",
        imgUrl: [projImg10], 
        link: "/ProductDecharpe",
      },
      {
        title: "",
         description:"disgned by artex",
        SKU:" ES011",
        imgUrl: [projImg11], 
        link: "/ProductDecharpe",
      },
      {
        title: "",
         description:"disgned by artex",
       
        SKU:" ES012",
        imgUrl: [projImg12], 
        link: "/ProductDecharpe",
      },
      {
        title: "",
         description:"disgned by artex",
        SKU:" ES013",
        imgUrl: [projImg13], 
        link: "/ProductDecharpe",
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
                    <h2>ECHARPE EN SOIE </h2>
                    <p>Apportez une touche de raffinement à votre tenue avec cette somptueuse écharpe en soie signée Artex Tunisie. Tissée avec soin et passion dans nos ateliers, cette pièce incarne l’élégance intemporelle et le savoir-faire tunisien.</p>
                    <p>Matière : 100 % soie naturelle</p>


             <p>     Finition : Bords roulottés à la main</p>

                    <p>Origine : Fabriquée en Tunisie</p>
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
    
    export default Echarpe ;
   
    