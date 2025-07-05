import TopBar from "../../components/TopBar"    
import Navbar from "../../components/Navbar"
import ServicesHero from "../../components/Services/ServicesHero"   
import RodentHeroImg from '/src/assets/Pests/rodenthero.png'; // Adjust the path as   
import Footer from "../../components/Footer"
import RodentSection from "../../components/Pests/RodentSection"; // Ensure casing matches the actual file
import RatRemovalPro from "../../components/Pests/RatRemovalPro"; // Ensure casing matches the actual file
import RemoveAnimals from "../../components/Pests/RemoveAnimals"; // Ensure casing matches the actual file
const Rodent = () => {
  return (
    <>
            <div>
                <TopBar />
                <Navbar />
                <ServicesHero
                    title="Professional Rat Removal Services"
                    breadcrumb="Home > Pests > Rodent"
                    bgImg={RodentHeroImg}
                />
                <RodentSection />
                <RatRemovalPro />
                <RemoveAnimals />              
                <Footer />  
            </div>
        </>
  )
}

export default Rodent;