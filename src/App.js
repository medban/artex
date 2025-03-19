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
/********product details pages **********/
import ProductDstripe from "./pageDetails/productDstripe.jsx";
import ProductDecharpe from "./pageDetails/productDecharpe.jsx";
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
      </Routes>
      <ScrollToTopArrow/>
    </div>
  );
}

export default App;
