import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

import projImg1 from "../assets/img/classic .jpg";
import projImg2 from "../assets/img/jacquard berber.jpg";
import projImg3 from "../assets/img/jacquard diamond.jpg";
import projImg4 from "../assets/img/chevron .jpg";
import projImg5 from "../assets/img/striped.jpg";
import projImg6 from "../assets/img/TISSU PLAT.jpg";
import projImg7 from "../assets/img/DAIMOND/1.JPG";

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

export const Projects = () => {

/******DATA CATAGORIE 1 ********/
  const projects = [
    {
      title: "CLASSIC",
      
      imgUrl: [projImg1,], 
      link: "/Classic",
    },
    {
      title: "JACQUARD",
      SKU : "SKU 0001",
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
      title: "TISSU PLAT",
      
      imgUrl: [projImg6], 
      link: "/tissuplat",
    },
    {
      title: "TISSU PLAT",
      
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
        title: "TISSU PLAT",
        
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
                      <Nav.Link eventKey="third">SERVIETTE</Nav.Link>
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
