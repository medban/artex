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
          title: "BLEU GRIS",
          description: "Design by artex",
         
        SKU :"J001",
          imgUrl: [projImg1,],
          link: "/ProductDjacquard", },
        {
          title: "VERTE JAUNE",
          description: "Design BY ARTEX",
         
        SKU :"J002",
          imgUrl: projImg2,
          link: "/ProductDjacquard",  },
        {
          title: " BLEU ORANGE",
          description: "Design BY ARTEX",
         
        SKU :"J003",
          imgUrl: projImg3,
          link: "/ProductDjacquard",  },
        {
          title: "ORANGE BLEU ",
          description: "Design BY ARTEX",
         
        SKU :"J004",
          imgUrl: projImg4,
          link: "/ProductDjacquard",  },
        {
          title: "ROUGE GRIS ",
          description: "Design BY ARTEX",
         
        SKU :"J005",
          imgUrl: projImg5,
          link: "/ProductDjacquard", },
        {
          title: "ROUGE BLEU ",
          description: "Design BY ARTEX",
         
        SKU :"J006",
          imgUrl: projImg6,
          link: "/ProductDjacquard",
        },

          {
            title: "GRIS ",
            description: "Design BY ARTEX",
                  SKU :"J007",

            imgUrl: projImg12,
            link: "/ProductDjacquard",
          },
          {
            title: "JAUNE MOTARD",
            description: "Design BY ARTEX",
                  SKU :"J008",

            imgUrl: projImg13,
            link: "/ProductDjacquard",
          },
          {
            title: "BLEU TURQUOISE",
            description: "Design BY ARTEX",
                  SKU :"J009",

            imgUrl: projImg14,
            link: "/ProductDjacquard",
          },
          {
            title: "ROUGE",
            description: "Design BY ARTEX",
                  SKU :"J010",

            imgUrl: projImg15,
            link: "/ProductDjacquard",
          },
          {
            title: "BLEU ORANGE",
            description: "Design BY ARTEX",
                  SKU :"J011",

            imgUrl: projImg16,
            link: "/ProductDjacquard",
          },
          {
            title: "ORANGE ",
            description: "Design BY ARTEX",
                  SKU :"J012",

            imgUrl: projImg17,
            link: "/ProductDjacquard",
          },
          {
            title: "BORDEAUX",
            description: "Design BY ARTEX",
                  SKU :"J013",

            imgUrl: projImg18,
            link: "/ProductDjacquard",
          },
          {
            title: "ROUGE CORAIL",
            description: "Design BY ARTEX",
                  SKU :"J014",

            imgUrl: projImg19,
            link: "/ProductDjacquard",
          },
          {
            title: "BLEU MARINE",
            description: "Design BY ARTEX",
                  SKU :"J015",

            imgUrl: projImg20,
            link: "/ProductDjacquard",
          },
          {
            title: "VERTE KAKI",
            description: "Design BY ARTEX",
                  SKU :"J016",

            imgUrl: projImg21,
            link: "/ProductDjacquard",
          },
          {
            title: "BLEU DJEAN ",
            description: "Design BY ARTEX",
                  SKU :"J017",

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
   
    