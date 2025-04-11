import { useState, useEffect } from "react";
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
import projImg9 from "../assets/img/DAIMOND/7.JPG";
import projImg8 from "../assets/img/nid beille classic/blueartex.JPG";
import projImg7 from "../assets/img/BORABORA/1.jpg";
import projImg10 from "../assets/img/arcachon/ar1.JPG";
import projImg11 from "../assets/img/artex/ART03.JPG";
import projImg12 from "../assets/img/nadia/ND01.JPG";
import projImg13 from "../assets/img/mykonos/MK001.JPG";
import projImg14 from "../assets/img/st barth/ST002.JPG";
import projImg15 from "../assets/img/twid plat/TW001.JPG";
import projImg16 from "../assets/img/PLAT DEGRADER/PD002.JPG"

/***** DC 2 ******/


import Img1 from "../assets/img/E1.jpg";
import Img2 from "../assets/img/E2.jpg";
import Img3 from "../assets/img/E3.jpg";
import Img4 from "../assets/img/E4.jpg";
import Img5 from "../assets/img/E5.jpg";
import Img6 from "../assets/img/E6.jpg";
import Img7 from "../assets/img/soi/_MG_9061.JPG";
import Img8 from "../assets/img/soi/_MG_9088.JPG";
import Img9 from "../assets/img/soi/_MG_9115.JPG";
import Img10 from "../assets/img/soi/_MG_9152.JPG";
import Img11 from "../assets/img/soi/_MG_9192.JPG";
import Img12 from "../assets/img/soi/_MG_9219.JPG";
import Img13 from "../assets/img/soi/_MG_9232.JPG";

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

/********poncho *********** */

import ponImg1 from "../assets/img/PONCHO/PON001.JPG";
import ponImg2 from "../assets/img/PONCHO/PON002.JPG";
import ponImg3 from "../assets/img/PONCHO/PON003.JPG";
import ponImg4 from "../assets/img/PONCHO/PON004.JPG";



export const Projects = () => {
  const [activeTab, setActiveTab] = useState("first");

 
  useEffect(() => {
    const savedTab = sessionStorage.getItem("activeTab");
    if (savedTab) {
      setActiveTab(savedTab);
    }
  }, []);

 
  const handleTabSelect = (selectedKey) => {
    setActiveTab(selectedKey);
    sessionStorage.setItem("activeTab", selectedKey);
  };


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
      title: "BORABORA",
      
      imgUrl: [projImg7], 
      link: "/Borabora",
    },
    {
      title: "NID D'ABEILLLE JENNY",
      
      imgUrl: [projImg8], 
      link: "/Nidabeille",
    },
    {
      title: "DIAMOND",
      
      imgUrl: [projImg9], 
      link: "/Diamond",
    },
    {
      title: "ARCACHON",
      
      imgUrl: [projImg10], 
      link: "/Arcachon",
    },
    {
      title: "ARTEX",
      
      imgUrl: [projImg11], 
      link: "/Artex",
    },
    {
      title: "NADIA",
      
      imgUrl: [projImg12], 
      link: "/Nadia",
    },
    {
      title: "MYKONOS",
      
      imgUrl: [projImg13], 
      link: "/Mykonos",
    },
    {
      title: "SAINT BARTH",
      
      imgUrl: [projImg14], 
      link: "/Stbarth",
    },
    {
      title: "TWID PLAT",
      
      imgUrl: [projImg15], 
      link: "/TwidPlat",
    },
    {
      title: " DEGRADE",
      
      imgUrl: [projImg16], 
      link: "/PlatDegrader",
    },
  ];
  /******DATA 2 echarpe ********/
  const projects2 = [
    {
      title: "",
      SKU:"sku ES001",
      imgUrl: [Img1,], 
      link: "/Echarpe",
    },
    {
      title: "",
      SKU:"sku ES002",
      imgUrl: [Img2], 
      link: "/Echarpe",
    },
    {
      title: "",
      SKU:"sku ES003",
      imgUrl: [Img3], 
      link: "/Echarpe ",
    },
    {
      title: "",
      SKU:"sku ES004",
      imgUrl: [Img4], 
      link: "/Echarpe",
    },
    {
      title: "",
      SKU:"sku ES005",
      imgUrl: [Img5], 
      link: "/Echarpe",
    },
    {
      title: "",
      SKU:"sku ES006",
      imgUrl: [Img6], 
      link: "/Echarpe",
    },
    {
      title: "",
      SKU:"sku ES007",
      imgUrl: [Img7], 
      link: "/Echarpe",
    },
    {
      title: "",
      SKU:"sku ES008",
      imgUrl: [Img8], 
      link: "/Echarpe",
    },
    {
      title: "",
      SKU:"sku ES009",
      imgUrl: [Img9], 
      link: "/Echarpe",
    },
    {
      title: "",
      SKU:"sku ES010",
      imgUrl: [Img10], 
      link: "/Echarpe",
    },
    {
      title: "",
      SKU:"sku ES011",
      imgUrl: [Img11], 
      link: "/Echarpe",
    },
    {
      title: "",
      SKU:"sku ES012",
      imgUrl: [Img12], 
      link: "/Echarpe",
    },
    {
      title: "",
      SKU:"sku ES013",
      imgUrl: [Img13], 
      link: "/Echarpe",
    },
    /******** DATA 3 TUNIQUE */
  ];
    const projects3 = [
      {
        title: "TUNIQUE N°1",
        SKU: "sku R001",
        imgUrl: [Im8], 
        link: "/Tunique",
      },
      {
        title: "TUNIQUE N°2",
        SKU: "sku R002",
        imgUrl: [Im7], 
        link: "/Tunique",
      },
      {
        title: "TUNIQUE N°3",
        SKU: "sku R003",
        imgUrl: [Im6], 
        link: "/Tunique",
      },
      {
        title: "panier N°1",
        SKU: "sku KF001",
        imgUrl: [Im4], 
        link: "/Kofa",
      },
      {
        title: "panier N°2",
        SKU: "sku KF002",
        imgUrl: [Im5], 
        link: "/Kofa",
      },
      {
        title: "panier N°3",
        SKU: "sku KF003",
        imgUrl: [Im3], 
        link: "/Kofa",
      },
      {
        title: "panier N°4",
        SKU: "sku KF004",
        imgUrl: [Im2], 
        link: "/Kofa",
      },
      {
        title: "panier N°5",
        SKU: "sku KF005",
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
        title: "DIAMOND GRIS",
        
        imgUrl: [Imj1,], 
        link: "/Jeters",
      },
      {
        title: "DIAMOND BORDEAUX",
        
        imgUrl: [Imj2], 
        link: "/Jeters",
      },
      {
        title: "DIAMOND VIOLET",
        
        imgUrl: [Imj3], 
        link: "/Jeters ",
      },
      {
        title: "DIAMOND JAUNE MOUTARDE",
        
        imgUrl: [Imj4], 
        link: "/Jeters",
      },
      {
        title: " DIAMOND GRIS CHARBON",
        
        imgUrl: [Imj5], 
        link: "/Jeters",
      },
      {
        title: "DIAMOND ORANGE",
        
        imgUrl: [Imj6], 
        link: "/Jeters",
      },
      {
        title: "ARTHUR N°1",
       
        imgUrl: Imj7,
        link: "/Jeters",

  
      },
      {
        title: "ARTHUR N°2",
       
        imgUrl: Imj8,
        link: "/Jeters",

  
      },
      {
        title: "ARTHUR N°3",
       
        imgUrl: Imj9,
        link: "/Jeters",

  
      },
      {
        title: "ARTHUR N°4",
       
        imgUrl: Imj10,
        link: "/Jeters",

  
      },
      {
        title: "DIAMOND 2/3",
       
        imgUrl: Imj11,
        link: "/Jeters",

  
      },
      {
        title: "DIAMOND 2/3",
       
        imgUrl: Imj12,
        link: "/Jeters",

  
      },
      {
        title: "ARTHUR N°5",
       
        imgUrl: Imj13,
        link: "/Jeters",

  
      },
      {
        title: "UNI 2/3",
       
        imgUrl: Imj14,
        link: "/Jeters",

  
      },
      {
        title: "ARTHUR N°6",
       
        imgUrl: Imj15,
        link: "/Jeters",

  
      },
    ]
    const projects6 = [
      {
        title: "N°1",
        
        imgUrl: [ponImg1,], 
        link: "/Poncho",
      },
      {
        title: "N°2",
        
        imgUrl: [ponImg2], 
        link: "/Poncho",
      },
      {
        title: "N°3",
        
        imgUrl: [ponImg3], 
        link: "/Poncho ",
      },
      {
        title: "N°4",
        
        imgUrl: [ponImg4], 
        link: "/Poncho",
      },
   
    ]
    return (
      <section className="project" id="project">
        <Container>
          <Row>
            <Col size={12}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <h2>Categorie</h2>
                    <p>Le tissage du coton est un processus de fabrication textile où les fils de coton sont entrelacés pour créer un tissu...</p>
                    <Tab.Container activeKey={activeTab} onSelect={handleTabSelect}>
                      <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item>
                          <Nav.Link eventKey="first">FOUTA</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="third">TUNIQUE</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second">ECHARPE</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="FOR">JETER</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="FIF">PACK</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="six">PONCHO</Nav.Link>
                        </Nav.Item>
                      </Nav>
  
                      <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                        <Tab.Pane eventKey="first">
                          <Row>
                            {projects.map((project, index) => (
                              <ProjectCard key={index} {...project} />
                            ))}
                          </Row>
                        </Tab.Pane>
  
                        <Tab.Pane eventKey="second">
                          <Row>
                            {projects2.map((project, index) => (
                              <ProjectCard key={index} {...project} />
                            ))}
                          </Row>
                        </Tab.Pane>
  
                        <Tab.Pane eventKey="third">
                          <Row>
                            {projects3.map((project, index) => (
                              <ProjectCard key={index} {...project} />
                            ))}
                          </Row>
                        </Tab.Pane>
  
                        <Tab.Pane eventKey="FOR">
                          <Row>
                            {projects5.map((project, index) => (
                              <ProjectCard key={index} {...project} />
                            ))}
                          </Row>
                        </Tab.Pane>
  
                        <Tab.Pane eventKey="FIF">
                          <Row>
                            {projects4.map((project, index) => (
                              <ProjectCard key={index} {...project} />
                            ))}
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="six">
                          <Row>
                            {projects6.map((project, index) => (
                              <ProjectCard key={index} {...project} />
                            ))}
                          </Row>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </div>
                )}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
  
        <img className="background-image-right" src={colorSharp2} alt="Background design" />
      </section>
    );
  };
  
