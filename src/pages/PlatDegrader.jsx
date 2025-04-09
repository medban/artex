import { useEffect } from "react";
import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProductsCard } from "./productsCard.jsx";


import projImg1 from "../assets/img/PLAT DEGRADER/PD001.JPG";
import projImg2 from "../assets/img/PLAT DEGRADER/PD002.JPG";
import projImg3 from "../assets/img/PLAT DEGRADER/PD003.JPG";
import projImg4 from "../assets/img/PLAT DEGRADER/PD004.JPG";



import "animate.css"
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';
import { Footer } from '../components/Footer.js';

 const PlatDegrader = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  
    const products = [
        
       
          {
            title: "ORNAGE GRIS",
            description: "Design BY ARTEX",
            SKU:"PD001",
            imgUrl: projImg1,
            link: "/PlatDegraderD",
          }, {
            title: " BLEU ",
            description: "Design BY ARTEX",
            SKU:"PD002",
            imgUrl: projImg2,
            link: "/PlatDegraderD",
          }, {
            title: "TAUP",
            description: "Design BY ARTEX",
            SKU:"PD003",
            imgUrl: projImg3,
            link: "/PlatDegraderD",
          }, {
            title: "BORDEAUX",
            description: "Design BY ARTEX",
            SKU:"PD004",
            imgUrl: projImg4,
            link: "/PlatDegraderD",
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
                    <h2> PLAT DEGRADER</h2>
                    <p>Fouta Plat DEGRADER Du Artex – 1m x 2m</p>
<p>
Découvrez la fouta Plat DEGRADER de Du Artex Tunisie, un accessoire à la fois élégant et pratique. Son tissage plat et son design moderne en font un choix parfait pour vos moments de détente. Légère, absorbante et facile à transporter, elle est idéale pour la plage, le hammam ou à la maison.</p>
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
    
    export default PlatDegrader ;
   
    