import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About"; // Assuming you have an About page
import "./App.css"; // Assuming you have some global styles

const App = () => {
  return (
    <>
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/pests" element={<div>Pests Page</div>} />
          <Route path="/sectors" element={<div>Sectors Page</div>} />
          <Route path="/About" element={<About />} />
          <Route path="/documents" element={<div>Documents Page</div>} />     
        </Routes>
      </Router>
    </div>
    </>  
  )
}

export default App