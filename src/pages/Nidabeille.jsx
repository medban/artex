import { useEffect } from "react";
import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProductsCard } from "./productsCard.jsx";
import projImg1 from "../assets/img/nid beille classic/beige.JPG";
import projImg2 from "../assets/img/nid beille classic/blanche.JPG";
import projImg3 from "../assets/img/nid beille classic/bleubalnche.JPG";
import projImg4 from "../assets/img/nid beille classic/bleuciel.JPG";
import projImg5 from "../assets/img/nid beille classic/bleugris.JPG";
import projImg6 from "../assets/img/nid beille classic/bleumarine.JPG";
import projImg12 from "../assets/img/nid beille classic/blue.JPG";
import projImg13 from "../assets/img/nid beille classic/blueartex.JPG";
import projImg14 from "../assets/img/nid beille classic/forestgreen.JPG";
import projImg15 from "../assets/img/nid beille classic/gris.JPG";
import projImg16 from "../assets/img/nid beille classic/grisorange.JPG";
import projImg17 from "../assets/img/nid beille classic/jaune.JPG";
import projImg18 from "../assets/img/nid beille classic/jaunemaron.JPG";
import projImg19 from "../assets/img/nid beille classic/orange.JPG";
import projImg20 from "../assets/img/nid beille classic/rose.JPG";
import projImg22 from "../assets/img/nid beille classic/rosebleu.JPG";
import projImg23 from "../assets/img/nid beille classic/turquoise.JPG";
import projImg24 from "../assets/img/nid beille classic/violet.JPG";



import "animate.css"
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';
import { Footer } from '../components/Footer.js';

 const Nidabeille = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  
    const products = [
        {
          title: "TAUP",
          description: "Design by artex",
         
         SKU :"NIDB001",
          imgUrl: [projImg1,],
          link: "/ProductDNidabeille", },
        {
          title: "BLANCO",
          description: "Design BY ARTEX",
         
        SKU :"NIDB002",
          imgUrl: projImg2,
          link: "/ProductDNidabeille",  },
        {
          title: "TURQUOISE",
          description: "Design BY ARTEX",
         
        SKU :"NIDB003",
          imgUrl: projImg3,
          link: "/ProductDNidabeille",  },
        {
          title: "BLEU CANARD",
          description: "Design BY ARTEX",
         
        SKU :"NIDB004",
          imgUrl: projImg4,
          link: "/ProductDNidabeille",  },
        {
          title: "GRIS BLEU",
          description: "Design BY ARTEX",
         
        SKU :"NIDB005",
          imgUrl: projImg5,
          link: "/ProductDNidabeille", },
        {
          title: "BLEU MARINE",
          description: "Design BY ARTEX",
         
        SKU :"NIDB006",
          imgUrl: projImg6,
          link: "/ProductDNidabeille",
        },

          {
            title: "VERTE D'EAU ",
            description: "Design BY ARTEX",
                  SKU :"NIDB007",

            imgUrl: projImg12,
            link: "/ProductDNidabeille",
          },
          {
            title: "BLEU OR",
            description: "Design BY ARTEX",
                  SKU :"NIDB008",

            imgUrl: projImg13,
            link: "/ProductDNidabeille",
          },
          {
            title: "MARON",
            description: "Design BY ARTEX",
                  SKU :"NIDB009",

            imgUrl: projImg14,
            link: "/ProductDNidabeille",
          },
          {
            title: "GRIS MOYEN",
            description: "Design BY ARTEX",
                  SKU :"NIDB010",

            imgUrl: projImg15,
            link: "/ProductDNidabeille",
          },
          {
            title: "GRIS ORANGE",
            description: "Design BY ARTEX",
                  SKU :"NIDB011",

            imgUrl: projImg16,
            link: "/ProductDNidabeille",
          },
          {
            title: "JAUNE GRIS ",
            description: "Design BY ARTEX",
                  SKU :"NIDB012",

            imgUrl: projImg17,
            link: "/ProductDNidabeille",
          },
          {
            title: "TAUP JAUNE",
            description: "Design BY ARTEX",
                  SKU :"NIDB013",

            imgUrl: projImg18,
            link: "/ProductDNidabeille",
          },
          {
            title: "ORANGE",
            description: "Design BY ARTEX",
                  SKU :"NIDB014",

            imgUrl: projImg19,
            link: "/ProductDNidabeille",
          },
          {
            title: "ROSE FUSHIA",
            description: "Design BY ARTEX",
                  SKU :"NIDB015",

            imgUrl: projImg20,
            link: "/ProductDNidabeille",
          },
         
          {
            title: "FUCHSIA MARINE",
            description: "Design BY ARTEX",
                  SKU :"NIDB016",

            imgUrl: projImg22,
            link: "/ProductDNidabeille",
          },
          {
            title: "TURQUOISE ",
            description: "Design BY ARTEX",
                  SKU :"NIDB017",

            imgUrl: projImg23,
            link: "/ProductDNidabeille",
          }, {
            title: "VIOLET ",
            description: "Design BY ARTEX",
                  SKU :"NIDB018",

            imgUrl: projImg24,
            link: "/ProductDNidabeille",
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
                    <h2>NID D'ABEILLE. JENNY </h2>
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
    
    export default Nidabeille ;
   
    