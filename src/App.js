import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import {Skills} from "./components/Skills";
import About from "./components/About.jsx"
import ScrollToTopArrow from "./components/Arrow.jsx"
// pages*************

import Jacquard from "./pages/Jaccquard.jsx";
import Classic from "./pages/Classic";
import TissuPlat from "./pages/TissuPlat";
import JacquardDiamond from "./pages/JacquardDiamond.jsx";
import Chevron from "./pages/Chevron.jsx";
import GrainDecafe from "./pages/Stripe.jsx";
import Echarpe from "./pages/Echarpe.jsx";
import Diamond from "./pages/Diamond.jsx";
import Packs from "./pages/Pack.jsx";
import Jeters from "./pages/Jeter.jsx";
import Nidabeille from "./pages/Nidabeille.jsx";
import Arcachon from "./pages/Arcachon.jsx";
import Artex from "./pages/Artex.jsx";
import Nadia from "./pages/Nadia.jsx";
import Mykonos from "./pages/Mykonos.jsx";
import Stbarth from "./pages/Stbarth.jsx";
import TwidPlat from "./pages/TwidPlat.jsx";
import PlatDegrader from "./pages/PlatDegrader.jsx";
import Poncho from "./pages/Poncho.jsx";

/********product details pages **********/
import ProductDstripe from "./pageDetails/productDstripe.jsx";
import ProductDecharpe from "./pageDetails/productDecharpe1.jsx";
import ProductDclassic from "./pageDetails/productDclassic.jsx";
import ProductDchevron from "./pageDetails/productDchevron.jsx";
import ProductDjacquard from "./pageDetails/productDjacquard.jsx";
import ProductDjacquardDiamond from "./pageDetails/productDjacquarddiamond.jsx";
import ProductDtissuplat from "./pageDetails/productDtissuplat.jsx";
import Kofa from "./pageDetails/Kofa.jsx"
import Tunique from "./pageDetails/Tunique.jsx";
import DiamondCotton from "./pageDetails/DiamondCotton.jsx";
import Pack from "./pageDetails/Pack.jsx"
import Jeter from "./pageDetails/Jeter.jsx";
import ProductDNidabeille from "./pageDetails/productDNidabeille.jsx";
import ArcachonDET from "./pageDetails/ArcachonDET.jsx";
import ArtexDet from "./pageDetails/ArtexDet.jsx";
import NadiaD from "./pageDetails/NadiaD.jsx";
import MykonosD from "./pageDetails/MykonosD.jsx";
import StbarthD from "./pageDetails/StbarthD.jsx"
import TwidPlatD from "./pageDetails/TwidPlatD.jsx";
import PlatDegraderD from "./pageDetails/PlatDegraderD.jsx";
import PonchoD from "./pageDetails/PonchoD.jsx"

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<>
          <Banner />
         
          <Skills/>
          <Projects />
          <About/>
          <Contact />
          <Footer />
        </>} />
      
        <Route path="/Jacquard" element={<Jacquard />} />
        <Route path="/Classic" element={<Classic />} />
        <Route path="/tissuplat" element={<TissuPlat />} />
        <Route path="/JacquardDiamond" element={<JacquardDiamond />} />
        <Route path="/Chevron" element={<Chevron />} />
        <Route path="/grainDecafe" element={<GrainDecafe/>} />
        <Route path="/Echarpe" element={<Echarpe/>}/>
        <Route path="/Diamond" element={<Diamond/>}/>
        <Route path="/Packs" element={<Packs/>}/>
        <Route path="/Jeters" element={<Jeters/>}/>
        <Route path="/Nidabeille" element={<Nidabeille/>}/>
        <Route path="/Arcachon" element={<Arcachon/>}/>
        <Route path="/Artex" element={<Artex/>}/>
        <Route path="/Nadia" element={<Nadia/>}/>
        <Route path="/Mykonos" element={<Mykonos/>}/>
       <Route path="/Stbarth" element={<Stbarth/>}/>
       <Route path="/TwidPlat" element={<TwidPlat/>}/>
       <Route path="/PlatDegrader" element={<PlatDegrader/>}/>
       <Route path="/Poncho" element={<Poncho/>}/>

        <Route path="/ProductDecharpe" element={<ProductDecharpe/>}/>
        <Route path="/ProductDstripe" element={<ProductDstripe/>}/>
        <Route path="/ProductDclassic" element={<ProductDclassic/>}/>
        <Route path="/productDchevron" element={<ProductDchevron/>}/>
        <Route path="/ProductDjacquard" element={<ProductDjacquard/>}/>
        <Route path="/ProductDjacquardDiamond" element={<ProductDjacquardDiamond/>}/>
        <Route path="/ProductDtissuplat" element={<ProductDtissuplat/>}/>
        <Route path="/Kofa" element={<Kofa/>}/>
        <Route path="/Tunique" element={<Tunique/>}/>
        <Route path="/DiamondCotton" element={<DiamondCotton/>}/>
        <Route path="/Pack" element={<Pack/>}/>
        <Route path="/Jeter" element={<Jeter/>}/>
        <Route path="/ProductDNidabeille" element={<ProductDNidabeille/>}/>
        <Route path="/ArcachonDET" element={<ArcachonDET/>}/>
        <Route path="/ArtexDet" element={<ArtexDet/>}/>
        <Route path="/NadiaD" element={<NadiaD/>}/>
        <Route path="/MykonosD" element={<MykonosD/>}/>
        <Route path="/StbarthD" element={<StbarthD/>}/>
        <Route path="/TwidPlatD" element={<TwidPlatD/>}/>
        <Route path="/PlatDegraderD" element={<PlatDegraderD/>}/>
       <Route path="/PonchoD" element={<PonchoD/>}/>
     
      </Routes>
      <ScrollToTopArrow/>
    </div>
  );
}

export default App;
