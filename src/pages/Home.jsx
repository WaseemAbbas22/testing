import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import HeroMain from "../components/HeroMain"
import TopBar from "../components/TopBar"
import Rating from "../components/Ratings"
//import { Contact } from "lucide-react"
import ContactReq from "../components/ContactReq"
import AboutHome from "../components/AboutHome"
import Branches from "../components/Branches"
import Services from "../components/Services"
import Process from "../components/Process"
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
        <Services />
        <Process />
        <Footer />
    </div>
    </>
)
}

export default Home