import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import "../App.css"
import projImg1 from "../assets/img/classic .jpg";
import projImg2 from "../assets/img/jacquard berber.jpg";
import projImg3 from "../assets/img/jacquard diamond.jpg";
import projImg4 from "../assets/img/chevron .jpg";
import projImg5 from "../assets/img/striped.jpg";
import projImg6 from "../assets/img/TISSU PLAT.jpg";
import projImg7 from "../assets/img/DAIMOND/7.JPG";

/***** DC 2 ******/
import Img1 from "../assets/img/soi/a.JPG";
import Img2 from "../assets/img/soi/b.JPG";
import Img3 from "../assets/img/soi/c.JPG";
import Img4 from "../assets/img/soi/d.JPG";
import Img5 from "../assets/img/soi/e.JPG";
import Img6 from "../assets/img/soi/f.JPG";
import Img7 from "../assets/img/soi/j.JPG";
import Img8 from "../assets/img/soi/h.JPG";
import Img9 from "../assets/img/soi/i.JPG";
import Img10 from "../assets/img/soi/g.JPG";

/**********DC 3 ***********/
import Im1 from "../assets/img/soi/TUNIQUE/T.JPG";
import Im2 from "../assets/img/soi/TUNIQUE/T1.JPG";
import Im3 from "../assets/img/soi/TUNIQUE/T2.JPG";
import Im4 from "../assets/img/soi/TUNIQUE/T3.JPG";
import Im5 from "../assets/img/soi/TUNIQUE/T4.JPG";
import Im6 from "../assets/img/soi/TUNIQUE/T5.JPG";
import Im7 from "../assets/img/soi/TUNIQUE/T6.JPG";
import Im8 from "../assets/img/soi/TUNIQUE/T7.JPG";

/********DC 4  **************/
import ImE1 from "../assets/img/pack/servietteblanche.webp";
import ImE2 from "../assets/img/pack/serviettebleuciel.webp";
import ImE3 from "../assets/img/pack/serviettebleumarine.webp";
import ImE4 from "../assets/img/pack/serviettegrise.webp";
import ImE5 from "../assets/img/pack/servietteoranger.webp";
import ImE6 from "../assets/img/pack/servietteturquoise.webp";
import ImE7 from "../assets/img/pack/servietteverte.webp";
import ImE8 from "../assets/img/pack/servietteverteforet.webp";

/************dc 5 *********** */
import Imj1 from "../assets/img/DAIMOND/1.JPG";
import Imj2 from "../assets/img/DAIMOND/2.JPG";
import Imj3 from "../assets/img/DAIMOND/3.JPG";
import Imj4 from "../assets/img/DAIMOND/4.JPG";
import Imj5 from "../assets/img/DAIMOND/5.JPG";
import Imj6 from "../assets/img/DAIMOND/6.JPG";
import Imj7 from "../assets/img/jeter/XXL-1-1.jpg";
import Imj8 from "../assets/img/jeter/XXL-10-2.jpg";
import Imj9 from "../assets/img/jeter/XXL-15.jpg";
import Imj10 from "../assets/img/jeter/XXL-16-1.jpg";
import Imj11 from "../assets/img/jeter/XXL-2.jpg";
import Imj12 from "../assets/img/jeter/XXL-3.jpg";
import Imj13 from "../assets/img/jeter/XXL-4-.jpg";
import Imj14 from "../assets/img/jeter/XXL-5.jpg";
import Imj15 from "../assets/img/jeter/XXL-7.jpg";

export const Projects = () => {

/******DATA CATAGORIE 1 ********/
  const projects = [
    {
      title: "NID D'ABEILLLE",
      
      imgUrl: [projImg1,], 
      link: "/Classic",
    },
    {
      title: "JACQUARD",
   
      imgUrl: [projImg2], 
      link: "/Jacquard",
    },
    {
      title: "JACQUARD DIAMOND",
      
      imgUrl: [projImg3], 
      link: "/JacquardDiamond",
    },
    {
      title: "CHEVRON",
      
      imgUrl: [projImg4], 
      link: "/Chevron",
    },
    {
      title: "GRAIN DE CAFE",
      
      imgUrl: [projImg5], 
      link: "/grainDecafe",
    },
    {
      title: "FOUTA CLASSIC",
      
      imgUrl: [projImg6], 
      link: "/tissuplat",
    },
    {
      title: "DIAMOND",
      
      imgUrl: [projImg7], 
      link: "/Diamond",
    },
  ];
  /******DATA 2 echarpe ********/
  const projects2 = [
    {
      title: "BLUE",
      
      imgUrl: [Img1,], 
      link: "/Echarpe",
    },
    {
      title: "PINK",
      
      imgUrl: [Img2], 
      link: "/Echarpe",
    },
    {
      title: "BIEGE",
      
      imgUrl: [Img3], 
      link: "/Echarpe ",
    },
    {
      title: "GREEN",
      
      imgUrl: [Img4], 
      link: "/Echarpe",
    },
    {
      title: "DRAK BLUE",
      
      imgUrl: [Img5], 
      link: "/Echarpe",
    },
    {
      title: "PISTASHIO",
      
      imgUrl: [Img6], 
      link: "/Echarpe",
    },
    {
      title: "PISTASHIO",
      
      imgUrl: [Img7], 
      link: "/Echarpe",
    },
    {
      title: "PISTASHIO",
      
      imgUrl: [Img8], 
      link: "/Echarpe",
    },
    {
      title: "PISTASHIO",
      
      imgUrl: [Img9], 
      link: "/Echarpe",
    },
    {
      title: "PISTASHIO",
      
      imgUrl: [Img10], 
      link: "/Echarpe",
    },
    /******** DATA 3 TUNIQUE */
  ];
    const projects3 = [
      {
        title: "ROBE",
        SKU: "sku 001",
        imgUrl: [Im8], 
        link: "/Tunique",
      },
      {
        title: "ROBE",
        SKU: "sku 002",
        imgUrl: [Im7], 
        link: "/Tunique",
      },
      {
        title: "robe",
        SKU: "sku 003",
        imgUrl: [Im6], 
        link: "/Tunique",
      },
      {
        title: "panier",
        SKU: "sku 004",
        imgUrl: [Im4], 
        link: "/Kofa",
      },
      {
        title: "GRAIN DE CAFE",
        
        imgUrl: [Im5], 
        link: "/Kofa",
      },
      {
        title: "FOUTA CLASSIC",
        
        imgUrl: [Im3], 
        link: "/Kofa",
      },
      {
        title: "TISSU PLAT",
        
        imgUrl: [Im2], 
        link: "/Kofa",
      },
      {
        title: "TISSU PLAT",
        
        imgUrl: [Im1], 
        link: "/Kofa",
      },
    ];
    /******dc4 ******/
    const projects4 = [
      {
        title: "ECRU",
       
        
        imgUrl: ImE1,
        link: "/Packs",
  
      },
      {
        title: "BLEU CANARD",
       
        imgUrl: ImE2,
        link: "/Packs",

      },
      {
        title: "BLEU MARINE",
       
        imgUrl: ImE3,
        link: "/Packs",

  
      },
     
      {
        title: "GRIS",
        
        imgUrl: ImE4,
        link: "/Packs",

  
      },
      {
        title: "ORANGE",
        
        imgUrl: ImE5,
        link: "/Packs",

  
      },
      {
        title: "BLEU TURQUOISE",
        
        imgUrl: ImE6,
        link: "/Packs",

  
      },
      {
        title: "GRIS CHARBON",
        
        imgUrl: ImE7,
        link: "/Packs",

  
      },
      {
        title: "VERTE FORET",
        
        imgUrl: ImE8,
        link: "/Packs",

  
      },
    ]
    const projects5 = [
      {
        title: "BLUE",
        
        imgUrl: [Imj1,], 
        link: "/Jeters",
      },
      {
        title: "PINK",
        
        imgUrl: [Imj2], 
        link: "/Jeters",
      },
      {
        title: "BIEGE",
        
        imgUrl: [Imj3], 
        link: "/Jeters ",
      },
      {
        title: "GREEN",
        
        imgUrl: [Imj4], 
        link: "/Jeters",
      },
      {
        title: "DRAK BLUE",
        
        imgUrl: [Imj5], 
        link: "/Jeters",
      },
      {
        title: "PISTASHIO",
        
        imgUrl: [Imj6], 
        link: "/Jeters",
      },
      {
        title: "GRIS CHARBON",
       
        imgUrl: Imj7,
        link: "/Jeters",

  
      },
      {
        title: "VERTE FORET",
       
        imgUrl: Imj8,
        link: "/Jeters",

  
      },
      {
        title: "VERTE FORET",
       
        imgUrl: Imj9,
        link: "/Jeters",

  
      },
      {
        title: "VERTE FORET",
       
        imgUrl: Imj10,
        link: "/Jeters",

  
      },
      {
        title: "VERTE FORET",
       
        imgUrl: Imj11,
        link: "/Jeters",

  
      },
      {
        title: "VERTE FORET",
       
        imgUrl: Imj12,
        link: "/Jeters",

  
      },
      {
        title: "VERTE FORET",
       
        imgUrl: Imj13,
        link: "/Jeters",

  
      },
      {
        title: "VERTE FORET",
       
        imgUrl: Imj14,
        link: "/Jeters",

  
      },
      {
        title: "VERTE FORET",
       
        imgUrl: Imj15,
        link: "/Jeters",

  
      },
    ]

  return (
    <section className="project" id="project" >
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Categorie </h2>
                <p>Le tissage du coton est un processus de fabrication textile où les fils de coton sont entrelacés pour créer un tissu. Il existe plusieurs types de tissage, chacun offrant des caractéristiques différentes en termes de texture</p>
                <Tab.Container  defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">TUNIQUE</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">ECHARPE</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">FOUTA </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="FOR">JETER</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="FIF">PACK</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                                
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>                   
                       </Tab.Pane>

                    <Tab.Pane eventKey="first">
                    <Row>
                        {
                          projects3.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                   </Tab.Pane>

                   <Tab.Pane eventKey="FOR">
                    <Row>
                        {
                          projects5.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                   </Tab.Pane>

                   <Tab.Pane eventKey="FIF">
                    <Row>
                        {
                          projects4.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
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
  )
}
