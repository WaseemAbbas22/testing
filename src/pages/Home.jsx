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

const Home = () => {
  return (
    <>
    <div>
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
        <Footer />
    </div>
    
    </>
)
}

export default Home