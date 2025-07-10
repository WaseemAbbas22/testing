import { BrowserRouter as HashRouter,Router, Routes, Route } from "react-router-dom";
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
import Rodent from "./pages/pests/Rodent";
import HouseMouse from "/src/components/Pests/Rodent/housemouse";
import Spider from "/src/components/Pests/Spider/Spider";
import Lizard from "/src/components/Pests/Lizard/Lizard";
import Bird from "/src/components/Pests/Bird/Bird";
import Flies from "/src/components/Pests/Flies/Flies";
import Mosquito from "/src/components/Pests/Mosquito/Mosquito";
import RedBug from "/src/components/Pests/RedBug/RedBug";
import Tick from "/src/components/Pests/Tick/Tick";
import Venomous from "/src/components/Pests/Venomous/Venomous";
import Cockroch from "/src/components/Pests/Cockroch/cockroch";
import Termites from "/src/components/Pests/Termites/Termites";
import Wasp from "/src/components/Pests/Wasp/Wasp";
import Ant from "/src/components/Pests/Ant/Ant";
import BlogDetail from "/src/components/Blogs/BlogGen";
import JobDetail from "/src/components/Careers/JobDetail";


//import BlogsPage from "./pages/Blogs";
import "/src/index.css"

const App = () => {
  return (
    <>
    <div>
      <HashRouter>
      <Router>
        <Routes>
        {/* Main NavLinks */}  
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pests" element={<Pests />} />
          <Route path="/About" element={<About />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/contact" element={<Contact /> } />
          <Route path="/blogs" element={<BlogsPage />}   />
          <Route path="/sectors" element={<Sectors />} />
          <Route path="/careers" element={<Careers />} /> {/* Fallback route */}
        

        {/** Pests Pages */}
          <Route path="/rodents" element={<Rodent />} /> {/* Fallback route */} 
          <Route path="/house-mouse" element={<HouseMouse /> }/>
          <Route path="/cockroch" element={<Cockroch /> }/>
          <Route path="/spider" element={<Spider /> }/>
          <Route path="/tick" element={<Tick /> }/>
          <Route path="/venomous" element={<Venomous/> }/>
          <Route path="/mosquito" element={<Mosquito /> }/>
          <Route path="/wasp" element={<Wasp /> }/>
          <Route path="/flies" element={<Flies /> }/>
          <Route path="/bird" element={<Bird /> }/>
          <Route path="/redbug" element={<RedBug /> }/>
          <Route path="/lizard" element={<Lizard /> }/>
          <Route path="/termites" element={<Termites /> }/>
          <Route path="/ant" element={<Ant /> }/>

        {/*Blog Detail WebPages */}
          <Route path="/bloggen" element={<BlogDetail /> }/>

        {/*Job Detail Webpages */}
          <Route path="/jobdetail" element={<JobDetail />} /> 
          
        </Routes>
      </Router>
      </HashRouter>
    </div>
    </>  
  )
}

export default App