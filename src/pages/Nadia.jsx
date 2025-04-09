import { useEffect } from "react";
import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProductsCard } from "./productsCard.jsx";


import projImg1 from "../assets/img/nadia/ND01.JPG";
import projImg2 from "../assets/img/nadia/ND02.JPG";
import projImg3 from "../assets/img/nadia/ND03.JPG";
import projImg4 from "../assets/img/nadia/ND04.JPG";
import projImg5 from "../assets/img/nadia/ND05.JPG";
import projImg6 from "../assets/img/nadia/ND06.JPG";
import projImg7 from "../assets/img/nadia/ND07.JPG";


import "animate.css"
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';
import { Footer } from '../components/Footer.js';

 const Nadia = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  
    const products = [
        
       
          {
            title: "NADIA°1",
            description: "Design BY ARTEX",
            SKU:"ND001",
            imgUrl: projImg1,
            link: "/NadiaD",
          }, {
            title: " NADIA°2 ",
            description: "Design BY ARTEX",
            SKU:"ND002",
            imgUrl: projImg2,
            link: "/NadiaD",
          }, {
            title: "NADIA°3",
            description: "Design BY ARTEX",
            SKU:"ND003",
            imgUrl: projImg3,
            link: "/NadiaD",
          }, {
            title: "NADIA°4",
            description: "Design BY ARTEX",
            SKU:"ND004",
            imgUrl: projImg4,
            link: "/NadiaD",
          }, {
            title: "NADIA°5",
            description: "Design BY ARTEX",
            SKU:"ND005",
            imgUrl: projImg5,
            link: "/NadiaD",
          },
          {
            title: "NADIA°6",
            description: "Design BY ARTEX",
            SKU:"ND006",
            imgUrl: projImg6,
            link: "/NadiaD",
          },
          {
            title: "NADIA°7",
            description: "Design BY ARTEX",
            SKU:"ND007",
            imgUrl: projImg7,
            link: "/NadiaD",
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
                    <h2> NADIA</h2>
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
    
    export default Nadia ;
   
    