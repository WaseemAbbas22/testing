import Navbar from "../components/Navbar"
import TopBar from "../components/TopBar"
import ServicesHero from "../components/Services/ServicesHero"
import PestHeroImg from '@/assets/Pests/pestHero.webp'; // Adjust the path as necessary
import Footer from "../components/Footer";
import PestsGrid from "../components/Pests/PestsGrid";
const Pests = () => {
  return (
    <>
      <div>
        <TopBar />
        <Navbar />
         <ServicesHero
                  title="Pests"
                  breadcrumb="Home > Pests"
                  bgImg={PestHeroImg}
                />
        <PestsGrid />
        <Footer />        
      </div>
    </>
  )
}

export default Pests