import TopBar from "/src/components/TopBar"    
import Navbar from "/src/components/Navbar"
import ServicesHero from "/src/components/Services/ServicesHero"   
import RodentHeroImg from '/src/assets/Pests/rodenthero.png'; // Adjust the path as   
import Footer from "/src/components/Footer"
import RodentSection from "/src/components/Pests/Rodent/RodentSection"; // Ensure casing matches the actual file
import RatRemovalPro from "/src/components/Pests/Rodent/RatRemovalPro"; // Ensure casing matches the actual file
import RemoveAnimals from "/src/components/Pests/Rodent/RemoveAnimals"; // Ensure casing matches the actual file
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