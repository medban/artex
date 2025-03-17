import { useEffect } from "react";
import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProductsCard } from "./productsCard.jsx";
import projImg1 from "../assets/img/jacquard/berber/blue berber.jpg";
import projImg2 from "../assets/img/jacquard/berber/blue gold berber.jpg";
import projImg3 from "../assets/img/jacquard/berber/blue orange berber.jpg";
import projImg4 from "../assets/img/jacquard/berber/orange blue berber.jpg";
import projImg5 from "../assets/img/jacquard/berber/rouge berber.jpg";
import projImg6 from "../assets/img/jacquard/berber/rouge blue berber.jpg";
import projImg12 from "../assets/img/jacquard/leaf/gray leaf.jpg";
import projImg13 from "../assets/img/jacquard/leaf/leaf gold.jpg";
import projImg14 from "../assets/img/jacquard/leaf/leaf blue.jpg";
import projImg15 from "../assets/img/jacquard/leaf/leaf red.jpg";
import projImg16 from "../assets/img/jacquard/leaf/jac orange blue.jpg";
import projImg17 from "../assets/img/jacquard/leaf/jac orange.jpg";
import projImg18 from "../assets/img/jacquard/bordeaux tortue.jpg";
import projImg19 from "../assets/img/jacquard/rouge tortue.jpg";
import projImg20 from "../assets/img/jacquard/tortie.jpg";
import projImg21 from "../assets/img/jacquard/verte tortue.jpg";
import projImg22 from "../assets/img/jacquard/caree blue.jpg";



import "animate.css"
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';
import { Footer } from '../components/Footer.js';

 const Jacquard = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  
    const products = [
        {
          title: "CLASSIC",
          description: "Design by artex",
          imgUrl: [projImg1,],
          link: "/ProductDjacquard", },
        {
          title: "JACQUARD BERBER",
          description: "Design BY ARTEX",
          imgUrl: projImg2,
          link: "/ProductDjacquard",  },
        {
          title: "JACQUARD DIAMOND",
          description: "Design BY ARTEX",
          imgUrl: projImg3,
          link: "/ProductDjacquard",  },
        {
          title: "CHAVRON ",
          description: "Design BY ARTEX",
          imgUrl: projImg4,
          link: "/ProductDjacquard",  },
        {
          title: "GRAIN DE CAFE ",
          description: "Design BY ARTEX",
          imgUrl: projImg5,
          link: "/ProductDjacquard", },
        {
          title: "UNIQUE jacquard ",
          description: "Design BY ARTEX",
          imgUrl: projImg6,
          link: "/ProductDjacquard",
        },

          {
            title: "UNIQUE jacquard ",
            description: "Design BY ARTEX",
            imgUrl: projImg12,
            link: "/ProductDjacquard",
          },
          {
            title: "UNIQUE jacquard ",
            description: "Design BY ARTEX",
            imgUrl: projImg13,
            link: "/ProductDjacquard",
          },
          {
            title: "UNIQUE jacquard ",
            description: "Design BY ARTEX",
            imgUrl: projImg14,
            link: "/ProductDjacquard",
          },
          {
            title: "UNIQUE jacquard ",
            description: "Design BY ARTEX",
            imgUrl: projImg15,
            link: "/ProductDjacquard",
          },
          {
            title: "UNIQUE jacquard ",
            description: "Design BY ARTEX",
            imgUrl: projImg16,
            link: "/ProductDjacquard",
          },
          {
            title: "UNIQUE jacquard ",
            description: "Design BY ARTEX",
            imgUrl: projImg17,
            link: "/ProductDjacquard",
          },
          {
            title: "UNIQUE jacquard ",
            description: "Design BY ARTEX",
            imgUrl: projImg18,
            link: "/ProductDjacquard",
          },
          {
            title: "UNIQUE jacquard ",
            description: "Design BY ARTEX",
            imgUrl: projImg19,
            link: "/ProductDjacquard",
          },
          {
            title: "UNIQUE jacquard ",
            description: "Design BY ARTEX",
            imgUrl: projImg20,
            link: "/ProductDjacquard",
          },
          {
            title: "UNIQUE jacquard ",
            description: "Design BY ARTEX",
            imgUrl: projImg21,
            link: "/ProductDjacquard",
          },
          {
            title: "UNIQUE jacquard ",
            description: "Design BY ARTEX",
            imgUrl: projImg22,
            link: "/ProductDjacquard",
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
                    <h2>JACQUARD </h2>
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
    
    export default Jacquard ;
   
    