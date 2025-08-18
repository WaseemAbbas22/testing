import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About"; // Assuming you have an About page
import "./App.css"; // Assuming you have some global styles
import Documents from "./pages/Documents";
import Contact from "./pages/Contact"; // Assuming you have a Contact page
import BlogsPage from "./pages/Blogs"; // Assuming you have a Blogs page
import Pests from "./pages/Pests"; // Assuming you have a Pests page
import Sectors from "./pages/Sectors"; // Assuming you have a Sectors page
import Careers from "./pages/Careers";

import Rodent from "@/components/Pests/Rodent/Rodent";
import HouseMouse from "@/components/Pests/Rodent/housemouse";
import RoofRat from "@/components/Pests/Rodent/roofrat";
import BandicootRat from "@/components/Pests/Rodent/bandicootrat";
import NorwayRat from "@/components/Pests/Rodent/norwayrat";

import Spider from "@/components/Pests/Spider/Spider";
import HouseSpider from "@/components/Pests/Spider/house";
import JumpingSpider from "@/components/Pests/Spider/jumping";
import BlackWidowSpider from "@/components/Pests/Spider/widow";


import Lizard from "@/components/Pests/Lizard/Lizard";
import HouseGecko from "./components/Pests/Lizard/houseGecko";
import MedGecko from "./components/Pests/Lizard/medGecko";
import YellowGecko from "./components/Pests/Lizard/yellowGecko";

import Bird from "@/components/Pests/Bird/Bird";
import CommonMyna from "./components/Pests/Bird/myna";
import HouseSparrow from "./components/Pests/Bird/sparrow";
import Pigeons from "./components/Pests/Bird/pigeons";

import Flies from "@/components/Pests/Flies/Flies";
import Housefly from "./components/Pests/Flies/housefly";
import Fruitfly from "./components/Pests/Flies/fruitfly";
import Clusterfly from "./components/Pests/Flies/clusterfly";

import Mosquito from "@/components/Pests/Mosquito/Mosquito";
import AedesMosquito from "./components/Pests/Mosquito/aedes";
import AnophelesMosquito from "./components/Pests/Mosquito/anopheles";
import CulexMosquito from "./components/Pests/Mosquito/culex";

import RedBug from "@/components/Pests/RedBug/RedBug";
import CimexLectularius from "@/components/Pests/RedBug/cimex";
import CimexHemipterus from "@/components/Pests/RedBug/cimexhemipterus";
import BatBug from "./components/Pests/RedBug/batbug";
//import Charlottes from "@/components/Pests/RedBug/charlottes";

import Tick from "@/components/Pests/Tick/Tick";
import DeepTick from "./components/Pests/Tick/deep";
import LoneStarTick from "./components/Pests/Tick/lone";
import BrownDogTick from "./components/Pests/Tick/brown";

import Venomous from "@/components/Pests/Venomous/Venomous";
import ArabianCobra from "./components/Pests/Venomous/arabianCobra";
import SandBoa from "./components/Pests/Venomous/sandBoa";
import ArabianHornedViper from "./components/Pests/Venomous/viper";


import Cockroch from "@/components/Pests/Cockroch/cockroch";
import GermanCockroach from "./components/Pests/Cockroch/german";
import BrownBandedCockroach from "./components/Pests/Cockroch/brownbanded";
import SmokyBrownCockroach from "./components/Pests/Cockroch/smokybrown";
import OrientalCockroach from "./components/Pests/Cockroch/oriental";

import Termites from "@/components/Pests/Termites/Termites";
import DryWoodTermites from "./components/Pests/Termites/dry";
import SubterraneanTermites from "./components/Pests/Termites/sub";
import FormosanTermites from "./components/Pests/Termites/for";
import DampWoodTermites from "./components/Pests/Termites/damp"; 

import Wasp from "@/components/Pests/Wasp/Wasp";

import PaperWaspNest from "./components/Pests/Wasp/paper";
import HornestWasp from "./components/Pests/Wasp/hornest";
import ArabianPaperWasp from "./components/Pests/Wasp/arabian";

import Ant from "@/components/Pests/Ant/Ant";
import ArgentineAnt from "@/components/Pests/Ant/argentine";
import PavementAnt from "@/components/Pests/Ant/pavement";
import PharaohAnt from "@/components/Pests/Ant/pharaoh";
import CarpeneterAnt from "@/components/Pests/Ant/carpenter";

import BlogDetail from "@/components/Blogs/BlogGen";
import JobDetail from "@/components/Careers/JobDetail";

//import BlogsPage from "./pages/Blogs";
import "/src/index.css";
import { Dam } from "lucide-react";
import YellowJacketWasp from "./components/Pests/Wasp/yellow";

const App = () => {
  return (
    <>
      <div>
        <LanguageProvider>
          <Router>
            <Routes>
              {/* Main NavLinks */}
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/pests" element={<Pests />} />
              <Route path="/About" element={<About />} />
              <Route path="/documents" element={<Documents />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blogs" element={<BlogsPage />} />
              <Route path="/sectors" element={<Sectors />} />
              <Route path="/careers" element={<Careers />} />{" "}
              {/* Fallback route */}


              {/** Rodent Pages */}
              <Route path="/rodents" element={<Rodent />} />{" "}
              <Route path="/house-mouse" element={<HouseMouse />} />
              <Route path="/roof-rat" element={<RoofRat />} />
              <Route path="/bandicoot-rat" element={<BandicootRat />} />
              <Route path="/norway-rat" element={<NorwayRat />} />

               {/** Cockroch Pages */}
              <Route path="/cockroch" element={<Cockroch />} />
              <Route path="/german-cockroach" element={<GermanCockroach />} />
              <Route path="/brown-banded-cockroach" element={<BrownBandedCockroach />}/>
              <Route path="/smoky-brown-cockroach" element={<SmokyBrownCockroach />}/>
              <Route path="/oriental-cockroach" element={<OrientalCockroach />}/>
              

              <Route path="/spider" element={<Spider />} />
              <Route path="/house-spider" element={<HouseSpider />} />
              <Route path="/jumping-spider" element={<JumpingSpider />} />
              <Route path="/black-widow-spider" element={<BlackWidowSpider />} />

              <Route path="/tick" element={<Tick />} />
              <Route path="/deep-tick" element={<DeepTick />} />
              <Route path="/lone-star-tick" element={<LoneStarTick />} />
              <Route path="/brown-dog-tick" element={<BrownDogTick />} />
              

              <Route path="/venomous" element={<Venomous />} />
              <Route path="/arabian-cobra" element={<ArabianCobra />} />
              <Route path="/sand-boa" element={<SandBoa />} />
              <Route path="/arabian-horned-cobra" element={<ArabianHornedViper />} />
              
              
              


              {/** Mosquito Pages */}
              <Route path="/mosquito" element={<Mosquito />} />
              <Route path="/aedes-mosquito" element={<AedesMosquito/>} />
              <Route path="/anopheles-mosquito" element={<AnophelesMosquito/>} />
              <Route path="/culex-mosquito" element={<CulexMosquito/>} />
              

              
              <Route path="/wasp" element={<Wasp />} />
              <Route path="/paper-wasp-nest" element={<PaperWaspNest />} />
              <Route path="/yellow-jacket-wasp" element={<YellowJacketWasp />} />
              <Route path="/hornest-wasp" element={<HornestWasp />} />
              <Route path="/arabian-paper-wasp" element={<ArabianPaperWasp />} />
              
              
              {/** Flies Pages */}
              <Route path="/flies" element={<Flies />} />
              <Route path="/housefly" element={<Housefly />} />
              <Route path="/fruitfly" element={<Fruitfly />} />
              <Route path="/clusterfly" element={<Clusterfly />} />
              

              <Route path="/bird" element={<Bird />} />
              <Route path="/common-myna" element={<CommonMyna />} />.
              <Route path="/house-sparrow" element={<HouseSparrow />} />
              <Route path="/pigeons" element={<Pigeons />} />
            
              
               
              {/** Redbug Pages */}
              <Route path="/bedbug" element={<RedBug />} />
              <Route path="/cimex-lectularius" element={<CimexLectularius />} />
              <Route path="/cimex-hemipterus" element={<CimexHemipterus />} />
              <Route path="/bat-bug" element={<BatBug />} />
              

              <Route path="/lizard" element={<Lizard />} />
              <Route path="/house-gecko" element={<HouseGecko />} />
              <Route path="/mediterranean-gecko" element={<MedGecko />} />
              <Route path="/yellow-bellied-house-gecko" element={<YellowGecko />} />

              {/** Termite Pages */} 
              <Route path="/termites" element={<Termites />} />
              <Route path="/drywood-termites" element={<DryWoodTermites />} />
              <Route path="/subterranean-termites" element={<SubterraneanTermites />} />
              <Route path="/formosan-termites" element={<FormosanTermites />} />
              <Route path="/dampwood-termites" element={<DampWoodTermites />}/>
              
              
                        
 
              {/** Ant Pages */}
              <Route path="/ant" element={<Ant />} />
              <Route path="/argentine-ant" element={<ArgentineAnt />} />
              <Route path="/pavement-ant" element={<PavementAnt />} />
              <Route path="/pharaoh-ant" element={<PharaohAnt />} />
              <Route path="/carpenter-ant" element={<CarpeneterAnt />} />


              {/*Blog Detail WebPages */}
              <Route path="/bloggen" element={<BlogDetail />} />
              {/*Job Detail Webpages */}
              <Route path="/jobdetail" element={<JobDetail />} />
            </Routes>
          </Router>
        </LanguageProvider>
      </div>
    </>
  );
};

export default App;
