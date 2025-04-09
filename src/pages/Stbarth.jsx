
import { useEffect } from "react";
import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProductsCard } from "./productsCard.jsx";


 import projImg1 from "../assets/img/st barth/ST001.JPG";
 import projImg2 from "../assets/img/st barth/ST002.JPG";
 import projImg3 from "../assets/img/st barth/ST003.JPG";
 import projImg4 from "../assets/img/st barth/ST004.JPG";
 import projImg5 from "../assets/img/st barth/ST005.JPG";


import "animate.css"
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';
import { Footer } from '../components/Footer.js';

 const Stbarth = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  
    const products = [
        
       
          {
            title: "ROUGE",
            description: "Design BY ARTEX",
            SKU:"ST001",
            imgUrl: projImg1,
            link: "/StbarthD",
          }, {
            title: " BLEU MARINE",
            description: "Design BY ARTEX",
            SKU:"ST002",
            imgUrl: projImg2,
            link: "/StbarthD",
          }, {
            title: "TURQOISE",
            description: "Design BY ARTEX",
            SKU:"ST003",
            imgUrl: projImg3,
            link: "/StbarthD",
          }, {
            title: "BLEU ORAGE",
            description: "Design BY ARTEX",
            SKU:"ST004",
            imgUrl: projImg4,
            link: "/StbarthD",
          }, {
            title: "VERTE KAKI",
            description: "Design BY ARTEX",
            SKU:"ST005",
            imgUrl: projImg5,
            link: "/StbarthD",
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
                    <h2> SAINT BARTH</h2>
                    <p>Fouta Saint Barth Du Artex – 1m x 2m </p>
                    <p>

Évadez-vous sous les tropiques avec la fouta Saint Barth de Du Artex Tunisie. Son motif élégant et sa texture douce apportent un air de vacances à chaque utilisation. Légère, absorbante et rapide à sécher, elle est parfaite pour la plage, le hammam ou chez vous.</p>
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
    
    export default Stbarth ;
   
    