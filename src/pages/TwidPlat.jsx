
import { useEffect } from "react";
import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProductsCard } from "./productsCard.jsx";


 import projImg1 from "../assets/img/twid plat/TW001.JPG";
 import projImg2 from "../assets/img/twid plat/TW002.JPG";
 import projImg3 from "../assets/img/twid plat/TW003.JPG";
 import projImg4 from "../assets/img/twid plat/TW004.JPG";
 import projImg5 from "../assets/img/twid plat/TW005.JPG";
 import projImg6 from "../assets/img/twid plat/TW006.JPG"


import "animate.css"
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';
import { Footer } from '../components/Footer.js';

 const TwidPlat= () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  
    const products = [
        
       
          {
            title: "ROSE ECRU",
            description: "Design BY ARTEX",
            SKU:"TW001",
            imgUrl: projImg1,
            link: "/TwidPlatD",
          }, {
            title: " OR ECRU",
            description: "Design BY ARTEX",
            SKU:"TW002",
            imgUrl: projImg2,
            link: "/TwidPlatD",
          }, {
            title: "JAUNE",
            description: "Design BY ARTEX",
            SKU:"TW003",
            imgUrl: projImg3,
            link: "/TwidPlatD",
          }, {
            title: "BLEU MARINE",
            description: "Design BY ARTEX",
            SKU:"TW004",
            imgUrl: projImg4,
            link: "/TwidPlatD",
          }, {
            title: "BLEU GRIS",
            description: "Design BY ARTEX",
            SKU:"TW005",
            imgUrl: projImg5,
            link: "/TwidPlatD",
          },
          {
            title: "ROUGE BORDEAUX",
            description: "Design BY ARTEX",
            SKU:"TW006",
            imgUrl: projImg6,
            link: "/TwidPlatD",
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
                    <h2> TWID PLAT</h2>
                    <p>Fouta Twid Plat Du Artex – 1m x 2m</p>
<p>
Découvrez la fouta Twid Plat de Du Artex Tunisie, un accessoire à la fois élégant et pratique. Son tissage plat et son design moderne en font un choix parfait pour vos moments de détente. Légère, absorbante et facile à transporter, elle est idéale pour la plage, le hammam ou à la maison.</p>
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
    
    export default TwidPlat;
   
    