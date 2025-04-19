import { useEffect } from "react";
import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProductsCard } from "./productsCard.jsx";

import projImg1 from "../assets/img/HOSSOGER/1.webp";
import projImg2 from "../assets/img/HOSSOGER/2.webp";
import projImg3 from "../assets/img/HOSSOGER/3.webp";
import projImg4 from "../assets/img/HOSSOGER/4.webp";
import projImg5 from "../assets/img/HOSSOGER/5.webp";
import projImg6 from "../assets/img/HOSSOGER/6.webp";
import projImg7 from "../assets/img/HOSSOGER/7.webp";
import projImg8 from "../assets/img/HOSSOGER/8.webp";
import projImg9 from "../assets/img/HOSSOGER/9.webp";
import projImg10 from "../assets/img/HOSSOGER/10.webp";



import "animate.css"
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';
import { Footer } from '../components/Footer.js';

 const Hossoger  = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  
    const products = [
        
        {
            title: "N°1",
            description: "Design BY ARTEX",
            SKU:"JD001",
            imgUrl: projImg1,
            link: "/HossogerD",
          },
          {
            title: "N°2",
            description: "Design BY ARTEX",
            SKU:"JD002",
            imgUrl: projImg2,
            link: "/HossogerD",
          },
          {
            title: "N°3",
            description: "Design BY ARTEX",
            SKU:"JD003",
            imgUrl: projImg3,
            link: "/HossogerD",
          },
          {
            title: "N°4",
            description: "Design BY ARTEX",
            SKU:"JD004",
            imgUrl: projImg4,
            link: "/HossogerD",
          },
          {
            title: "N°5",
            description: "Design BY ARTEX",
            SKU:"JD005",
            imgUrl: projImg5,
            link: "/HossogerD",
          },
          {
            title: "N°6",
            description: "Design BY ARTEX",
            SKU:"JD005",
            imgUrl: projImg6,
            link: "/HossogerD",
          },
           {
            title: "N°7",
            description: "Design BY ARTEX",
            SKU:"JD001",
            imgUrl: projImg7,
            link: "/HossogerD",
          },
          {
            title: "N°8",
            description: "Design BY ARTEX",
            SKU:"JD002",
            imgUrl: projImg8,
            link: "/HossogerD",
          },
          {
            title: "N°9",
            description: "Design BY ARTEX",
            SKU:"JD003",
            imgUrl: projImg9,
            link: "/HossogerD",
          },
          {
            title: "N°10",
            description: "Design BY ARTEX",
            SKU:"JD004",
            imgUrl: projImg10,
            link: "/HossogerD",
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
                    <h2>HOSSOGER</h2>
                    <p>Fouta HOSSOGER Du Artex – 1m x 2m </p>
                    <p>
                    Apportez une touche de style à vos instants de détente avec la fouta HOSSEGOR. Conçue avec 
                    soin par Du Artex Tunisie, cette fouta au tissage Jacquard séduit par son motif distinctif 
                    et son élégance naturelle.
                    Douce, absorbante et légère, elle est parfaite pour vous accompagner à la plage,
                    au hammam ou à la maison.</p>              
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
    
    export default Hossoger  ;
   
    