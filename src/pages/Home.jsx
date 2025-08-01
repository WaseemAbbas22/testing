import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import HeroMain from "../components/Home/HeroMain"
import TopBar from "../components/TopBar"
import Rating from "../components/Home/Ratings"
//import { Contact } from "lucide-react"
import ContactReq from "../components/Home/ContactReq"
import AboutHome from "../components/Home/AboutHome"
import Branches from "../components/Home/Branches"
//import Services from "../components/Home/Services"
import Process from "../components/Home/Process"
import TrustSec from "../components/Home/TrustSec"
import OurTeam from "../components/Home/OurTeam"
import Clients from "../components/Home/Clients"
import Reviews from "../components/Home/Reviews"
import Form from "../components/Home/Form"
import LastSec from "../components/Home/LastSec" 
import PestsGrid from "../components/Home/PestsGrid"
//import PestsGrid from "../components/Pests/PestsGrid"
import TawkToWidget from "/src/components/TawkToWidget";

const Home = () => {
  return (
    <>
   <div className="relative">
        <TopBar />
        <Navbar />
        <HeroMain />
        <Rating />
        <ContactReq />
        <AboutHome />
        <Branches />
        {/*<Services />*/}
        {/*<PestsGrid />*/}
        <PestsGrid />
        <Process />
        <TrustSec />
        <OurTeam />
        <Clients />
        <Reviews />
        <Form /> 
        <LastSec />   
        <TawkToWidget />
        {/* Scroll-to-top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="
          fixed
          bottom-6
          left-6
          z-50
          bg-white
          text-darkgreen
          text-2xl
          font-extrabold
          px-6
          py-3
          rounded-full
          shadow
          hover:bg-gray-100
          transition
        "
      >
        ↑
      </button>

      {/* Footer */}
      <Footer />
    </div>
    
    </>
)
}

export default Home