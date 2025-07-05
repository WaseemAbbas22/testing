import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
//import BlogsPage from "./pages/Blogs";

const App = () => {
  return (
    <>
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pests" element={<Pests />} />
          <Route path="/About" element={<About />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/contact" element={<Contact /> } />
          <Route path="/blogs" element={<BlogsPage />}   />
          <Route path="/sectors" element={<Sectors />} />
          <Route path="/careers" element={<Careers />} /> {/* Fallback route */}
          <Route path="/rodents" element={<Rodent />} /> {/* Fallback route */} 
        </Routes>
      </Router>
    </div>
    </>  
  )
}

export default App