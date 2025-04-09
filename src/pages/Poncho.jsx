import { useEffect } from "react";
import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProductsCard } from "./productsCard.jsx";


import projImg1 from "../assets/img/PONCHO/PON001.JPG";
import projImg2 from "../assets/img/PONCHO/PON002.JPG";
import projImg3 from "../assets/img/PONCHO/PON003.JPG";
import projImg4 from "../assets/img/PONCHO/PON004.JPG";



import "animate.css"
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';
import { Footer } from '../components/Footer.js';

 const Poncho = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  
    const products = [
        
       
          {
            title: "PONCHO",
            description: "Design BY ARTEX",
            SKU:"PON001",
            imgUrl: projImg1,
            link: "/PonchoD",
          }, {
            title: " PONCHO ",
            description: "Design BY ARTEX",
            SKU:"PON002",
            imgUrl: projImg2,
            link: "/PonchoD",
          }, {
            title: "PONCHO",
            description: "Design BY ARTEX",
            SKU:"PON003",
            imgUrl: projImg3,
            link: "/PonchoD",
          }, {
            title: "PONCHO",
            description: "Design BY ARTEX",
            SKU:"PON004",
            imgUrl: projImg4,
            link: "/PonchoD",
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
                    <h2> PONCHO</h2>
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
    
    export default Poncho ;
   
    