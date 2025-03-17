 import meter1 from "../assets/img/CLASSICS.png";
 import meter2 from "../assets/img/BERBERS.png";
 import meter3 from "../assets/img/fouta png.png";
 import meter4 from "../assets/img/CHEVRONS.png";
 import meter5 from "../assets/img/DIAMONDS.png";

 import Carousel from 'react-multi-carousel';
 import 'react-multi-carousel/lib/styles.css';
 import colorSharp from "../assets/img/color-sharp.png"

 export const Skills = () => {
    const responsive = {
       
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      

   return (
     <section className="skill" id="skills">
         <div className="container">
             <div className="row">
                 <div className="col-12">
                     <div className="skill-bx wow zoomIn">
                         <h2>NOUVELLE COLLECTION</h2>
                         <p>ARTEX TUNISIE<br></br> Découvrez notre nouvelle collection de serviettes en coton biologique, alliant douceur, élégance et respect de l’environnement. Confectionnées à partir de fibres 100 % naturelles, elles offrent un confort exceptionnel tout en préservant la planète. Offrez à votre peau le meilleur avec des serviettes à la fois absorbantes, durables . </p>
                         <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                           <div className="item">
                               <img src={meter1} alt="Web Development Meter" />
                               <h5>Nid D'abeille</h5>
                           </div>
                           <div className="item">
                               <img src={meter2} alt="Brand Identity Meter" />
                               <h5>Jacquard BerBer</h5>
                           </div>
                           <div className="item">
                               <img src={meter3} alt="Logo Design Meter" />
                               <h5>Chevron</h5>
                           </div>
                           <div className="item">
                               <img src={meter5} alt="Web Development Meter" />
                               <h5>Jacquard Diamond</h5>
                           </div>
                           <div className="item">
                               <img src={meter4} alt="Web Development Meter" />
                               <h5>Chevron</h5>
                           </div>
                       </Carousel>
                     </div>
                 </div>
             </div>
         </div>
         <img className="background-image-left" src={colorSharp} alt="Decorative Background" />
         </section>
   )
 }
